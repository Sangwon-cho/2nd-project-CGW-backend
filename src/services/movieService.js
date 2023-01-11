const movieDao = require("../models/movieDao");

const getAllList = async () => {
  return await movieDao.getAllList();
};

const getDetail = async (movie_id) => {
  return await movieDao.getDetail(movie_id);
};
module.exports = { getAllList, getDetail };
