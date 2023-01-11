const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");

const movieRouter = require("./movieRouter");
const locationRouter = require("./locationRouter");
const timeRouter = require("./timeRouter");
const movieOptionRouter = require("./movie.option.router");

router.use("/users", userRouter);
router.use("/movies", movieRouter);
router.use("/locations", locationRouter);
router.use("/times", timeRouter);
router.use("/movieOptions", movieOptionRouter);

module.exports = { router };
