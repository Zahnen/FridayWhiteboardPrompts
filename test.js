function urlString(str) {
  return str.split(' ').join("%20");
}

console.log(urlString("Jasmine Ann Jones"));