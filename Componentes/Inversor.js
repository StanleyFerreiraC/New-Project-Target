const string = document.getElementById("string");

string.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // evita o envio do formulário
    inverterString();
  }
});

function inverterString() {
    const string = document.getElementById("string").value;
    let stringInvertida = "";
    for (let i = string.length - 1; i >= 0; i--) {
      stringInvertida += string[i];
    }
    document.getElementById("resultado").innerHTML = stringInvertida;
  }