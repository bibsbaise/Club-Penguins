# 1. Instalar o Node
Vá até o site https://nodejs.org/pt/download e instale a última versão.

Ao conluir, abra o terminal e digite `node --version`

Output esperado (a versão pode variar) `v22.19.0`

Caso apresente erro, abra o terminal e rode os seguintes comandos:

`$NodePath="C:\Program Files\nodejs"`

`[Environment]::SetEnvironmentVariable("Path", "$NodePath;" + [Environment]::GetEnvironmentVariable("Path","User"), "User")`

`$env:Path = [Environment]::GetEnvironmentVariable("Path","User")`

