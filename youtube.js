    const exp=require('express');
    const app=exp();
    const https = require('https');
    const request = require('request');
    const axios = require('axios');
   // var List = require("collections/list");

     const urlPrefix= "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCGy8B9eDETvLObllJuMSBTapIFoUpUfoA&type=video&q";
     const param="baby";

     
 // data=[];
const url = `${urlPrefix}${param}`;
//var list = new List();


    app.get('/',(req, rep)=>{

        axios.get(url)
      .then(response => {
         //fetching data from the JSON obtained
        for(var i in response.data.items) { 
            var item = response.data.items[i];
            console.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
           
          }
        
      })
      .catch(error => {
        console.log(error);
      });

        rep.send('HEllo World');
    });

    app.listen(3000, () =>console.log('listening to port 3000'));