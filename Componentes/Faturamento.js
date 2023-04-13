const faturamento = [
  22174.1664, 24537.6698, 26139.6134, 0, 0, 26742.6612, 42889.2258, 46251.174,
  11191.4722, 0, 0, 3847.4823, 373.7838, 2659.7563, 48924.2448, 18419.2614, 0,
  0, 35240.1826, 43829.1667, 18235.6852, 4355.0662, 13327.1025, 0, 0,
  25681.8318, 1718.1221, 13220.495, 8414.61,
];

const dias_com_faturamento = faturamento.filter((f) => f > 0);

const menor_valor = Math.min(...dias_com_faturamento);
const maior_valor = Math.max(...dias_com_faturamento);

// Calcula a média mensal de faturamento considerando apenas os dias com faturamento
const media_mensal =
  dias_com_faturamento.reduce((total, f) => total + f, 0) /
  dias_com_faturamento.length;

const dias_acima_da_media = faturamento.reduce(
  (count, f) => (f > media_mensal ? count + 1 : count),
  0
);

document.querySelector(".menor-valor").textContent = `R$ ${menor_valor.toFixed(
  2
)}`;
document.querySelector(".maior-valor").textContent = `R$ ${maior_valor.toFixed(
  2
)}`;
document.querySelector(".dias-acima-media").textContent = dias_acima_da_media;
