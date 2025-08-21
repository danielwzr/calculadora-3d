function calcularCusto() {
    const valorFilamento = parseFloat(document.getElementById("valorFilamento").value) || 0;
    const pesoGasto = parseFloat(document.getElementById("pesoGasto").value) || 0;
    const custoKwh = 0.76 //uma média entre todos estados
    //const custoKwh = parseFloat(document.getElementById("custoKwh").value) || 0;
    const tempoHoras = parseFloat(document.getElementById("tempoHoras").value) || 0;
    const consumoWatts = 110 //uma média
    //const consumoWatts = parseFloat(document.getElementById("consumoWatts").value) || 0;
       
    // Custo do filamento (considerando rolo de 1kg)
    const custoFilamento = (valorFilamento / 1000) * pesoGasto;

    // Custo de energia
    const custoEnergia = ((tempoHoras * consumoWatts) / 1000) * custoKwh;

    // Custo depreciação
    const depreciacao = (custoFilamento + custoEnergia) * 0.01;

    // Custo total
    const custoTotal = custoFilamento + custoEnergia + depreciacao;

    document.getElementById("resultado").innerHTML = 
        `📦 Filamento: <b>R$ ${custoFilamento.toFixed(2)}</b><br>
         ⚡ Energia: <b>R$ ${custoEnergia.toFixed(2)}</b><br>
         🛠 Depreciação (estimada): <b>R$ ${depreciacao.toFixed(2)}</b> (1% do valor total)<br>
         💰 Custo Total da Peça: <b>R$ ${custoTotal.toFixed(2)}</b><br>
         🧵 Sugestão de filamento custo-benefício: <a href="#">Voolt3D</a>
         `;
    document.getElementById("resultado").style.display = "block";
}

var kwhPorEstado = {
  "AC": 0.791,
  "AL": 0.863,
  "AP": 0.808,
  "AM": 0.857,
  "BA": 0.821,
  "CE": 0.722,
  "DF": 0.743,
  "ES": 0.682,
  "GO": 0.745,
  "MA": 0.711,
  "MT": 0.847,
  "MS": 0.870,
  "MG": 0.796,
  "PA": 0.938,
  "PB": 0.588,
  "PR": 0.629,
  "PE": 0.744,
  "PI": 0.829,
  "RJ": 0.870,
  "RN": 0.722,
  "RS": 0.701,
  "RO": 0.727,
  "RR": 0.661,
  "SC": 0.618,
  "SP": 0.671,
  "SE": 0.666,
  "TO": 0.823
}

var consumo = {
  "BambuLab A1": 0.095,
  "BambuLab A1 Mini": 0.057,
  "Creality K1C": 0.2,
  "Creality Ender 3 V3": 0.11,
  "Creality Kobra 3": 0.217
}

var consumoMedio = 0.140
