let resultadofinal= document.getElementById('resultado')
function resolver() {
  let a = Number(document.getElementById('valor-a').value);
  let b = Number(document.getElementById('valor-b').value);
  let c = Number(document.getElementById('valor-c').value);

  let delta = b ** 2 - 4 * a * c;

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultado = 'Por favor, insira todos os valores corretamente.';
  } else if (delta < 0) {
    resultado = 'Não existem raízes reais.';
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    resultado = `As raízes são: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
  }

  resultadofinal.innerText=(resultado)
  
}
