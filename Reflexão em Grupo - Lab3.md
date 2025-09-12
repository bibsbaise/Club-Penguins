# Problema / Oportunidade percebida
Diante do atual cenário da falta de democratização ao ensino de Libras, tanto para população ouvinte e falante quanto para população com deficiência auditiva e/ou na fala, torna-se essencial ampliar o acesso a essa língua. Com esse propósito, surge o aplicativo Duo Libras, que busca difundir o ensino sobre a linguagem e, com isso, promover a inclusão e a comunicação efetiva.

Reconhecida como uma das línguas oficiais do Brasil (desde a Lei nº 10.436/2002), a Libras deveria ser amplamente acessível. Entretanto, a ausência de políticas eficazes de ensino resulta na exclusão de pessoas com deficiência auditiva e com deficiência de fala, além de limitar a interação entre esse grupo e a população ouvinte.

Portanto, o Duo Libras tem por objetivo transformar esse cenário, tornando a aprendizagem acessível, prática e integrada ao cotidiano.


<br><br>

# Justificativa para esta demanda
Democratizar e difundir o ensino da linguagem de sinais (Libras) no Brasil é urgente, dado que, segundo o Censo Demográfico de 2022 do IBGE (Instituto Brasileiro de Geografia e Estatística), há aproximadamente 2,3 milhões de pessoas surdas no Brasil, número que sobe para mais de 10 milhões se levarmos em consideração todos os graus de deficiência.

Ademais, de acordo com dados da Pesquisa Nacional de Saúde (PNS) de 2021, apenas 22,4% da população com deficiência auditiva sabe usar a língua, o que sugere que o número de surdos fluentes é baixo e que a linguagem não é parte da rotina do país, excluindo os falantes.

Outrossim, olhando para segmentos mais específicos, encontramos uma situação ainda mais crítica – somente 35,8% dos indivíduos que não conseguem ouvir de nenhuma maneira são falantes de Libras, e dos que possuem muita dificuldade, apenas 3%.

<img width="751" height="562" alt="image" src="https://github.com/user-attachments/assets/029b3970-aa84-4aad-84ac-157919ffc9e3" />

Embora não haja dados especificamente sobre quantas pessoas sem deficiência auditiva e de fala saibam se comunicar em Libras, há estimativas que apontam que cerca de 1 milhão de pessoas conhecem a linguagem – o que inclui pessoas surdas, educadores, familiares e intérpretes. Sabe-se que esse grupo representa menos de 0,5% da população brasileira, o que indica que poucas pessoas sem deficiência realmente sabem falar a Língua Brasileira de Sinais.

Dessa forma, percebe-se que a Libras ainda não faz parte do cotidiano dos brasileiros, principalmente da população ouvinte, mas, surpreendentemente, até mesmo daqueles com deficiência auditiva, o que torna essencial promover o seu ensino de forma ampla e democratizada.

<br><br>

# Modelo de caso de uso
### Casos de uso
Ator: Aluno

- UC1: Editar perfil
- UC2: Cadastrar usuário
- UC3: Iniciar e Completar uma Lição
- UC4: Realizar Login

<img width="386" height="326" alt="image" src="https://github.com/user-attachments/assets/8411b449-0204-463c-93c8-b48bb67fcff3" />

### Caso de uso mais importante do sistema
- UC3: Iniciar e Completar uma Lição
  
## Desenvolver diagrama de caso de uso UML
https://gitlab.com/GuiRodrr/club-penguins/-/blob/main/useCaseDiagram.md

## **Caso de uso: UC2 Cadastrar Usuário**

### **Especificação do Caso de Uso**
|Item | Especificação |
| ---- | ---- |
| **Identificador** | UC2 |
| **Nome** | Cadastrar Usuário |
| **Atores** | Aluno |
| **Sumário** | Aluno realiza o cadastro com e-mail e senha para poder acessar as lições e salvar seu progresso ao longo dos módulos |
| **Pré-condição** | Instalar aplicativo, possuir um e-mail válido |
| **Pós-condição** |  |
| **Pontos de Inclusão** | E-mail, Confirmar E-mail, Senha, Confirmar Senha |
| **Pontos de Extensão** | |

