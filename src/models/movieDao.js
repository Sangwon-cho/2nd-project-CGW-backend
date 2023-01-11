const { sqlDataSource } = require("./data-source");

const getAllList = async () => {
  return await sqlDataSource.query(
    `SELECT
        id,
        title,
        thumbnail,
        rate,
        ticketRate
    FROM movies`
  );
};

const getDetail = async (movie_id) => {
  return await sqlDataSource.query(
    `
    SELECT
    m.thumbnail,
    m.title,
    m.rate,
    m.ageLimit
    FROM movies m
    WHERE m.id = ?
    `,
    [movie_id]
  );
};

module.exports = { getAllList, getDetail };
