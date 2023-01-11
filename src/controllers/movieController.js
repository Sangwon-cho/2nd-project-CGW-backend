const movieService = require("../services/movieService");
const { catchAsync } = require("../utils/errors");

const getAllList = catchAsync(async (req, res) => {
  const movieList = await movieService.getAllList();
  return res.status(200).json(movieList);
});

const getDetail = catchAsync(async (req, res) => {
  const { movie_id } = req.params;

  const detail = await movieService.getDetail(movie_id);
  return res.status(200).json(detail);
});

module.exports = { getAllList, getDetail };
