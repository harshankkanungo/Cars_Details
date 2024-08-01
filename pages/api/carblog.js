import * as fs from "fs";
export default async function handler(req, res) {
  let data = await fs.promises.readdir("./pages/Carblogs");
  //   console.log(data);
  let mydata;
  let datastore = [];
  for (let index = 0; index < data.length; index++) {
    let ele = data[index];
    // console.log(ele);
    mydata = await fs.promises.readFile("./pages/Carblogs/" + ele, "utf-8");
    datastore.push(JSON.parse(mydata));
  }
  res.status(200).json(datastore);
  //   console.log(datastore)
}
