const {google} = require('googleapis');
const youtube = google.blogger({
    version: 'v3',
    auth: 'AIzaSyCGy8B9eDETvLObllJuMSBTapIFoUpUfoA'
  });

  youtube.search.list({
    part: 'snippet',
    q: 'cats'
  }, function (err, data) {
    if (err) {
      console.error('Error: ' + err);
    }
    if (data) {
      console.log(data)
    }
  });