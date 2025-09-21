// HTML para o select de moeda
const currencySelectHTML = `
<select name="currency" id="currency" required>
  <option value="" disabled selected hidden>Selecione a moeda</option>
  <option value="USD">Dólar Americano</option>
  <option value="EUR">Euro</option>
  <option value="GBP">Libra Esterlina</option>
</select>
`;

// Inserindo o HTML do select de moeda no documento
document.addEventListener("DOMContentLoaded", () => {
  const currencyContainer = document.getElementById("currency-container");
  currencyContainer.innerHTML = currencySelectHTML;
});