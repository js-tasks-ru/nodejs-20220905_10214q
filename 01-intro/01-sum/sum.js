function sum(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b) ) {
    return a + b;
  } else {
    return (a + b).throw(TypeError);
  }
}

module.exports = sum;
