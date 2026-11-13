
function responder(resposta) {
    const resultado = document.getElementById("resultado");

    if (resposta === true) {
        resultado.textContent =
            "🎉 Muito bem! O volume alto pode causar danos permanentes à audição.";
        resultado.style.color = "#087443";
    } else {
        resultado.textContent =
            "❌ Na verdade, sim! O volume elevado pode prejudicar sua audição.";
        resultado.style.color = "#c0392b";
    }
}
