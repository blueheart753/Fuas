import db from "./route";

function queryPromise(queryString, values) {
  return new Promise((resolve, reject) => {
    db.query(queryString, values, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

export default async function handler(req, res) {
  const { student_name, student_id, reservation, start_time, end_time } = req.body;

  let queryString = `INSERT INTO student_table (student_name, student_id, reservation, start_time, end_time) VALUES (?, ?, ?, ?, ?)`;
  let values = [student_name, student_id, reservation, start_time, end_time];

  try {
    const rows = await queryPromise(queryString, values);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
