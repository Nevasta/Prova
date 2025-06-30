let Tela = document.querySelector('#resultado');

function Inscri() {
    let nometime = window.prompt("Qual o nome do time?")
    
    let nom1 = window.prompt("Qual o nome do primeiro integrante?")
    let idad1 = window.prompt("Qual a idade do primeiro integrante?")
    
    let nom2 = window.prompt("Qual é o nome do próximo integrante? ")
    let idad2 = window.prompt("Qual é a idade do próximo integrante? ")
    
    let nom3 = window.prompt("Qual é o nome do ultimo integrante?")
    let idad3 = window.prompt("Qual é a idade do ultimo integrante?")
    
    nometime = String(nometime)
    nometime = nometime.toUpperCase(nometime)
    nom1 = String(nom1)
    nom1 = nometime.toLowerCase(nom1)
    nom2 = String(nom2)
    nom2 = nom1.toLowerCase(nom2)
    nom3 = String(nom3)
    nom3 = nom1.toLowerCase(nom3)

    idad1 = Number(idad1)
    idad2 = Number(idad2)
    idad3 = Number(idad3)

    let media = idad1 + idad2 + idad3
    media /= 3

    Tela.innerHTML += `<b>Nome do time:${nometime} ${media}</b><br>Nome do primeiro integrante:${nom1} Idade do primeiro integrante:${idad1}<br>Nome do primeiro integrante:${nom2} Idade do primeiro integrante:${idad2}<br>Nome do primeiro integrante:${nom3} Idade do primeiro integrante:${idad3}</p>`
}

function Re() {
    clicks = 0
    Tela.innerHTML = `<p>O botão foi apertado: ${clicks} vez(es). </p>`;
}