### **Fluxo Principal**
| Ações do Ator | Ações do Sistema |
| --- | --- |
| 1. Aluno abre o aplicativo |  |
|  | 2.Sistema apresenta a tela de boas vindas com campos de login e opção de "Criar Conta" logo abaixo |
| 3. Aluno toca em "Criar Conta" |  |
|  | 4. Sistema apresenta a tela de cadastro, com campos "digite seu e-mail", "confirme seu e-mail", "digite sua senha" e "confirme sua senha"|
| 5. Aluno insere o seu E-mail uma vez em cada campo ("digite seu e-mail" e "confirme seu e-mail") e cria sua senha, inserindo-a uma vez em cada campo ("digite sua senha" e "confirme sua senha") |  |
|  | 6. Sistema verifica se campos de E-mail e Senha estão em formato correto e conferem entre si |
|  | 7. Sistema adiciona no banco de dados o cadastro do aluno |

### **Fluxos Alternativos**

| Ações do Ator | Ações do Sistema |
| --- | --- |
| 5.1.1 Aluno insere e-mail em formato inválido |  |
|  | 5.1.2 Sistema Informa que e-mail informado está em formato inválido e solicita reinserção |


| Ações do Ator | Ações do Sistema |
| --- | --- |
| 5.2.1 Aluno insere e-mails diferentes em campos "digite seu e-mail" e "confirme seu e-mail" |  |
|  | 5.2.2 Sistema verifica que "digite seu e-mail" e "confirme seu e-mail" não conferem |
|  | 5.2.3 Sistema Informa que campos de e-mail não conferem e solicita reinserção |


| Ações do Ator | Ações do Sistema |
| --- | --- |
| 5.3.1 Aluno insere e-mails diferentes em campos "digite sua senha" e "confirme sua senha" |  |
|  | 5.2.2 Sistema verifica que "digite sua senha" e "confirme sua senha" não conferem |
|  | 5.2.3 Sistema Informa que campos de senha não conferem e solicita reinserção |

## **Caso de uso: UC4 Realizar Login**

### **Especificação do Caso de Uso**
|Item | Especificação |
| ---- | ---- |
| **Identificador** | UC4 |
| **Nome** | Realizar Login |
| **Atores** | Aluno |
| **Sumário** | Aluno realiza o login com e-mail e senha para poder acessar as lições visualizar e salvar seu progresso ao longo dos módulos |
| **Pré-condição** | Instalar aplicativo, ter realizado cadastro |
| **Pós-condição** |  |
| **Pontos de Inclusão** | E-mail, Senha |
| **Pontos de Extensão** | |

### **Fluxo Principal**
| Ações do Ator | Ações do Sistema |
| --- | --- |
| 1. Aluno abre o aplicativo |  |
|  | 2.Sistema apresenta a tela de boas vindas com campos de login e opção de "Criar Conta" logo abaixo |
| 3. Aluno digita seu E-mail e Senha nos campos "digite seu e-mail" e "digite sua senha" |  |
|  | 4. Sistema verifica o banco de dados e confere se Fernet de e-mail e senha conferem com os dados inseridos pelo usuário |
|  | 5. Sistema permite entrada de usuário |

### **Fluxos Alternativos**

| Ações do Ator | Ações do Sistema |
| --- | --- |
| 3.1.1 Aluno digita e-mail não cadastrado |  |
|  | 3.1.2 Sistema informa que e-mail não foi encontrado e pede reinserção, também sugere aluno cadastrar caso não esteja |


| Ações do Ator | Ações do Sistema |
| --- | --- |
| 3.2.1 Aluno digita e-mail cadastrado, mas Fernet de senha armazenado no banco e lido não conferem |  |
|  | 3.2.2 Sistema informa que senha é inválida e pede reinserção |

### **Caso de uso: Iniciar e completar uma lição**

**Cenário de sucesso principal:** 
Um aluno inicia uma aula, executa cada exercício, e finaliza a lição com sucesso.

**Cenários alternativos:** <br>
- Se o aluno gastar todas as suas vidas em erros, e decidir não recarregá-las, não será possível completar a lição. <br>
- Se o aluno gastar todas as suas vidas em erros ele poderá gastar suas moedas para recarregar e voltar de onde parou. <br>
- Se o aluno errar algum dos exercícios, será necessário refazê-lo no final da lição até ter sucesso em todos os exercícios. <br>
- Se o aluno sair no meio da lição, será necessário refazê-la desde o começo. <br>


<br><br>

## Especificação do Caso de Uso 1: Editar perfil

| **Identificador** | UC01           |
|-------------------|----------------|
| **Nome**          | Editar perfil  |
| **Atores**        | Cliente        |
| **Sumário**        | Cliente acessa a página de edição de perfil. Nessa página, o cliente pode customizar o seu perfil, adicionando ícones de suas conquistas e visualizando suas medalhas.       |
| **Pré-condição**        | O cliente deve estar logado.     |
| **Pós-condição**        | O perfil é editado conforme a vontade do cliente, e deve exibir tudo o que foi adicionado / modificado.        |
| **Pontos de Inclusão**        |    Realizar Login (UC04)     |
| **Pontos de Extensão**        |         |

