const fs = require('fs');
const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/


const domainName = 'localhost:3000/';

function validator(url) {
  if (!urlRegex.test(url)) {
    return 'Invalid Url'
  }
  url = url.replace(/(^\w+:|^)\/\//, '');
  url = 'http://' + url;
  return urlService(url)
}
function urlService(orgUrl) {
  let newId = generateId();
  writeDb(orgUrl, newId)

  return domainName + newId;

}

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

module.exports.validator = validator;