// scriptMacacos.js
document.addEventListener("DOMContentLoaded", () => {
  carregarMacacos(); // Carrega os macacos quando a página é carregada
});

// Função para carregar os macacos na tabela
function carregarMacacos() {
  fetch("http://localhost:3000/macacos") // URL correta
    .then(response => response.json())
    .then(data => {
      const tabelaBody = document.getElementById("tabela-body"); 
      tabelaBody.innerHTML = ""; 

      data.forEach(macaco => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${macaco.nome}</td>
          <td>${macaco.terreno}</td>
          <td>${macaco.custo}</td>
          <td>${macaco.classe_nome}</td>
          <td>
            <button onclick="editarMacaco('${macaco.nome}')">Editar</button>
            <button onclick="deletarMacaco('${macaco.nome}', this)">Deletar</button>
          </td>
        `;
        tabelaBody.appendChild(row);
      });
    })
    .catch(error => console.error("Erro ao buscar dados:", error));
}

// Função para adicionar um novo macaco
document.getElementById("formAdicionarMacaco").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const terreno = document.getElementById("terreno").value;
  const custo = document.getElementById("custo").value;
  const classe_nome = document.getElementById("classe_nome").value;

  fetch("http://localhost:3000/macacos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, terreno, custo, classe_nome })
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      carregarMacacos(); // Recarrega os dados na tabela
    })
    .catch(error => console.error("Erro ao adicionar macaco:", error));
});

// Função para editar um macaco
function editarMacaco(nome) {
  const novoTerreno = prompt("Novo terreno:");
  const novoCusto = prompt("Novo custo:");
  const novaClasse = prompt("Nova classe:");

  if (novoTerreno && novoCusto && novaClasse) {
    fetch(`http://localhost:3000/macacos/${nome}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ terreno: novoTerreno, custo: novoCusto, classe_nome: novaClasse })
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        carregarMacacos(); // Recarrega os dados na tabela
      })
      .catch(error => console.error("Erro ao editar macaco:", error));
  }
}

// Função para deletar um macaco
function deletarMacaco(nome, btn) {
  if (confirm(`Tem certeza que deseja deletar o macaco "${nome}"?`)) {
    fetch(`http://localhost:3000/macacos/${nome}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        const row = btn.closest("tr");
        row.remove(); // Remove a linha da tabela
      })
      .catch(error => console.error("Erro ao deletar macaco:", error));
  }
}
