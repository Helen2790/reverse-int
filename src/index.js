module.exports = function reverse (n) {

  let arr = Array.from(String(Math.abs(n)), Number);
  let newArr = arr.reverse();
  return Number(newArr.join(''))
}
