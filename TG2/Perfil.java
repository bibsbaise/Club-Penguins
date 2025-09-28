// Adicionando comentario para testar Jenkins Teste2 Teste 3
// Classe preliminar da classe Perfil, de acordo com o diagrama de classe de domínio
public class Perfil {
    
    public String analisarVidas(int qtdVidas){  // Analisar quantidade de vidas do usuário
        
        String mOutAnalise;
              
        if (qtdVidas == 0){
            mtOutAnalise = "ZERO";
        }
        else if (qtdVidas == 1){
            mtOutAnalise = "CUIDADO";
        }
        else if (qtdVidas > 1){
            mtOutAnalise = "OK";
        }
        else{
            mtOutAnalise = "ERRO";
        }

        return mtOutAnalise;
        
    }

    public String analisarMoedas(int moedas){
        
        String mOutAnalise;
              
        if (moedas == 0){
            mtOutAnalise = "SEM MOEDAS";
        }
        else if(moedas > 0){ // nao pode existir um caso onde a quantidade de moedas fique negativo.
            mtOutAnalise = "COM MOEDAS";
        }
        else{
            mtOutAnalise = "ERRO";
        }


        return mtOutAnalise;
        
    }

    
}
