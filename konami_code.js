const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index=0;
document.body.addEventListener("keydown", init);

function init(e) {
  let key = parseInt(e.keyCode, 10);
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
