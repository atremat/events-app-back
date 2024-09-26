import { Event } from '../db/models/event.js';
import { SORT_ORDER } from '../constants/index.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getEvents = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const eventsQuery = Event.find();

  const [eventsCount, events] = await Promise.all([
    Event.find().merge(eventsQuery).countDocuments(),
    eventsQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(eventsCount, perPage, page);

  return {
    data: events,
    ...paginationData,
  };
};
