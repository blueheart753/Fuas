const mysql = require('mysql');
// const mysql = require('mysql2'); for MAC

const connection = mysql.createConnection({
  host: 'localhost',
  // host: '127.0.0.1', for MAC
  user: 'root',
  password: '1234',
  database: 'fuas_db',
});

function queryPromise(queryString) {
  return new Promise((resolve, reject) => {
    connection.query(queryString, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

export default async function handler(req, res) {
  let queryString = 'SELECT * from post_table';

  try {
    const rows = await queryPromise(queryString);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
