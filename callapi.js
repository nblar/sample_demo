const exp=require('express');
const app=exp();
const axios = require('axios');

const urlPrefix= "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBV_jE8hqfiTyS24C4UJ98N1qw0aUqijvg&type=video&part=snippet&maxResults=10&q=Gomez";
//const param="Taylor-Swift";

//const url = `${urlPrefix}${param}`;


/* GET https://www.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=10&q=kabir%20singh&type=vevo&key=[YOUR_API_KEY] 
Accept: application/json
*/

data=[];

app.get('/',(req, rep)=>{

       
    axios.get(urlPrefix)
    .then(response => {
     


      for(var i in response.data.items) {
          var item = response.data.items[i];
          console.log('[%s] Title: %s', item.id.videoId, item.snippet.title);         
        }
      
    })
    .catch(error => {
      console.log(error);
    });

    rep.send("HELLO");
 

});
