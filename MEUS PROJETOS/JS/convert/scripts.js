// cotacao de moedas do dia 
const USD = 5.31
const EUR = 4.67
const GBP = 4.90

// Obtendo os Elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// manipulando o input para receber só números
amount.addEventListener("input", () => {
    amount.value = amount.value.replace(/[^0-9]/g, "");
})

// capturando o evento de submit no formulario
form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value) {
        case "USD":
            convertcurrency(amount.value, USD, "US$")
            break
        case "GBP":
            convertcurrency(amount.value, GBP, "£")
            break
        case "EUR":
            convertcurrency(amount.value, EUR, "€")
            break
    }
}

// funcao para converter a moeda
function convertcurrency(amount, price, symbol) {
    try {
        if (!amount || isNaN(amount)) {
            description.textContent = "Digite um valor válido para converter."
            result.textContent = ""
            return
        }

        const valorConvertido = (parseFloat(amount) / price).toFixed(2)
        description.textContent = `R$ ${amount} = ${symbol} ${valorConvertido} (1 ${symbol} = R$${price})`
        result.textContent = `${symbol} ${valorConvertido}`

    } catch (error) {
        description.textContent = "Não foi possível converter a moeda"
        result.textContent = ""
    }
}

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