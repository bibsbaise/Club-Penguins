// Classe preliminar da classe Perfil, de acordo com o diagrama de classe de domínio
public class Perfil {
    
    public String analisarVidas(int qtdVidas){  // Analisar quantidade de vidas do usuário
        
        String mOutAnalise;
              
        if (qtdVidas == 0){
            mtOutAnalise = "Ops, pinguim! Parece que suas vidas acabaram! Use suas moedas para comprar mais vidas!";
        }
        else if (qtdVidas == 1){
            mtOutAnalise = "Cuidado! Suas vidas estão acabando, pinguim! Tenha mais certeza nas próximas licoes, senão prepare o bolso!";
        }
        else{
            mtOutAnalise = "Pode ficar sereno e tranquilo, pinguim! Continue aprendendo e pinguinando.";
        }

        return mtOutAnalise;
        
    }

    public String analisarMoedas(int moedas){ // Analisar quantidade de moedas do usuário
        
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
