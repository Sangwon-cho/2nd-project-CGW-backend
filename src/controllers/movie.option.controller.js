const movieOptionService = require("../services/movie.option.service");
const { catchAsync } = require("../utils/errors");

const inputSeatData = catchAsync(async (req, res) => {
  const { movieOption_id, seat_id, price_id } = req.body;

  await movieOptionService.inputSeatData(movieOption_id, seat_id, price_id);

  return res.status(200).json({ movieOption_id, seat_id });
});

module.exports = { inputSeatData };
