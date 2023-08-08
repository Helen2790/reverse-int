function reverse (n) {
    let a = String(n);
   let arr = a.split('');
   let rev = arr.reverse();
  let  revStr = rev.join('');
  let b = Number(revStr);
  return Math.abs(b);
}