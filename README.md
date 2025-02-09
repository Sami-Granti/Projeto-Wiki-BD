Guia

Instale o Node.js: Baixe e instale o Node.js a partir do site oficial. node-v22.13.1-x64

Instale o MySQL: Baixe e instale o MySQL a partir do site oficial. MySQL Installer 8.0.41 Windows (x86, 32-bit), MSI Installer 8.0.41 2.1M

Instale as dependências necessárias (Rodar no CMD): 

npm install mysql2

npm install cors

npm install express

---------------------------------------------------------------------------------------------------------------------------------------------------------

No arquivo server.js onde mostra-se seus dados, altere os valores de acordo com seus dados do workbench do MySQL connection e a database que irá usar.

  host: 'localhost',

  user: 'root',

  password: 'sua_password', 

  database: 'meu_banco'

---------------------------------------------------------------------------------------------------------------------------------------------------------

Iniciar o comando na pasta backend:
node server.js

Criar as tabelas, importando as querys da pasta SQL_script

Para rodar o site, só inicializar o index.html.
