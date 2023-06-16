# Importação das bibliotecas necessárias
from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep
import pandas as pd
import inquirer
import os

 # Classe Web
class Web:
    def __init__(self):
        # Definição do site a ser acessado
        self.site = 'https://projetosemds.com.br/felipe/produtos'
        # Lista para armazenar os resultados da pesquisa
        self.resultados = []
        # Nome do arquivo a ser salvo
        self.nome_arquivo = ''
        # Mapeamento dos elementos a serem extraídos do site
        self.map = {
            'descricao': {
                'xpath': '/html/body/div/div/main/section[1]/section[%text%]/div[2]/h2[1]'
            },
            'preco': {
                'xpath': '/html/body/div/div/main/section[1]/section[%price%]/div[2]/h2[2]'
            }
        }
        # Instanciação do driver do navegador Edge
        self.driver = webdriver.Edge()
        # Maximização da janela do navegador
        self.driver.maximize_window()
        # Chamada dos métodos scrap() e tocsv()
        self.scrap()
        self.tocsv()
        
    # Método para extrair as informações do site
    def scrap(self):
        print('Aguarde, a pesquisa está sendo feita...')
        # Acesso ao site
        self.driver.get(self.site)
        # Espera de 5 segundos para carregamento do site
        sleep(5)
        # Variável para controlar o número de elementos a serem extraídos
        i = 1
        while True:
            try:
                # Extração da descrição do produto
                descricao = self.driver.find_element(By.XPATH,
                                                     self.map['descricao']['xpath'].replace('%text%', str(i))).text
                # Extração do preço do produto
                preco = self.driver.find_element(By.XPATH, self.map['preco']['xpath'].replace('%price%', str(i))).text
                # Adição da descrição e do preço à lista de resultados
                self.resultados.append((descricao, preco))
                # Incremento da variável i
                i += 1
            except:
                # Finalização do loop quando não houver mais elementos a serem extraídos
                break
        print('Pesquisa concluída!')
        sleep(1)
        
    # Método para salvar os resultados em um arquivo
    def tocsv(self):
        while True:
            # Limpeza da tela do console
            os.system('cls')
            # Pergunta ao usuário sobre o formato do arquivo a ser salvo
            op = inquirer.prompt(
                [inquirer.List('opt', message="Como deseja salvar o arquivo?", choices=['Planilha', 'CSV'])])
            # Pergunta ao usuário sobre o nome do arquivo a ser salvo
            self.nome_arquivo = input('Digite o nome do arquivo: ')
            if op['opt'] == 'Planilha':
                # Criação de um dataframe a partir da lista de resultados
                df = pd.DataFrame(self.resultados, columns=['Produto', 'Preço'])
                # Salvamento do dataframe em um arquivo xlsx
                df.to_excel(f'{self.nome_arquivo}.xlsx', index=False)
            else:
                # Criação de um dataframe a partir da lista de resultados
                df = pd.DataFrame(self.resultados, columns=['Produto', 'Preço'])
                # Salvamento do dataframe em um arquivo csv
                df.to_csv(f'{self.nome_arquivo}.csv', index=False, encoding='utf-8', sep=';')
            print('Arquivo salvo!')
            sleep(2)
            # Limpeza da tela do console
            os.system('cls')
            # Pergunta ao usuário se deseja salvar outro arquivo
            again = inquirer.prompt(
                [inquirer.List('opt', message="Deseja salvar de novo?", choices=['Sim', 'Não'])])
            if again['opt'] == 'Sim':
                # Novo ciclo do loop
                continue
            else:
                # Finalização do loop
                break


# Execução da classe Web
if __name__ == '__main__':
    Web()