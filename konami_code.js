const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index=0;
function init(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.detail||e.which, 10);
  if (key===code[index]) {
    index++;
    if (index===code.length) {
      console.log("Konami Code Activated");
      index=0;
    }
    else {
      index=0;
    }
  }

}
