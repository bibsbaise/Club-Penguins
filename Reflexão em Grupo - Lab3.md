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

<img width="487" height="328" alt="image" src="https://github.com/user-attachments/assets/a4dd94e6-47b2-4823-931a-b0c0f2988f8c" />


### Caso de uso mais importante do sistema
- UC3: Iniciar e Completar uma Lição
  
## Desenvolver diagrama de caso de uso UML
https://gitlab.com/GuiRodrr/club-penguins/-/blob/main/useCaseDiagram.md

## **Detalhamento de caso de uso principal**

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
| **Sumário**        | Cliente acessa a página de edição de perfil. Nessa página, o cliente pode customizar o seu perfil, adicionando um avatar e ícones de suas conquistas, além de adicionar amigos, compartilhar seu perfil e visualizar suas medalhas.       |
| **Pré-condição**        | O cliente deve estar logado.     |
| **Pós-condição**        | O perfil é editado conforme a vontade do cliente, e deve exibir tudo o que foi adicionado / modificado.        |
| **Pontos de Inclusão**        |         |
| **Pontos de Extensão**        |         |

## Fluxo Principal

|**Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|1. Cliente acessa a página de edição de perfil. | |
|                  |2. Sistema apresenta tela de edição de perfil e exibe as personalizações que podem ser feitas, como exibir ícones, medalhas e editar avatar. |
|3. Cliente aperta o botão "Criar Avatar". | |
|                  |4. Sistema permite a personalização de um avatar: escolha de um gênero, cor de pele, formato do rosto, cor e tipo de cabelo, cor e tipo de olho, roupas e acessórios. |
|5. Cliente personaliza seu avatar e pressiona o botão "Finalizar Avatar". | |
|                  |6. Sistema cria e exibe o avatar conforme especificado pelo cliente. |
|7. Cliente aperta o botão "Adicionar Ícones de Conquistas". | |
|                  |8. Sistema busca quais Ícones de Conquistas o Cliente já possui, mostra cada um deles numa tela, e permite que ele exiba até 3 deles em seu perfil. |
|9. Cliente seleciona 3 Ícones de sua escolha para exibir em seu perfil. | |
|                  |10. Sistema exibe os Ícones escolhidos no perfil do Cliente. |
|11. Cliente aperta o botão "Adicionar Amigos". | |
|                  |12. Sistema exibe uma tela de busca, na qual o Cliente deverá pesquisar pelo nome de usuário da pessoa que deseja adicionar como amigo ou escrever o código de amigo de uma pessoa. |
|13. Cliente seleciona a pessoa que deseja adicionar. | |
|                  |14. Sistema adiciona a pessoa como amiga. |
|15. Cliente aperta o botão "Solicitações de Amizade". | |
|                  |16. Sistema exibe uma tela mostrando quais solicitações de amizade estão pendentes para o Cliente aceitar ou rejeitar. Caso não haja nenhuma, exibirá a mensagem "Ainda não há solicitações de amizades!". |
|17. Cliente escolhe aceitar ou rejeitar a solicitação recebida. | |
|                  |18. Sistema adiciona a pessoa como amiga, caso o Cliente tenha escolhido "Aceitar", ou rejeita a solicitação, caso o Cliente tenha escolhido "Rejeitar".|



# Fontes
- https://www.pertodigital.com.br/blog/quantas-pessoas-conhecem-libras-no-brasil-conheca-os-dados-mais-recentes-sobre-acessibilidade-digital
- https://desculpenaoouvi.com.br/ibge-confirma-surdez-nao-e-sinonimo-de-libras/
