let getAnagram = letters =>{
console.log(letters)
  fetch(`http://www.anagramica.com/all/:${letters}`)
  .then(res => res.json())
  .then(res => console.log(res))

}

getAnagram('word')
