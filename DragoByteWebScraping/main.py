from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep
import pandas as pd
import inquirer
import os


class Web:
    def __init__(self):
        self.site = 'https://projetosemds.com.br/felipe/produtos'
        self.resultados = []
        self.nome_arquivo = ''
        self.map = {
            'descricao': {
                'xpath': '/html/body/div/div/main/section[1]/section[%text%]/div[2]/h2[1]'
            },
            'preco': {
                'xpath': '/html/body/div/div/main/section[1]/section[%price%]/div[2]/h2[2]'
            }
        }
        self.driver = webdriver.Edge()
        self.driver.maximize_window()
        self.scrap()
        self.tocsv()

    def scrap(self):
        print('Aguarde, a pesquisa está sendo feita...')
        self.driver.get(self.site)
        sleep(5)
        i = 1
        while True:
            try:
                descricao = self.driver.find_element(By.XPATH,
                                                     self.map['descricao']['xpath'].replace('%text%', str(i))).text

                preco = self.driver.find_element(By.XPATH, self.map['preco']['xpath'].replace('%price%', str(i))).text

                self.resultados.append((descricao, preco))

                i += 1
            except:
                break
        print('Pesquisa concluída!')
        sleep(1)

    def tocsv(self):
        while True:
            os.system('cls')
            op = inquirer.prompt(
                [inquirer.List('opt', message="Como deseja salvar o arquivo?", choices=['Planilha', 'CSV'])])

            self.nome_arquivo = input('Digite o nome do arquivo: ')

            if op['opt'] == 'Planilha':
                df = pd.DataFrame(self.resultados, columns=['Produto', 'Preço'])
                df.to_excel(f'{self.nome_arquivo}.xlsx', index=False)

            else:
                df = pd.DataFrame(self.resultados, columns=['Produto', 'Preço'])
                df.to_csv(f'{self.nome_arquivo}.csv', index=False, encoding='utf-8', sep=';')

            print('Arquivo salvo!')
            sleep(2)
            os.system('cls')

            again = inquirer.prompt(
                [inquirer.List('opt', message="Deseja salvar de novo?", choices=['Sim', 'Não'])])

            if again['opt'] == 'Sim':
                continue

            else:
                break


if __name__ == '__main__':
    Web()
