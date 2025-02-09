// script.js

// Faz a requisição para o servidor Node.js
fetch('http://localhost:3000/dados')
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => {
    console.log(data); // Exibe os dados no console

    // Seleciona o elemento <ul> no HTML
    const listaDados = document.getElementById('dados-lista');

    // Itera sobre os dados e os adiciona à lista
    data.forEach(item => {
      const li = document.createElement('li'); // Cria um elemento <li>
      li.textContent = JSON.stringify(item); // Adiciona os dados ao <li>
      listaDados.appendChild(li); // Adiciona o <li> à <ul>
    });
  })
  .catch(error => {
    console.error('Erro ao buscar dados:', error);
  });   