import com.opencsv.exceptions.CsvValidationException;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;

import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class FileReaderMenu {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("===== Menu =====");
        System.out.println("1. Ler arquivo CSV");
        System.out.print("Escolha uma opção: ");
        int opcao = scanner.nextInt();

        scanner.nextLine();

        System.out.print("Digite o caminho do arquivo: ");
        String caminhoArquivo = scanner.nextLine();

        switch (opcao) {
            case 1:
                lerArquivoCSV(caminhoArquivo);
                break;
            default:
                System.out.println("Opção inválida.");
        }
    }

    private static void lerArquivoCSV(String caminhoArquivo) {
        try {
            FileReader fileReader = new FileReader(caminhoArquivo);
            CSVReader csvReader = new CSVReaderBuilder(fileReader).withSkipLines(0).build();

            String[] nextRecord;
            while ((nextRecord = csvReader.readNext()) != null) {
                for (String cell : nextRecord) {
                    System.out.format("%-15s", cell);
                }
                System.out.println();
            }

            csvReader.close();
            fileReader.close();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (CsvValidationException e) {
            throw new RuntimeException(e);
        }
    }
}
