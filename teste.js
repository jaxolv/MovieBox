clubes = [
    {
        nome: "Flamengo",
        cores: "rubro-negro",
        jogadores: ["Gabigol", "Arrascaeta", "Bruno Henrique"]
    },
    {
        nome: "Palmeiras",
        cores: "alvi-verde",
        jogadores: ["Rony", "Dudu", "Weverton"]
    },
    {
        nome: "Atlético MG",
        cores: "alvi-negro",
        jogadores: ["Hulk", "Nacho", "Everson"]
    }
]

function jogadores(nome) {
    for (let i = 0; clubes.length > i; i++) {
        for (let j = 0; clubes[i].jogadores.length > j; j++) {
            if (clubes[i].jogadores[j] === nome) { return clubes[i] }
        }
    }
}

console.log(jogadores("Arrascaeta"))