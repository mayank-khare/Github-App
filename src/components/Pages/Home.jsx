import React, {useState, useEffect} from 'react';
import Buttons from '../UI/Buttons';
import Avatar from '@mui/material/Avatar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

export default function Home(){

  const [userToken, setUserToken] = useState(null);
  const [userCode, setUserCode] = useState(null);

  const client_secret = "67e591ea55a76e41374d0f561bb320a73d23198c";
  const client_id = "Iv1.546fc89e60ea2a0d";
  const CLIENT_ID = "Iv1.546fc89e60ea2a0d";
const REDIRECT_URI = "https://Github-App-1.mayankkhare.repl.co/home";
const CLIENT_SECRET = "67e591ea55a76e41374d0f561bb320a73d23198c"



  var formdata = new FormData();
  formdata.append("client_id", "fca5c8e1bb6896911889");
  formdata.append("client_secret", "256927418223d8c3d288e591feb5621d0f5fa8e8");

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow',
  mode: 'no-cors',
  };

  //  fetch(`https://github.com/login/oauth/access_tokenclient_id=${client_id}&client_secret=${client_secret}&code=${code}`


// Getting OAuth token from the code received from Github

  useEffect(() => {

      const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
      console.log(code);
      // setUserCode(code);
      
      formdata.append("code", code);
      
      console.log(userCode);
      if (code) {
      // this.setState({ status: STATUS.LOADING });
      fetch("https://github.com/login/oauth/access_token",
      requestOptions)
      .then(response => response.text())
      // .then(({ token }) => {
        .then((token) => {
          // setUserToken(token);
          console.log(token);
        }
          )
      .catch((error) => {
      console.error('Error:', error);
})
      }
  }, []
  );


// GraphQL API Query to fetch user's information

//   useEffect(() => {
//     var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer ghu_AR2bh3cDp3IZNm8GXs1ziZsQttaAjM0Ytuqy");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Cookie", "_octo=GH1.1.1563999722.1635108819; logged_in=no");

// var graphql = JSON.stringify({
//   query: "query($number_of_repos:Int!) {\r\n  viewer {\r\n    name\r\n     repositories(last: $number_of_repos) {\r\n       nodes {\r\n         name,\r\n         description,\r\n         url,\r\n         createdAt,\r\n       }\r\n     }\r\n   }\r\n}",
//   variables: {"number_of_repos":5}
// })
// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: graphql,
//   redirect: 'follow'
// };

// fetch("https://api.github.com/graphql", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
//   })

  return (
    <>
    <Router>
      <Buttons name="logout" style={{margin: '1rem'}}></Buttons>
      <Buttons name="details" />
      <h3> Home Page </h3>
      <Avatar />
      <h3> User's Repo List </h3>
    </Router>
    </>
  );
}