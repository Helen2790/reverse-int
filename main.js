function numToReverse (number) {
    let a = String(number);
   let arr = a.split('');
   let rev = arr.reverse();
  let  revStr = rev.join('');
    return Number(revStr);
}