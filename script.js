const transportRoutes = [
  {
    id: "1",
    name: "Linha 1-Azul: Tucuruvi ⇄ Jabaquara",
    origin: "Estação Tucuruvi",
    destination: "Estação Jabaquara",
    durationMinutes: 45,
    accessible: true,
    frequency: "A cada 3 minutos",
    stops: [
      "Tucuruvi",
      "Parada Inglesa",
      "Carandiru",
      "Luz",
      "São Bento",
      "Sé",
      "Paraíso",
      "Ana Rosa",
      "Santa Cruz",
      "Jabaquara",
    ],
  },
  {
    id: "2",
    name: "Linha 2-Verde: Vila Madalena ⇄ Vila Prudente",
    origin: "Estação Vila Madalena",
    destination: "Estação Vila Prudente",
    durationMinutes: 30,
    accessible: true,
    frequency: "A cada 4 minutos",
    stops: [
      "Vila Madalena",
      "Sumaré",
      "Clínicas",
      "Consolação",
      "Trianon-Masp",
      "Brigadeiro",
      "Paraíso",
      "Chácara Klabin",
      "Vila Prudente",
    ],
  },
  {
    id: "3",
    name: "Linha 3-Vermelha: Palmeiras-Barra Funda ⇄ Corinthians-Itaquera",
    origin: "Palmeiras-Barra Funda",
    destination: "Corinthians-Itaquera",
    durationMinutes: 35,
    accessible: true,
    frequency: "A cada 3 minutos",
    stops: [
      "Palmeiras-Barra Funda",
      "República",
      "Anhangabaú",
      "Sé",
      "Brás",
      "Tatuapé",
      "Corinthians-Itaquera",
    ],
  },
  {
    id: "4",
    name: "Linha 4-Amarela: Vila Sônia ⇄ Luz",
    origin: "Vila Sônia",
    destination: "Estação Luz",
    durationMinutes: 28,
    accessible: true,
    frequency: "A cada 3 minutos",
    stops: [
      "Vila Sônia",
      "Pinheiros",
      "Faria Lima",
      "Paulista",
      "Higienópolis-Mackenzie",
      "República",
      "Estação Luz",
    ],
  },
  {
    id: "5",
    name: "Linha 5-Lilás: Capão Redondo ⇄ Chácara Klabin",
    origin: "Capão Redondo",
    destination: "Chácara Klabin",
    durationMinutes: 38,
    accessible: true,
    frequency: "A cada 4 minutos",
    stops: [
      "Capão Redondo",
      "Campo Limpo",
      "Santo Amaro",
      "Brooklin",
      "AACD-Servidor",
      "Santa Cruz",
      "Chácara Klabin",
    ],
  },
  {
    id: "7",
    name: "Linha 7-Rubi: Jundiaí ⇄ Palmeiras-Barra Funda",
    origin: "Estação Jundiaí",
    destination: "Palmeiras-Barra Funda",
    durationMinutes: 50,
    accessible: true,
    frequency: "A cada 10 minutos",
    stops: [
      "Jundiaí",
      "Franco da Rocha",
      "Perus",
      "Pirituba",
      "Palmeiras-Barra Funda",
    ],
  },
];

const routesListEl = document.getElementById("routesList");
const countRoutesEl = document.getElementById("countRoutes");
const searchInput = document.getElementById("searchInput");
const filterQuickBtn = document.getElementById("filterQuickBtn");
const noResultsEl = document.getElementById("noResults");
const routeDetailsCard = document.getElementById("routeDetailsCard");

const compareA = document.getElementById("compareA");
const compareB = document.getElementById("compareB");
const compareBtn = document.getElementById("compareBtn");
const comparatorResult = document.getElementById("comparatorResult");

let onlyQuick = false;

document.addEventListener("DOMContentLoaded", () => {
  renderRoutes(transportRoutes);
  populateComparators();

  searchInput.addEventListener("input", handleSearchAndFilter);
  filterQuickBtn.addEventListener("click", toggleQuickFilter);
  compareBtn.addEventListener("click", handleComparison);
});

