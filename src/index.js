module.exports = function reverse (n) {
    let result = Math.abs(n).toString().split("");
    return result.reverse().join("");
  
}
