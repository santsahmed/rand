import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
    //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'data');
  //Read the json data file data.json
  var fileContents = await fs.readFile(jsonDirectory + '/data.txt', 'utf8');
  fileContents = fileContents.toString() // makes the buffer into a readable string
  fileContents = fileContents.split('\r\n') // makes all the items in the list

  var randomNum = Math.floor(Math.random() * fileContents.length)

  console.log(randomNum)
  res.status(200).json({ line: fileContents[randomNum] })
}
