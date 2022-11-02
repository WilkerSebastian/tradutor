<h1>Tradutor</h1>

Esse repositório é de uma Rest API que fiz
para testar o puppeteer, com ele servindo 
para passar o input par ao google translate
dessa forma traduzindo o texto passado como paramêtro
na url.

<h2>Exemplo</h2>

neste exemplo iremos traduzir **"pão"** para **inglês**

text = "texto que deseja traduzir"
lang = "código da linha desejada exemplo inglês será en"

<a href="https://tradutor.onrender.com/traduzir?text=pão&lang=en">https://tradutor.onrender.com/traduzir?text=pão&lang=en</a>

**retorno**

{
  "text": "pão",
  "lang": "en",
  "translate": "bread"
}

<h3>scripts</h3>

**npm i** para instalar as dependências do projeto

**npm run dev** para rodar o servidor em modo desenvolvimento

**npm run start** para rodar o servidor em modo produção