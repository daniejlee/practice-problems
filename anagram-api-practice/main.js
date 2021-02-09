let getAnagram = letters => {
console.log(letters)
  fetch(`http://www.anagramica.com/all/:letters`, {
  // fetch(`http://www.anagramica.com/all/:${letters}`, {
    method: 'GET',
    mode: 'no-cors',
    }
  )
  .then(res => res.json())
  .then(data => console.log(data))

}

getAnagram('word')
