document.addEventListener("DOMContentLoaded", () => {
    carregarContas(); // Carrega as contas quando a página é carregada
  });
  
  // Função para carregar as contas na tabela
  function carregarContas() {
    fetch("http://localhost:3000/conta")
      .then(response => response.json())
      .then(data => {
        const tabelaBody = document.getElementById("tabela-body");
        tabelaBody.innerHTML = "";
  
        data.forEach(conta => {
          const row = document.createElement("tr");
          // Converte o BLOB para uma URL que pode ser usada em uma tag <img>
          const imagemURL = conta.perfil
            ? URL.createObjectURL(new Blob([new Uint8Array(conta.perfil)], { type: 'image/jpeg' }))
            : null;
  
          row.innerHTML = `
            <td>${conta.nome_usuario}</td>
            <td>${conta.senha}</td>
            <td>
              ${imagemURL ? `<img src="${imagemURL}" alt="Perfil" style="width:50px; height:50px;">` : 'Sem imagem'}
            </td>
            <td>${conta.conta_cs_id || 'N/A'}</td>
            <td>${conta.conta_macaco_nome || 'N/A'}</td>
            <td>${conta.conta_mapa_nome || 'N/A'}</td>
            <td>
              <button onclick="editarConta('${conta.nome_usuario}')">Editar</button>
              <button onclick="deletarConta('${conta.nome_usuario}', this)">Deletar</button>
            </td>
          `;
          tabelaBody.appendChild(row);
        });
      })
      .catch(error => console.error("Erro ao buscar dados:", error));
  }
  
  // Função para adicionar uma nova conta
  document.getElementById("formAdicionarConta").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nome_usuario = document.getElementById("nome_usuario").value;
    const senha = document.getElementById("senha").value;
    const perfil = document.getElementById("perfil").files[0];
    const conta_cs_id = document.getElementById("conta_cs_id").value;
    const conta_macaco_nome = document.getElementById("conta_macaco_nome").value;
    const conta_mapa_nome = document.getElementById("conta_mapa_nome").value;
  
    const formData = new FormData();
    formData.append("nome_usuario", nome_usuario);
    formData.append("senha", senha);
    formData.append("perfil", perfil);
    formData.append("conta_cs_id", conta_cs_id);
    formData.append("conta_macaco_nome", conta_macaco_nome);
    formData.append("conta_mapa_nome", conta_mapa_nome);
  
    fetch("http://localhost:3000/conta", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        carregarContas(); // Recarrega os dados na tabela
      })
      .catch(error => console.error("Erro ao adicionar conta:", error));
  });
  
  // Função para editar uma conta
  function editarConta(nome_usuario) {
    const novaSenha = prompt("Nova senha:");
    const novoPerfil = prompt("Novo perfil (arquivo):");
    const novoCsId = prompt("Novo ID de CS:");
    const novoMacacoNome = prompt("Novo nome de macaco:");
    const novoMapaNome = prompt("Novo nome de mapa:");
  
    if (novaSenha && novoPerfil && novoCsId && novoMacacoNome && novoMapaNome) {
      const formData = new FormData();
      formData.append("senha", novaSenha);
      formData.append("perfil", novoPerfil);
      formData.append("conta_cs_id", novoCsId);
      formData.append("conta_macaco_nome", novoMacacoNome);
      formData.append("conta_mapa_nome", novoMapaNome);
  
      fetch(`http://localhost:3000/conta/${nome_usuario}`, {
        method: "PUT",
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
          carregarContas(); // Recarrega os dados na tabela
        })
        .catch(error => console.error("Erro ao editar conta:", error));
    }
  }
  
  // Função para deletar uma conta
  function deletarConta(nome_usuario, btn) {
    if (confirm(`Tem certeza que deseja deletar a conta "${nome_usuario}"?`)) {
      fetch(`http://localhost:3000/conta/${nome_usuario}`, {
        method: "DELETE"
      })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
          const row = btn.closest("tr");
          row.remove(); // Remove a linha da tabela
        })
        .catch(error => console.error("Erro ao deletar conta:", error));
    }
  }