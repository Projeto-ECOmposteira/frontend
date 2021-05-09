<div>
    <p align="center">
    <img src='https://raw.githubusercontent.com/Projeto-ECOmposteira/documentacao/main/assets/img/logo/logo.png' alt="Projeto Kokama" width="25%"/>
    </p> 
    <h1 align="center">
    Projeto ECOmposteira
    </h1>
</div>

## Front-end

O presente repositório guarda toda a parte de interface com usuário da aplicação.

## <p align="left"><a href="https://condescending-mcclintock-1495c6.netlify.app/">Utilizar aplicação em nuvem</a></p>

O front-end em conjunto com os outros microsserviços possuem deploy automático em nuvem, isto é, assim que um novo código é adicionado a branch padrão é atualizada a aplicação disponível acima.

**Observação**: por motivos de economia de recursos, os servidores do back-end permanecem inativos quando não há uso da aplicação, portanto, no primeiro acesso pode ser necessário esperar alguns segundos até que os servidores iniciem.

## Rode o ambiente

### Dependências

Inicialmente, instale localmente as seguintes dependências:

1. Instale e inicie os microsserviços de [usuário](https://github.com/Projeto-ECOmposteira/usuario), da [composteira](https://github.com/Projeto-ECOmposteira/composteira), de [notificação](https://github.com/Projeto-ECOmposteira/notification), da [API Gateway](https://github.com/Projeto-ECOmposteira/api-gateway) e do [embarcado](https://github.com/Projeto-ECOmposteira/embedded-system);
2. Instale o [gerenciador de pacotes npm](https://www.npmjs.com/get-npm/);
3. Na pasta `/frontend/app`, instale as dependências do projeto com o comando `npm install`.

### Arquivo de Configuração

1. Crie um arquivo `.env` e preencha as variáveis de ambiente de acordo com os exemplos localizados nos arquivos `.env.example`.

### Inicialização do Projeto

1. Na pasta principal do projeto, construa e inicialize a aplicação com o comando:

```bash
npm start
```

2. O microsserviço de notificação estará disponível em: `http://localhost:3000/`.
