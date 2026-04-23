function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisao por zero nao e permitida.");
  }

  return a / b;
}

function media(valores) {
  if (!Array.isArray(valores) || valores.length === 0) {
    throw new Error("Informe um array com pelo menos um numero.");
  }

  const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);
  return total / valores.length;
}

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  media
};
