<<<<<<< HEAD
# Hoje é dia de react, BB! \o/
=======
# Hoje é dia de react, BB!
**Nosso Dontpad com algumas anotações**
http://dontpad.com/react-simara
>>>>>>> upstream/master

Vamos aprender um dos conteúdos mais queridinhos do mercado, o react. 

Vamos conhecer um pouco do universo dessa ferramenta incrível, os conceitos fundamentais e criar nossos primeiros projetinhos. 

**Objetivos** Entender os pilares do React (componentes e props) e ser capaz de criar uma primeira aplicação em React do zero

Nossa aula será dividida em duas partes:

1- Conceitos e primeiros passos com react ❤️ <br>
2- Partiu codar 🚀

E como sempre, após esse momento de treino e de tira-dúvidas irei passar nossa tarefinha de casa!

## `Chamada, apresentação das monitoras e acordos`
<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Usar as reações do zoom e levantar a mão para sinalizar que gostaria de falar
* Enviar as dúvidas no chat
* Manter microfone desligado quando outras pessoas estiverem falando
* Manter câmera ligada o máximo possível
* Momento mão no código, momento de olho na tela

<br>
<br>

## `Apresentação da {profa} Simara` 

  <img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="Gif Yeah" width="200">

Ex-aluna {reprograma}, desenvolvedora na ThoughtWorks e criadora do Podcast Quero Ser Dev.

<br>
<br>

---

## O que é react?
React é uma biblioteca para criação de interface de usuários.

É uma ferramenta que nasceu no Facebook para sincronizar as diferentes informações/atualizações que aconteciam na tela! 

Além disso, se tornou bastante popular devido ao fato de permitir o reuso de componentes, fácil manutenção no código e alta performance.😃

Olha aqui a documentação oficial do [React](https://pt-br.reactjs.org/).


### Biblioteca ou Framework?

"Biblioteca: é uma coleção de implementações de comportamentos escritos em uma linguagem e importadas no seu código."

Framework é uma coleção de bibliotecas.

A diferença fica explícita quando percebemos que ao usar uma lib/biblioteca podemos usar em parte do projeto e ainda refatorar para excluir a lib e o projeto continua. Já na utilização de frameworks a gente precisaria reiniciar o projeto do zero.

### Quem usa react?

Facebook, Twitter, WhatsApp, Netflix, AirBnB e em muitas outras gigantes.

### Fundamentos e Primeiros passos

**Mentalidade react:**

Vou te provar que você já sabe react, só nunca usou. rs

Você já sabe HTML e javascript, certo? 

Existe uma grande semelhança de HTML e Javascript com o comportamento/funcionamento dos componentes de react.

E a boa notícia: componente é a base do react.

**A tríade do react:**
Exemplo meu milk shake de ovomaltine do Bobs.

* Visual: o retorno dos elementos nos componentes
* Funcionalidade: as funções de javascript que dão vida aos componentes
* Estado: Cria o poder de memória nos componentes

**Dicionário react:**

* JSX: XML + Javascript, uma sintaxe que você vai estranhar no início, mas que facilita muito nossa vida. É html dentro do javascript.<br>
* Elemento: tags html que retornam de um componente
* Componente: códigos isolados, independentes e reutilizáveis, podem ser funcões ou classes.
* SPA: Single page application que é esse conceito de gerar experiência para os usuários, atualizando partes do código em vez da página inteira.
* Props: propriedades que passamos para componentes
* Estado: memória para manipular dados em componentes

### Hello World com react

#### Criando meu primeiro projeto
`npx create-react-app my-app`

#### Renderizando elementos

Como o react faz para mostrar todos os elementos e componentes na tela?

Vamos ver o ReactDOM.render()

#### Arquitetura
Agora, vamos pensar sobre uma estrutura de pastas que seja recomendada para nosso projeto em react. Importante lembrar que não precisamos criar todas as pastas, elas surgem automaticamente quando usamos o npx create-react-app.

#### 📂node_modules
>  Aqui ficam salvos todos os pacotes de dependências que precisamos para fazer a sintaxe react funcionar.  

#### 📂public
>**index.html**<br>
> Aqui está nosso html que recebe todos os códigos para mostrar na tela.

#### 📂src
> **index.js**<br>
>Aqui ficam as principais importações do react e o ReactDOM.render() que é responsável por mandar nossos componentes para o html.

> **app.js** <br>
> Aqui fica nosso principal componente, que centraliza as outras funcionalidades/páginas.

>>📂Components<br>
> Aqui criamos nossos arquivos de componentes. :)

