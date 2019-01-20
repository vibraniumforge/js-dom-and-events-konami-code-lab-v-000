const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index=0;

function init() {
  document.body.addEventListener("keydown", init);
  console.log(e)
  let key = parseInt(e.which, 10);
  console.log(key)
  if (key===code[index]) {
    index++;
    if (index===code.length) {
      alert("Konami Code Activated!!!");
      index=0;
    }
  } else {
      index=0;
    }
  }
