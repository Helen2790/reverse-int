module.exports = function reverse (n) {  
    let a = String(n);
    let arr = a.split('');
    let rev = arr.reverse();
    let  revStr = rev.join('');
   
    return parseInt(revStr)
}
