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
- UC4: Realizar Teste de Nivelamento de Conhecimento
- UC5: Definir Meta de Diária
- UC6: Realizar Revisão Personalizada
- UC7: Visualizar Progresso
- UC8: Buscar Sinal no Dicionário

Ator: Sistema

- UC9: Avaliar Nível de Conhecimento
- UC10: Marcar Sinais com maior Índice de Erro
- UC11: Enviar Notificações  
### Casos de usos mais importante do sistema
- UC3: Iniciar e Completar uma Lição
- UC6: Realizar Revisão Personalizada
- UC7: Visualizar Progresso
- UC8: Buscar Sinal no Dicionário
- UC11: Enviar Notificações

  <br>
  
## Desenvolver diagrama de caso de uso UML
<details>
<summary>Código PlantUml</summary>
@startuml<br>
'''<br>
' Atores<br>
actor Aluno<br>
actor Sistema<br>
<br>
' Casos de uso do Aluno<br>
package "UC Aluno" {<br>
    (Editar perfil)<br>
    (Cadastrar usuário)<br>
    (Iniciar e Completar uma Lição)<br>
    (Realizar Teste de Nivelamento de Conhecimento)<br>
    (Definir Meta de Diária)<br>
    (Realizar Revisão Personalizada)<br>
    (Visualizar Progresso)<br>
    (Buscar Sinal no Dicionário)<br>
}<br>
<br>
' Casos de uso do Sistema<br>
package "UC Sistema" {<br>
    (Avaliar Nível de Conhecimento)<br>
    (Marcar Sinais com maior Índice de Erro)<br>
    (Enviar Notificações)<br>
}<br>

' Relacionamentos<br>
Aluno --> (Editar perfil)<br>
Aluno --> (Cadastrar usuário)<br>
Aluno --> (Iniciar e Completar uma Lição)<br>
Aluno --> (Realizar Teste de Nivelamento de Conhecimento)<br>
Aluno --> (Definir Meta de Diária)<br>
Aluno --> (Realizar Revisão Personalizada)<br>
Aluno --> (Visualizar Progresso)<br>
Aluno --> (Buscar Sinal no Dicionário)<br>
<br>
Sistema --> (Avaliar Nível de Conhecimento)<br>
Sistema --> (Marcar Sinais com maior Índice de Erro)<br>
Sistema --> (Enviar Notificações)<br>
'''<br>
@enduml<br>
</details>

https://gitlab.com/GuiRodrr/club-penguins/-/blob/main/useCaseDiagram.md

<br>

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

# Fontes
- https://www.pertodigital.com.br/blog/quantas-pessoas-conhecem-libras-no-brasil-conheca-os-dados-mais-recentes-sobre-acessibilidade-digital
- https://desculpenaoouvi.com.br/ibge-confirma-surdez-nao-e-sinonimo-de-libras/
