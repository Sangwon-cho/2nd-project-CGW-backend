const timeDao = require("../models/timeDao");
const getTimeBymovieIdAndbranchIdAndDate = async (movie_id, branch_id) => {
  return await timeDao.getTimeBymovieIdAndbranchIdAndDate(movie_id, branch_id);
};

const getMovieOptionId = async (movie_id, branch_id, date_id, time_id) => {
  return await timeDao.getMovieOptionId(movie_id, branch_id, date_id, time_id);
};

module.exports = { getTimeBymovieIdAndbranchIdAndDate, getMovieOptionId };
