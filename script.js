let estado = "";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
    const data = await response.json();

    estado = data.address.state || "";

    console.log("Estado:", estado);
  });
}








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
    `🧵 Filamento: <b>R$ ${custoFilamento.toFixed(2)}</b><br><br><br>
         ⚡ Energia: <b>R$ ${custoEnergia.toFixed(2)}</b><br>(${estado ? ("R$ " + kwhPorEstado[estado] + " por kWh em " + estado) : ("R$ ")})<br><br>
         🛠 Depreciação: <b>R$ ${depreciacao.toFixed(2)}</b> <br>(estimada em 1% do valor total)<br><br><br>
         💰 Custo Total da Peça: <b>R$ ${custoTotal.toFixed(2)}</b><br><br><br>
         📦 Sugestão de filamento custo-benefício: <br><a href="#">Voolt3D</a>
         `;
  document.getElementById("resultado").style.display = "block";
}

var kwhPorEstado = {
  "AC": 0.79,
  "AL": 0.86,
  "AP": 0.80,
  "AM": 0.85,
  "BA": 0.82,
  "CE": 0.72,
  "DF": 0.74,
  "ES": 0.68,
  "GO": 0.74,
  "MA": 0.71,
  "MT": 0.84,
  "MS": 0.87,
  "Minas Gerais": 0.79,
  "PA": 0.93,
  "PB": 0.58,
  "PR": 0.62,
  "PE": 0.74,
  "PI": 0.82,
  "RJ": 0.87,
  "RN": 0.72,
  "RS": 0.70,
  "RO": 0.72,
  "RR": 0.66,
  "SC": 0.61,
  "SP": 0.67,
  "SE": 0.66,
  "TO": 0.82
}

var consumo = {
  "BambuLab A1": 0.095,
  "BambuLab A1 Mini": 0.057,
  "Creality K1C": 0.2,
  "Creality Ender 3 V3": 0.11,
  "Creality Kobra 3": 0.217
}

var consumoMedio = 0.140


