>>📂Pages<br>
> Aqui criamos nossos arquivos de páginas que recebem os componentes.

>>📂Routes<br>
> Aqui criamos o arquivo de navegação das nossas páginas.

>>📂Services<br>
> Aqui criamos os arquivos onde podemos consumir dados de api.

>>📂Styles<br>
> Aqui podemos criar todos os estilos de nossos arquivos, desde o global que importamos para o app.js, até por component ou por page que importamos em cada arquivo relacionado.

>>📂Assets<br>
> Aqui salvamos todos os arquivos de imagens.


### Props

Propriedades ou props é um objeto javascript que passamos como parâmetro para componentes. São as props que nos permite reutilzar components e renderizar diferentes dados em cada um deles.

Como no HTML passamos as props como atributos de tags.



```
Em html:
<img src="http://">

E se a gente pudesse mudar o ingredientes do nosso milk shake ou criar as nossas próprias receitas?

<Capslock texto="Qualquer texto vai ficar em caixa alta"> // QUALQUER TEXTO VAI FICAR EM CAIXA ALTA

function Capslock(props) {
  const textoInserido = props.texto
  const textoEmCapslock = textoInserido.toUpperCase()

  return <div>{textoEmCapslock}</div>
}
```


#### Children

Children é uma propriedade do objeto props.
E assim como no HTML, temos as divs mães que criam uma hierarquia com os elementos filhos. Usando o children podemos modificar dados entre as tags de fechamento e abertura de um elemento. 

```
Em html:

<strong>Seu texto fica bold</strong>

E se a gente pudesse escrever as nossas próprias funcionalidades nas tags?

<Capslock>Qualquer texto vai ficar em caixa alta</Capslock> // QUALQUER TEXTO VAI FICAR EM CAIXA ALTA

function Capslock(props) {
  const textoInserido = props.children
  const textoEmCapslock = textoInserido.toUpperCase()

  return <div>{textoEmCapslock}</div>
}
```


<br>


**Exemplos:**

| Exemplo 1 | Descrição |
| --- | --- |
| `Hello world` | Utilizando o ReactDOM.render(), vamos renderizar o Hello World! |

| Exemplo 2 | Descrição |
| --- | --- |
| `Hello world` | Agora no App vamos renderizar o Hello World! |

| Exemplo 3 | Descrição |
| --- | --- |
| `Hello world` |  Agora vamos criar um componente Hello e passar por props o nosso Hello World|

| Exemplo 4| Descrição |
| --- | --- |
| `UpperCase` |  Agora vamos criar um componente UpperCase que transforma em CapsLock qualquer texto passado por props. |

| Exemplo 5 | Descrição |
| --- | --- |
| `UpperCase` |  Agora vamos criar um componente UpperCase que transforma em CapsLock qualquer texto passado por children.|

| Exemplo 6 | Descrição |
| --- | --- |
| `Tick` |  Vamos criar um componente que retorna nosso horário local|

| Exemplo 7 | Descrição |
| --- | --- |
| `Imagem` |  Vamos aprender como trabalhar com imagens, criando um componente que recebe um nome e uma imagem. E depois renderizar na tela esse card.|

| Exemplo 8 | Descrição |
| --- | --- |
| `Cards` | Vamos usar dados de um arquivo interno que simula um JSON para renderizar alguns cards na tela|

| Exemplo 9 | Descrição |
| --- | --- |
| `Lista` | Vamos usar dados de um arquivo interno que simula um JSON para renderizar uma lista na tela|

---
**Desafio:**

#### Calma! É só mais uma TAREFINHA DE CASA pra chamar de sua! Já treinamos bastante com nossos exemplos na aula!


Vamos criar um projetinho react do zero com direito a componetização, consumo de dados internos e uso de props.



> Passo a passo:
1) Crie um projeto react
2) Apague as informações default
3) Crie e exporte um arquivo que simula um JSON
4) Crie um componente título que recebe o texto: "Meu Primeiro Projeto React do Zero", a ser renderizado por props ou children
5) Crie um outro componente que mapeia os dados do arquivo que simula o JSON e retorna em elementos que devem ser renderizados na tela. Os dados devem conter 4 chaves e valores: id, nome, descrição e imagem.
6) Import no App.js os componentes criados, perceba os erros/warnings que o terminal/console mostra, resolva e faça todos os componentes renderizar na tela 
7) Suba esse projeto no github, atualize o read me contando tudo o que você aprendeu e usou. E suba no classroom.
8) Tente fazer entre domingo e terça, para aproveitar a aula de quarta e monitorias pra tirar dúvidas.
9) Arraseee! E qualquer coisa, me chama!


## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)
