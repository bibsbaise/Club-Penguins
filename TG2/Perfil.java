// Classe preliminar da classe Perfil, de acordo com o diagrama de classe de domínio
public class Perfil {
    
    public String analisarVidas(int qtdVidas){ // Analisar quantidade de vidas do usuário
        
        String mOutAnalise;
              
        if (qtdVidas == 0){
            mtOutClassificacao = "Ops, pinguim! Parece que suas vidas acabaram! Use suas moedas para comprar mais vidas!";
        }
        else if (qtdVidas == 1){
            mtOutClassificacao = "Cuidado! Suas vidas estão acabando, pinguim! Tenha mais certeza nas próximas licoes, senão prepare o bolso!";
        }
        else{
            mtOutClassificacao = "Pode ficar sereno e tranquilo, pinguim! Continue aprendendo e pinguinando.";
        }

        return mtOutClassificacao;
        
    }

}
