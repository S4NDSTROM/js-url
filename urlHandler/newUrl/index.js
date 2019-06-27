function urlService(orgUrl) {
  console.log('req.body, but inside urlService: ', orgUrl);
  console.log('gen id: ', generateId());
  return orgUrl;
  
}
function validator () {

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