const test = require("node:test");
const assert = require("node:assert/strict");

const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  media
} = require("../src/calculadora");

test("somar dois numeros corretamente", () => {
  assert.equal(somar(2, 3), 5);
});

test("subtrair dois numeros corretamente", () => {
  assert.equal(subtrair(10, 4), 6);
});

test("multiplicar dois numeros corretamente", () => {
  assert.equal(multiplicar(6, 7), 42);
});

test("dividir dois numeros corretamente", () => {
  assert.equal(dividir(12, 3), 4);
});

test("lancar erro ao dividir por zero", () => {
  assert.throws(() => dividir(5, 0), /Divisao por zero/);
});

test("calcular a media de uma lista de numeros", () => {
  assert.equal(media([7, 8, 9]), 8);
});
