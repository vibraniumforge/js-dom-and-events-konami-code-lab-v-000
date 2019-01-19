const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index=0;
document.addEventListener("keydown", init);
function init(e) {
  // Write your JavaScript code inside the init() function
  console.log(e.which);
  let key = parseInt(e.which, 10);
  if (key===code[index]) {
    index++;
    console.log(key);
    console.log(index)
    if (index===code.length) {
      console.log("Konami Code Activated");
      index=0;
    }
    else {
      index=0;
    }
  }
}
