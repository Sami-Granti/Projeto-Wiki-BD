// scriptMapas.js
document.addEventListener("DOMContentLoaded", () => {
  carregarMapas();
});

// Função para carregar os mapas na tabela
function carregarMapas() {
  fetch("http://localhost:3000/mapas")
    .then(response => response.json())
    .then(data => {
      const tabelaBody = document.getElementById("tabela-body");
      tabelaBody.innerHTML = "";

      data.forEach(mapa => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${mapa.nome}</td>
          <td>${mapa.dificuldade}</td>
          <td>${mapa.lanes}</td>
          <td>
            <button onclick="editarMapa('${mapa.nome}')">Editar</button>
            <button onclick="deletarMapa('${mapa.nome}', this)">Deletar</button>
          </td>
        `;
        tabelaBody.appendChild(row);
      });
    })
    .catch(error => console.error("Erro ao buscar dados:", error));
}

// Função para adicionar um novo mapa
document.getElementById("formAdicionarMapa").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const dificuldade = document.getElementById("dificuldade").value;
  const lanes = document.getElementById("lanes").value;

  fetch("http://localhost:3000/mapas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, dificuldade, lanes })
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      carregarMapas();
    })
    .catch(error => console.error("Erro ao adicionar mapa:", error));
});

// Função para editar um mapa
function editarMapa(nome) {
  const dificuldade = prompt("Nova dificuldade:");
  const lanes = prompt("Novos lanes:");

  if (dificuldade && lanes) {
    fetch(`http://localhost:3000/mapas/${encodeURIComponent(nome)}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ dificuldade, lanes })
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        carregarMapas();
      })
      .catch(error => console.error("Erro ao editar mapa:", error));
  }
}

// Função para deletar um mapa
function deletarMapa(nome, btn) {
  if (confirm(`Tem certeza que deseja deletar o mapa "${nome}"?`)) {
    fetch(`http://localhost:3000/mapas/${encodeURIComponent(nome)}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        const row = btn.closest("tr");
        row.remove();
      })
      .catch(error => console.error("Erro ao deletar mapa:", error));
  }
}