function renderRoutes(routes) {
  routesListEl.innerHTML = "";
  countRoutesEl.textContent = routes.length;

  if (routes.length === 0) {
    noResultsEl.classList.remove("hidden");
    return;
  } else {
    noResultsEl.classList.add("hidden");
  }

  routes.forEach((route) => {
    const card = document.createElement("div");
    card.className = "route-card";
    card.style.backgroundColor = "#141414";
    card.innerHTML = `
            <div class="route-header">
                <span class="route-code" style="color: #fcfcfc; background-color: #f67024; font-size: 1rem">Linha ${route.id}</span>
                <span class="route-duration"><i class="fa-regular fa-clock"></i> ${route.durationMinutes} min</span>
            </div>
            <div class="route-path" style="color: #fff;">${route.name}</div>
            <div class="route-footer">
                <span class="text-muted" style="color: #cbd5e1;">
                    <i class="fa-solid fa-map-pin"></i> <strong>Origem:</strong> ${route.origin} | <strong>Destino:</strong> ${route.destination}
                </span>
                <span class="access-tag ${route.accessible ? "yes" : "partial"}">
                    <i class="fa-solid ${route.accessible ? "fa-wheelchair" : "fa-triangle-exclamation"}"></i> 
                    ${route.accessible ? "Acessível" : "Parcial"}
                </span>
            </div>
        `;

    card.addEventListener("click", () => showRouteDetails(route));
    routesListEl.appendChild(card);
  });
}

function handleSearchAndFilter() {
  const term = searchInput.value.toLowerCase().trim();

  const filtered = transportRoutes.filter((route) => {
    const matchesTerm =
      route.id.toLowerCase().includes(term) ||
      route.name.toLowerCase().includes(term) ||
      route.origin.toLowerCase().includes(term) ||
      route.destination.toLowerCase().includes(term);

    const matchesQuick = onlyQuick ? route.durationMinutes <= 30 : true;

    return matchesTerm && matchesQuick;
  });

  renderRoutes(filtered);
}

function toggleQuickFilter() {
  onlyQuick = !onlyQuick;
  filterQuickBtn.classList.toggle("active", onlyQuick);
  handleSearchAndFilter();
}

function showRouteDetails(route) {
  routeDetailsCard.innerHTML = `
        <div class="details-content">
            <h4><i class="fa-solid fa-route"></i> ${route.name}</h4>
            <div class="details-info">
                <p><strong>Origem:</strong> ${route.origin}</p>
                <p><strong>Destino:</strong> ${route.destination}</p>
                <p><strong>Duração estimada:</strong> ${route.durationMinutes} minutos</p>
                <p><strong>Frequência:</strong> ${route.frequency}</p>
                <p><strong>Acessibilidade PCD:</strong> ${route.accessible ? "Disponível (Piso baixo / Elevador)" : "Parcial / Sujeito a frota"}</p>
            </div>
            <h5><i class="fa-solid fa-map-pin"></i> Principais Paradas:</h5>
            <ul class="stops-list">
                ${route.stops.map((stop) => `<li>${stop}</li>`).join("")}
            </ul>
        </div>
    `;
}

function populateComparators() {
  transportRoutes.forEach((route) => {
    const opt1 = document.createElement("option");
    opt1.value = route.id;
    opt1.textContent = `Linha ${route.id} (${route.name})`;
    compareA.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = route.id;
    opt2.textContent = `Linha ${route.id} (${route.name})`;
    compareB.appendChild(opt2);
  });
}

function handleComparison() {
  const idA = compareA.value;
  const idB = compareB.value;

  if (!idA || !idB) {
    comparatorResult.classList.remove("hidden");
    comparatorResult.innerHTML = `<span style="color: var(--danger);"><i class="fa-solid fa-circle-exclamation"></i> Por favor, selecione duas linhas válidas para comparar.</span>`;
    return;
  }

  if (idA === idB) {
    comparatorResult.classList.remove("hidden");
    comparatorResult.innerHTML = `<span style="color: #d97706;"><i class="fa-solid fa-triangle-exclamation"></i> Selecione linhas diferentes para comparar.</span>`;
    return;
  }

  const routeA = transportRoutes.find((r) => r.id === idA);
  const routeB = transportRoutes.find((r) => r.id === idB);

  const diff = Math.abs(routeA.durationMinutes - routeB.durationMinutes);
  let comparisonText = "";

  if (routeA.durationMinutes < routeB.durationMinutes) {
    comparisonText = `A <strong>Linha ${routeA.id} (${routeA.name.split(":")[0]})</strong> é <strong>${diff} min mais rápida</strong> que a Linha ${routeB.id} (${routeB.name.split(":")[0]}).`;
  } else if (routeA.durationMinutes > routeB.durationMinutes) {
    comparisonText = `A <strong>Linha ${routeB.id} (${routeB.name.split(":")[0]})</strong> é <strong>${diff} min mais rápida</strong> que a Linha ${routeA.id} (${routeA.name.split(":")[0]}).`;
  } else {
    comparisonText = `Ambas as linhas possuem exatamente a mesma duração estimada (<strong>${routeA.durationMinutes} min</strong>).`;
  }

  comparatorResult.classList.remove("hidden");
  comparatorResult.innerHTML = `
        <p style="font-size: 1.3rem;color: #f67024;"><strong>Resultado da Comparação:</strong></p>
        <p style="font-size: 1rem; margin-top: 5px; color: #e2e8f0;">${comparisonText}</p>
    `;
}
