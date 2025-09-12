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

<img width="386" height="326" alt="image" src="https://github.com/user-attachments/assets/17842a6b-b630-4907-b768-70a7ecd935cc" />

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

# Fontes
- https://www.pertodigital.com.br/blog/quantas-pessoas-conhecem-libras-no-brasil-conheca-os-dados-mais-recentes-sobre-acessibilidade-digital
- https://desculpenaoouvi.com.br/ibge-confirma-surdez-nao-e-sinonimo-de-libras/
