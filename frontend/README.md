# 1. Instalar o Node
Vá até o site https://nodejs.org/pt/download e instale a última versão.

Ao conluir, abra o terminal e digite `node --version`

Output esperado (a versão pode variar) `v22.19.0`

Caso apresente erro, abra o terminal e rode os seguintes comandos:

`$NodePath="C:\Program Files\nodejs"`

`[Environment]::SetEnvironmentVariable("Path", "$NodePath;" + [Environment]::GetEnvironmentVariable("Path","User"), "User")`

`$env:Path = [Environment]::GetEnvironmentVariable("Path","User")`

# 2. Criar novo Routing Module

Entrar no diretório correto:
cd frontend/app/src

Rodar o comando para criar o diretório com routing module:

ng g novo-diretorio --routing

# 3.Criar novo componente
Entrar no diretório correto:

cd frontend/app/scr/novo-diretorio

Obs: Neste diretório precisa ter o routing module

Rodar o comando:

ng g c menu-novo-diretorio

# 4.Rodar o frontend

ng serve --open