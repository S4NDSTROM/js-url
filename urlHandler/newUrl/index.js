const domainName = 'localhost:3000/';
function urlService(orgUrl) {
  console.log('req.body, but inside urlService: ', orgUrl);
  // console.log('gen id: ', generateNewUrl() );
  
  return generateNewUrl();
  
}
function validator () {

}

function generateNewUrl () {
  return domainName + generateId()
}

function generateId() {
  const date = new Date();
  let base = date.getTime();
  newId = base.toString(36);
    return newId
}

function writeDb () {

}

module.exports.urlService = urlService;