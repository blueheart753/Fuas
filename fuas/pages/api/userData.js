import db from "./route";

function queryPromise(queryString) {
  return new Promise((resolve, reject) => {
    db.query(queryString, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

export default async function handler(req, res) {
  let queryString = "SELECT * from student_table";

  try {
    const rows = await queryPromise(queryString);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
