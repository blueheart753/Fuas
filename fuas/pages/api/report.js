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
  const {  reporter, criminal, title, category, report, created_at } = req.body;

  let queryString = `INSERT INTO report_table (reporter, criminal, title, category, report, created_at) VALUES (?, ?, ?, ?, ?, ?)`;
  let values = [ reporter, criminal, title, category, report, created_at];

  try {
    const rows = await queryPromise(queryString, values);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
