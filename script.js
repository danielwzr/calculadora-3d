let estado = "";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
    const data = await response.json();

    estado = data.address.state || "";
  });
}

var kwhPorEstado = {
  "Acre": 0.79,
  "Alagoas": 0.86,
  "Amapá": 0.80,
  "Amazonas": 0.85,
  "Bahia": 0.82,
  "Ceará": 0.72,
  "Distrito Federal": 0.74,
  "Espírito Santo": 0.68,
  "Goiás": 0.74,
  "Maranhão": 0.71,
  "Mato Grosso": 0.84,
  "Mato Grosso do Sul": 0.87,
  "Minas Gerais": 0.79,
  "Paraná": 0.93,
  "Paraíba": 0.58,
  "Pará": 0.62,
  "Pernambuco": 0.74,
  "Piauí": 0.82,
  "Rio de Janeiro": 0.87,
  "Rio Grande do Norte": 0.72,
  "Rio Grande do Sul": 0.70,
  "Rondônia": 0.72,
  "Roraima": 0.66,
  "Santa Catarina": 0.61,
  "São Paulo": 0.67,
  "Sergipe": 0.66,
  "Tocantins": 0.82
}






function calcularCusto() {
  console.log(kwhPorEstado[estado])
  const valorFilamento = parseFloat(document.getElementById("valorFilamento").value) || 0;
  const pesoGasto = parseFloat(document.getElementById("pesoGasto").value) || 0;
  const custoKwh = kwhPorEstado[estado] || 0.76 //uma média entre todos estados
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

  console.log(estado)

  document.getElementById("resultado").innerHTML =
    `🧵 Filamento: <b>R$ ${custoFilamento.toFixed(2)}</b><br>(${pesoGasto}g de um filamento que custa R$ ${valorFilamento}/kg)<br><br>
         ⚡ Energia: <b>R$ ${custoEnergia.toFixed(2)}</b><br>(R$ ${custoKwh} por kWh ${ estado != "" ? (" em " + estado) : (" em média no Brasil")})<br><br>
         🛠 Depreciação: <b>R$ ${depreciacao.toFixed(2)}</b> <br>(estimada em 1% do valor total)<br><br><br>
         💰 Custo Total da Peça: <b>R$ ${custoTotal.toFixed(2)}</b><br><br><br>
         📦 Sugestões de filamento custo-benefício: <br><br><a href="#">Voolt3D</a> <br><br><a href="#">MasterPrint</a>
         `;
  document.getElementById("resultado").style.display = "block";
}











var consumo = {
  "BambuLab A1": 0.095,
  "BambuLab A1 Mini": 0.057,
  "Creality K1C": 0.2,
  "Creality Ender 3 V3": 0.11,
  "Creality Kobra 3": 0.217
}

var consumoMedio = 0.140


















