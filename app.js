let button;
button = document.querySelector("#btn");

let maxChars = document.querySelector("#str");
maxChars.setAttribute("maxlength", "50");

function wordLength(){
  let wordInput = maxChars.value;
  let wordChars = wordInput.length;
  let wordOut = document.querySelector("#output")
  wordOut.append(wordChars);
}

button.addEventListener("click", wordLength);