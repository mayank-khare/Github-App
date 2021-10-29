import React, { useEffect, useState } from 'react';
import Buttons from '../UI/Buttons';
// import TextFields from '../UI/TextFields';
import GitHubIcon from '@mui/icons-material/GitHub';


function Login() {

  const [userToken, setUserToken] = useState(null);
  const [userCode, setUserCode] = useState(null);


  const client_secret = "67e591ea55a76e41374d0f561bb320a73d23198c";
  const client_id = "Iv1.546fc89e60ea2a0d";
  const CLIENT_ID = "Iv1.546fc89e60ea2a0d";
const REDIRECT_URI = "https://Github-App-1.mayankkhare.repl.co/home";
const CLIENT_SECRET = "67e591ea55a76e41374d0f561bb320a73d23198c"



// var formdata = new FormData();

//   var myHeaders = new Headers();
//   myHeaders.append("Accept", "application/json");

//   var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: formdata,
//   redirect: 'follow',
//   mode: 'no-cors',
//   };

//   //  fetch(`https://github.com/login/oauth/access_tokenclient_id=${client_id}&client_secret=${client_secret}&code=${code}`

//   useEffect(() => {

//       const code =
//       window.location.href.match(/\?code=(.*)/) &&
//       window.location.href.match(/\?code=(.*)/)[1];
//       console.log(code);
//       setUserCode(code);
      
//       formdata.append("client_id", "Iv1.546fc89e60ea2a0d");
//       formdata.append("client_secret", "67e591ea55a76e41374d0f561bb320a73d23198c");
//       formdata.append("code", code);
      
//       console.log(userCode);
//       if (code) {
//       // this.setState({ status: STATUS.LOADING });
//       fetch("https://github.com/login/oauth/access_token",
//       requestOptions)

//       .then(response => response.text())
//       // .then(({ token }) => {
//       .then((res) => {

//           setUserToken(res);
//           console.log(res);
//         }
//           )
//       .catch((error) => {
//       console.error('Error:', error);
// })
//       }
//   }, []
//   );

  return (

    <main>

    <h3> Please login using your Github ID </h3>

    <GitHubIcon fontSize="large" />
    
    <br />

    <Buttons name="Login with Github" href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`} />


    </main>

  );
}

export default Login;