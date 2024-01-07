const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
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
  let queryString = 'SELECT * from teacher_table';

  try {
    const rows = await queryPromise(queryString);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
