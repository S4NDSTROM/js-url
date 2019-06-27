const fs = require('fs');

async function getUrlService(id) {
  let url = await readDb(id)  
  return JSON.parse(url).find(rows => rows.id === id).url
}

function readDb(id) {
  return new Promise((resolve, reject) => {
  fs.readFile('./db/db.json', (err, data) => {
    if (err) return reject(err);
    resolve(data);
  });
  })
}

module.exports.getUrl = getUrlService