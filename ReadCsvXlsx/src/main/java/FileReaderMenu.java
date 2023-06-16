// Importa as classes necessárias
import com.opencsv.exceptions.CsvValidationException;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;


// Declara a classe FileReaderMenu
public class FileReaderMenu {
    private Scanner scanner;
    private FileReader fileReader;
    private CSVReader csvReader;

    // Construtor da classe
    public FileReaderMenu() {
        this.scanner = new Scanner(System.in);
    }

    // Método para executar o menu principal
    public void run() {
        System.out.println("===== Menu =====");
        System.out.println("1. Ler arquivo CSV"); // Opção do menu para ler um arquivo CSV
        System.out.print("Escolha uma opção: "); // Solicita que o usuário escolha uma opção
        int opcao = scanner.nextInt(); // Lê a escolha do usuário
        scanner.nextLine(); // Consome o caractere de nova linha deixado pelo scanner.nextInt()
        System.out.print("Digite o caminho do arquivo: "); // Solicita que o usuário insira o caminho do arquivo
        String caminhoArquivo = scanner.nextLine(); // Lê o caminho do arquivo do usuário
         switch (opcao) {
            case 1:
                lerArquivoCSV(caminhoArquivo); // Chama o método para ler o arquivo CSV
                break;
            default:
                System.out.println("Opção inválida."); // Exibe uma mensagem de erro para uma opção inválida
        }
    }


    // Método para ler o arquivo CSV
    private void lerArquivoCSV(String caminhoArquivo) {
        try {
            this.fileReader = new FileReader(caminhoArquivo); // Cria um objeto FileReader para o arquivo CSV
            this.csvReader = new CSVReaderBuilder(fileReader).withSkipLines(0).build(); // Cria um objeto CSVReader com o objeto FileReader
            String[] nextRecord;

            while ((nextRecord = csvReader.readNext()) != null) { // Lê cada linha do arquivo CSV
                for (String cell : nextRecord) { // Loop através de cada célula na linha
                    System.out.format("%-15s", cell); // Exibe o valor da célula com uma largura fixa de 15 caracteres
                }
                System.out.println(); // Move para a próxima linha após exibir cada linha do arquivo CSV
            }

        } catch (IOException e) { // Captura quaisquer exceções de IO que ocorram durante a leitura do arquivo
            e.printStackTrace(); // Exibe a pilha de chamadas para a exceção
        } catch (CsvValidationException e) { // Captura quaisquer exceções que ocorram durante a validação do CSV
            throw new RuntimeException(e); // Lança uma exceção de tempo de execução com a exceção capturada como causa
        } finally {
            closeResources();
        }
    }


    // Método para fechar os recursos
    private void closeResources() {
        try {
            if (this.csvReader != null) {
                this.csvReader.close(); // Fecha o objeto CSVReader
            }
            if (this.fileReader != null) {
                this.fileReader.close(); // Fecha o objeto FileReader
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    // Método principal para executar o programa
    public static void main(String[] args) {
        FileReaderMenu fileReaderMenu = new FileReaderMenu();
         fileReaderMenu.run();
    }
}