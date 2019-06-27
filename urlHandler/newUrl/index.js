const fs = require('fs');
const dbPath = '../db/db.json';
const domainName = 'localhost:3000/';

function urlService(orgUrl) {
  console.log('req.body, but inside urlService: ', orgUrl);
  let newId = generateId();
  writeDb(orgUrl.userInput, newId)

  return 'localhost:3000/' + newId;

}
function validator() {

}

// function generateNewUrl() {
//   return domainName + generateId()
// }

function generateId() {
  const date = new Date();
  let base = date.getTime();
  newId = base.toString(36);
  return newId
}

function writeDb(orgUrl, id) {
  //create if it doesn't exist
  fs.readFile('./db/db.json', function (err, data) {
    let dbData = JSON.parse(data)
  
    dbData.push({ url: orgUrl, id: id })
    

    fs.writeFile('./db/db.json', JSON.stringify(dbData), () =>
    console.log('File appended successfully')
    )
});
}



// function readDb(url){

// fs.readFile('./db/db.json', (err, data) => {
//     if (err) {
//         if (err) {
//         console.error(err);
//         return;
//     };
//     console.log('the file has been read successfully')
//     console.log('just about to cal callback', data);  
//     }
//     processFile(data, url);        
// });
// }

// function processFile(data, url) {
//   let dbContent = JSON.parse(data);
//   let temp = dbContent.filter(function(row){ return row.url === url });
//     console.log('whatevs', temp);
//     console.log('processing file...', dbContent);
// }

module.exports.urlService = urlService;