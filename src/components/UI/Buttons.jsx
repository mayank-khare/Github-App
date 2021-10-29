import React from 'react';
import Button from '@mui/material/Button';
import './Buttons.css';

const CLIENT_ID = "Iv1.546fc89e60ea2a0d";
const REDIRECT_URI = "https://Github-App-1.mayankkhare.repl.co";
const CLIENT_SECRET = "67e591ea55a76e41374d0f561bb320a73d23198c"

  // <a
  //           href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
  //         >

function Buttons(props) {
  return <a href={props.href}><Button variant="contained" className="button" style={props.style}>
  {props.children} {props.name}</Button></a>;
}

export default Buttons;