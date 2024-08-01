import * as fs from "fs";
export default function handler(req, res) {
  fs.readFile(`./pages/Carblogs/${req.query.slug}`, "utf-8", (err, data) => {
    console.log(data);
    // console.log(req.query.slug);
    if (err) {
      res.status(200).json({ error: "data not found" });
    }
    res.status(200).json(JSON.parse(data));
  });
}
