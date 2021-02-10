const fetch = require('node-fetch')

let getAnagram = letters => {
console.log(letters)

  fetch(`http://www.anagramica.com/all/:letters?callback=myCallBack`, {
  // fetch(`http://www.anagramica.com/all/:${letters}`, {
    method: 'GET',
    mode: 'no-cors',
    }
  )
  .then(res => res.json())
  .then(data => console.log(data))

// $.ajax({
//   url: `http://www.anagramica.com/all/:letters`,
//   dataType: "jsonp"
// })
// .done(function(response){
//   console.log(response)
// })

}

getAnagram('word')


// var url = "http://www.anagramica.com/best/:asdasf";

// var xhr = new XMLHttpRequest();
// xhr.open("GET", url);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     console.log(xhr.status);
//     console.log(xhr.responseText);
//   }
// };

// xhr.send();


let myCallBack = (data) => {
  console.log(data)
}

// const express = require('express');
// const app = express();

// app.use((req, res) => {
//   res.send('Hello World!');
// });

// app.listen(3000, () => {
//   // eslint-disable-next-line no-console
//   console.log('Express server listening on port 3000');
// });
