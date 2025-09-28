
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class PerfilTest {
    
    public PerfilTest() {
    }
    
    Eleitor objPerfil = new Perfil();

    // METODO ANALISAR VIDAS
    
    @Test
    public void testAnalisarVidasErro() {
        System.out.println("Teste da classe Perfil (analisar vidas) Erro");
        assertEquals("ERRO", objPerfil.analisarVidas(-1));
        assertEquals("ERRO", objPerfil.analisarVidas(-131));
        assertEquals("ERRO", objPerfil.analisarVidas(-1312320));
        assertEquals("ERRO", objPerfil.analisarVidas(-131));
    }
    
    @Test
    public void testAnalisarVidasOk() {
        System.out.println("Teste da classe Perfil (analisar vidas) Ok");
        assertEquals("OK", objPerfil.analisarVidas(131));
        assertEquals("OK", objPerfil.analisarVidas(24));
        assertEquals("OK", objPerfil.analisarVidas(12));
        assertEquals("OK", objPerfil.analisarVidas(2));
    }
    
    @Test
    public void testAnalisarVidasCuidado() {
        System.out.println("Teste da classe Perfil (analisar vidas) Cuidado");
        assertEquals("CUIDADO", objPerfil.analisarVidas(1));
    }
    
    @Test
    public void testAnalisarVidasZero() {
        System.out.println("Teste da classe Perfil (analisar vidas) Zero");
        assertEquals("ZERO", objPerfil.analisarVidas(0));
    }
    
    // METODO ANALISAR MOEDAS

    @Test
    public void testAnalisarMoedasErro() {
        System.out.println("Teste da classe Perfil (analisar moedas) Erro");
        assertEquals("ERRO", objPerfil.analisarMoedas(-1));
        assertEquals("ERRO", objPerfil.analisarMoedas(-67));
        assertEquals("ERRO", objPerfil.analisarMoedas(-242));
        assertEquals("ERRO", objPerfil.analisarMoedas(-19174));
    }

    public void testAnalisarMoedasComMoedas() {
        System.out.println("Teste da classe Perfil (analisar moedas) Com moedas");
        assertEquals("COM MOEDAS", objPerfil.analisarMoedas(2));
        assertEquals("COM MOEDAS", objPerfil.analisarMoedas(1));
        assertEquals("COM MOEDAS", objPerfil.analisarMoedas(565));
        assertEquals("COM MOEDAS", objPerfil.analisarMoedas(13));
    }

    public void testAnalisarMoedasSemMoedas() {
        System.out.println("Teste da classe Perfil (analisar moedas) Sem moedas");
        assertEquals("SEM MOEDAS", objPerfil.analisarMoedas(0));
    }


    
}
