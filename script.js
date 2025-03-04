let dolar = 5.7773

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})
brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "0,00"
convert("usd-to-brl")

function formatCurrency(value) {
    // Ajusta o valor
    let fixedValue = fixValue(value)
    // utilizar a função formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    // retorna o valor formatado
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if (floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}


function convert(type) {
    if (type == "usd-to-brl") {
        // ajustar o valor
        let fixedValue = fixValue(usdInput.value)
        // converter o valor
        let result = fixedValue * dolar
        result = result.toFixed(2)
        // mostrar no campo de real 
        brlInput.value = formatCurrency(result)
    }
    if (type == "brl-to-usd") {
        // ajustar o valor
        let fixedValue = fixValue(brlInput.value)
        // converter o valor
        let result = fixedValue / dolar
        result = result.toFixed(2)
        // mostrar no campo de dolar
        usdInput.value = formatCurrency(result)
    }
}

