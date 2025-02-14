document.addEventListener("DOMContentLoaded", () => {
    carregarBloons();
  });
  
  function carregarBloons() {
    fetch("http://localhost:3000/bloons")
      .then(response => response.json())
      .then(data => {
        const tabelaBody = document.getElementById("tabela-body");
        tabelaBody.innerHTML = "";
        data.forEach(bloon => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${bloon.nome}</td>
            <td>${bloon.tier}</td>
            <td>
              <button onclick="editarBloon('${bloon.nome}')">Editar</button>
              <button onclick="deletarBloon('${bloon.nome}', this)">Deletar</button>
            </td>
          `;
          tabelaBody.appendChild(row);
        });
      })
      .catch(error => console.error("Erro ao buscar dados:", error));
  }


  document.getElementById("formAdicionarBloon").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    const nome = document.getElementById("nome").value;
    const tier = document.getElementById("tier").value;

    fetch("http://localhost:3000/bloons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, tier })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Exibe mensagem de sucesso
        window.location.reload(); // Recarrega a página para atualizar a tabela
    })
    .catch(error => console.error("Erro ao adicionar Bloon:", error));
});



  
  function editarBloon(nome) {
    const novoTier = prompt("Novo Tier:");
    if (novoTier) {
      fetch(`http://localhost:3000/bloons/${nome}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: novoTier })
      })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
          carregarBloons();
        })
        .catch(error => console.error("Erro ao editar bloon:", error));
    }
  }
  
  function deletarBloon(nome, btn) {
    if (confirm(`Tem certeza que deseja deletar o bloon "${nome}"?`)) {
      fetch(`http://localhost:3000/bloons/${nome}`, { method: "DELETE" })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
          btn.closest("tr").remove();
        })
        .catch(error => console.error("Erro ao deletar bloon:", error));
    }
  }
  