## Fluxo Principal

|**Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|1. Cliente acessa a página de edição de perfil. | |
|                  |2. Sistema apresenta tela de edição de perfil e exibe as personalizações que podem ser feitas, como exibir ícones de conquistas e visualizar medalhas. |
|3. Cliente aperta o botão "Adicionar Ícones de Conquistas". | |
|                  |4. Sistema busca quais Ícones de Conquistas o Cliente já possui, mostra cada um deles numa tela, e permite que ele exiba até 3 deles em seu perfil. |
|5. Cliente seleciona 3 Ícones de sua escolha para exibir em seu perfil. | |
|                  |6. Sistema exibe os Ícones escolhidos no perfil do Cliente. |
|7. Cliente aperta o botão "Visualizar Medalhas. | |
|                  |8. Sistema busca e exibe uma tela mostrando as medalhas já obtidas pelo Cliente ao longo de seus estudos. Fim do caso de uso. |

## Fluxo Alternativo

|**Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|5.1.1 Cliente tenta adicionar um ícone que ainda não obteve. | |
|                  |5.1.2. Sistema apresenta uma mensagem dizendo que este ícone ainda não foi obtido, e permite que ele selecione outro. |

## Especificação do Caso de Uso 3: Iniciar e Completar uma Lição

| **Identificador** | UC03           |
|-------------------|----------------|
| **Nome**          | Iniciar e Completar uma Lição |
| **Atores**        | Cliente       |
| **Sumário**        | Cliente acessa a página de módulos. Nessa página, o cliente acessa os módulos disponíveis para serem estudados e pode escolher qual deseja aprender no momento. Ao escolher um módulo, ele deve selecionar a lição em que parou, ou, caso esteja iniciando um módulo, deve selecionar a lição inicial. Após iniciar a lição, ele terá 5 vidas, que serão perdidas a cada erro cometido. Para recarregá-las, o usuário terá que assistir um vídeo. Ao chegar ao exercício final e completá-lo, a lição será finalizada e uma nova lição será desbloqueada. |
| **Pré-condição**        | O cliente deve estar logado.     |
| **Pós-condição**        |        |
| **Pontos de Inclusão**        |   Realizar Login (UC04)  |
| **Pontos de Extensão**        |         |

## Fluxo Principal

|**Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|1. Cliente aperta o botão "Ver Módulos". | |
|                  |2. Sistema apresenta a tela de Módulos. |
|3. Cliente seleciona o módulo que deseja aprender. | |
|                  |4. Sistema busca o progresso do Cliente para ver quais lições ele já pode acessar e apresenta o módulo para o Cliente. |
|5. Cliente seleciona a lição que deseja aprender. | |
|                  |6. Sistema apresenta a tela da lição, apresentando os exercícios a serem feitos.  |
|7. Cliente completa a lição sem perder as vidas. | |
|                  |8. Sistema registra o progresso do Cliente e desbloqueia novas lições. Fim do caso de uso. |

## Fluxos Alternativos

| **Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|7.1.1 Cliente perde as vidas disponíveis. | |
| | 7.1.2 Sistema pergunta se o Cliente deseja assistir um vídeo para recarregar suas vidas. |
|7.1.3 Cliente assiste o vídeo. | |
| | 7.1.4 Sistema recarrega as vidas do Cliente. |
| 7.1.5 Cliente conclui a lição. | |

| **Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|7.1.1 Cliente perde as vidas disponíveis. | |
| | 7.1.2 Sistema pergunta se o Cliente deseja assistir um vídeo para recarregar suas vidas. |
|7.1.3 Cliente opta por não assistir o vídeo. | |
| | 7.1.4 Sistema informa que o Cliente deverá esperar por alguns minutos para que suas vidas sejam recarregadas e faz com que ele retorne para a Página de Módulos. |

| **Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|7.1.1 Cliente sai da lição antes de completá-la. | |
| | 7.1.2 Sistema pergunta se o Cliente deseja realmente sair. |
|7.1.3 Cliente afirma e volta para a Página de Módulos. | |

# Fontes
- https://www.pertodigital.com.br/blog/quantas-pessoas-conhecem-libras-no-brasil-conheca-os-dados-mais-recentes-sobre-acessibilidade-digital
- https://desculpenaoouvi.com.br/ibge-confirma-surdez-nao-e-sinonimo-de-libras/
