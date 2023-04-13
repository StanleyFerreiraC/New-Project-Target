const minhaDiv = document.getElementById("num");

num.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    if (num.value) {
    event.preventDefault(); // evita o envio do formulário
    fibonacci();
    }
  }
});

function validateInput() {
  var input = document.getElementById("num").value;
  if (input == "") {
    output.textContent = "Por favor, preencha o campo com um número inteiro.";
    return false;
  }
  return true;
}


function fibonacci() {
  
    const num = parseInt(document.getElementById("num").value);
    const output = document.getElementById("output");

    if (validateInput()) {

    if (num < 0) {
      output.innerText = "O número deve ser maior ou igual a 0!";
    } else {
      let fib = [0, 1];

      while (fib[fib.length - 1] <= num) {
        const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(nextFib);
      }

      if (fib.includes(num)) {
        output.innerText = `O número ${num} pertence à sequência de Fibonacci!`;
      } else {
        output.innerText = `O número ${num} não pertence à sequência de Fibonacci.`;
      }
    }
  }
}