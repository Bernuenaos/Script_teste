//@ubiratan clementino
//18-05-2023
//version: 0.1.0
//O código abaixo usa a biblioteca Puppeteer para automatizar interações em uma página da web. Vou continuar comentando e explicando o restante do código:

const puppeteer = require('puppeteer');
//Este trecho de código importa a biblioteca Puppeteer, que será usada para automatizar o navegador.

async function robo() {
     //A função robo() é definida como uma função assíncrona, o que significa que ela pode usar a palavra-chave await para aguardar que promessas sejam resolvidas.

     const browser = await puppeteer.launch({ headless: false });
     //Aqui, o código inicia uma instância do navegador Puppeteer usando o método puppeteer.launch(). A opção { headless: false } indica que o navegador deve ser executado em modo visível, em oposição ao modo "headless" (sem interface gráfica).
     const page = await browser.newPage();
     //Um novo objeto Page é criado usando o método browser.newPage(). Esse objeto representa uma página web e é onde a maioria das ações de automação serão realizadas.

     await page.setViewport({
          width: 1280,
          height: 920
     })
     //O tamanho da visualização da página é definido usando o método page.setViewport(). Aqui, a largura é definida como 1266 pixels e a altura como 968 pixels.

     await page.goto('https://sebraershom.chat.comunix.tech/chat-externo')
     //A página é direcionada para a URL especificada usando o método page.goto(). Neste caso, a URL é "https://sebraershom.chat.comunix.tech/chat-externo".
     await page.waitForTimeout(4000)
     // caso queira preencher um formulario
     // identificar atraves da inspeção de elemento no navegador qual o id do campo, a função "page.type()" aceita 2 campos da b page.type('identificador', 'valor a ser preenchido')
     await page.type('#name', 'Comunix Suporte')
     await page.type('#email', 'comunix@comunix.net.br')
     await page.type('#number', '61999999999')
     //Aqui, o código preenche um formulário na página. Os métodos page.type() são usados para inserir valores nos campos identificados pelos seletores CSS especificados ('#name', '#email' e '#number').

     await page.click('[type="submit"]')
     //O código clica em um botão ou elemento específico na página usando o método page.click(). Neste caso, o seletor CSS '[type="submit"]' é usado para identificar o botão de envio do formulário.
    

     /*const conversation = await page.evaluate(() => {
          const conversa = document.querySelectorAll('.chakra-text')
          const array = [...conversa]
          const list = array.map(text => ({
               texto: text.innerText
          }))
          return list
     }) */
     /* Aqui, o código usa o método page.evaluate() para executar uma função personalizada no contexto da página. Essa função seleciona todos os elementos com a classe CSS '.chakra-text', 
     extrai o texto desses elementos e retorna um objeto contendo o texto em um formato de lista de objetos. */
     await page.waitForTimeout(20000)
     await page.type('.css-1dcq8qu', 'Comunix Suporte')
     await page.click('.css-13bnv67')
}

//await browser.close();
//Esta linha está comentada, mas é uma indicação de que o navegador deve ser fechado. No entanto, como está comentada, o navegador permanecerá aberto após a execução do script.
for (let i = 0; i < 1; i++) {
     robo();     
}/* Essa parte do código determina quantas vezes a função acima será chamada, o que significa que o número de navegadores abertos e a função executada será 1. 
Se você deseja abrir mais navegadores, você pode alterar o número 1 para a quantidade desejada de navegadores a serem abertos. */

