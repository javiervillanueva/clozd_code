const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

// app.get("/", (req, res) => {
// res.send("Hi");
// });

// axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//   .then(response => {
//     console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.log(error);
//   });




// async function makeGetRequest() {
//   try {
//     const response =  await axios.get('https://randomuser.me/api/?results=1');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
 
// makeGetRequest();


  const getData = async () => {
     await axios.get('https://randomuser.me/api/?results=5000').then(response => {
        if(response) {
          console.log(response.data.results);
          userResponse = response.data.results;
          return response;
        } else {
          return [] 
        }
      });
  };


getData();

  app.get("/results", (req, res)  => {
    console.log('inside results call');
    const response = getData();
    console.log('response', response);
    console.log('userResp', userResponse);
    if(userResponse) {
    res.send(userResponse);
    }
});



// app.get("/", (req, res) => {
//     res.send({ message: "We did it!" });
//   });

app.listen(5000, ()=>{
    console.log('server running at 5000')
    })

  


