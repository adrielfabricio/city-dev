# CityDev

## Rodando o projeto

Após clonar o repositório no ambiente local, abra o diretório da aplicação e execute o comando a seguir:

```shell
yarn
```

Este comando irá instalar todas as dependências necessárias para rodar a aplicação no emulador ou no ambiente local.

Após ter feita a instalação das dependências, execute o comando a seguir para rodar a aplicação (deve-se conectar um aparelho via USB ou abrir um emulador Android ou iOS, respectivamente):

```shell
yarn android

# ou

yarn ios
```

**Erro de SDK**

Necessário verificar se a SDK do android está instalada em caso de erro de SDK na máquina para poder rodar a aplicação no emulador, neste caso, deve-se considerar os passos a seguir.

1. Vá até a pasta android/
1. Crie um arquivo local.properties
1. Abra o arquivo
1. Cole o caminho para a SDK do Android como se segue:
   - no Windows `sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk`
   - no macOS sdk.dir = `/Users/USERNAME/Library/Android/sdk`
   - no Linux sdk.dir = `/home/USERNAME/Android/Sdk`

Substitua `USERNAME` pelo nome de usuário do PC. Feito isso, rode o comando `yarn android`.
