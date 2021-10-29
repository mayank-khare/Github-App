import React from 'react';

function Graphql(props){

      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer "+props.token);
      myHeaders.append("Content-Type", "application/json");
      

      var graphql = JSON.stringify({
        query: "query($number_of_repos:Int!) {\r\n  viewer {\r\n    name\r\n     repositories(last: $number_of_repos) {\r\n       nodes {\r\n         name,\r\n         description,\r\n         url,\r\n         createdAt,\r\n       }\r\n     }\r\n   }\r\n}",
        variables: {"number_of_repos":5}
      })
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: graphql,
        redirect: 'follow'
      };

      fetch("https://api.github.com/graphql", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


    return(
      
    )
}