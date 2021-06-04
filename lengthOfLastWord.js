/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0;
  let end = true;

    // while(end){
    //   count++;
    //   if(s[i] === ' '){
    //     end = false;
    //   }
    //   i--
    // }
    // return 0;

    // let arr = s.split('')
    // while(arr.slice(-1) === ' '){
    //   arr.pop()
    // }
    // let yes =  arr.join('').split(' ');
    // console.log(yes)

    let trimmed = s.trim();
    let arr = trimmed.split('');
    return arr.pop().length
};
