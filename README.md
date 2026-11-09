# 🌆 CitizenTech — Guia de Mobilidade Urbana SP

Aplicação web interativa desenvolvida como parte da **Global Solution (2026.2)** para o curso de **Application Development** da **FIAP**.

---

## 👨‍💻 Autor
Christian Diaz - RM568324

## 📌 Sobre o Projeto
O **CitizenTech** é um guia inteligente de mobilidade urbana focado na cidade de São Paulo. A aplicação foi criada para solucionar a complexidade e a escassez de informações integradas sobre trajetos, tempo estimado, horários de pico e acessibilidade nas linhas de transporte público coletivo (Metrô e CPTM).

O projeto está alinhado diretamente aos **Objetivos de Desenvolvimento Sustentável (ODS) da ONU**:
* **ODS 9:** Indústria, Inovação e Infraestrutura.
* **ODS 10:** Redução das Desigualdades (Foco em acessibilidade e inclusão).
* **ODS 11:** Cidades e Comunidades Sustentáveis.

---

## 🚀 Funcionalidades Principais
* **Consulta e Listagem de Linhas:** Exibição dinâmica das principais linhas reais do transporte metroviário e ferroviário de São Paulo.
* **Busca Instantânea:** Filtre as linhas em tempo real digitando o nome da estação de origem, destino ou número da linha.
* **Filtro de Trajetos Rápidos:** Opção rápida para filtrar apenas linhas com duração estimada de até 30 minutos (`≤ 30 min`).
* **Detalhes do Trajeto:** Clique em qualquer linha para visualizar o painel completo contendo origem, destino, frequência, status de acessibilidade PCD e o diagrama sequencial das principais paradas.
* **Cronômetro Comparativo (Comparador de Duração):** Ferramenta interativa que permite selecionar duas linhas e calcula instantaneamente qual delas é mais rápida, exibindo a diferença exata de tempo.

---

## 🛠️ Tecnologias Utilizadas
Este projeto foi desenvolvido utilizando tecnologias web nativas, sem dependência de frameworks complexos, bancos de dados ou APIs externas:
* **HTML5:** Estruturação semântica e acessível da página.
* **CSS3:** Estilização moderna baseada em um tema escuro (*Dark Theme*), com variáveis globais (`:root`), Flexbox e CSS Grid para total **responsividade** em celulares, tablets e desktops.
* **JavaScript (ES6+):** Manipulação dinâmica do DOM, gestão de eventos e processamento do array de rotas fictícias/reais.
* **FontAwesome:** Ícones vetoriais para enriquecer a interface do usuário.

---

## 📂 Estrutura de Arquivos
```text
/
├── index.html       # Arquivo principal contendo a estrutura da interface
├── styles.css       # Folha de estilos customizada e responsiva
├── script.js        # Lógica da aplicação, base de dados e manipulação de eventos
└── README.md        # Documentação do projeto
```
---
## ⚙️ Como Executar o Projeto
Como a aplicação roda inteiramente no lado do cliente (client-side), você não precisa instalar servidores, Node.js ou configurar banco de dados.

1. Baixe ou clone este repositório na sua máquina.

    git clone https://github.com/ChristianRDiaz/GS_citizentech_Application_Development.git

2. Certifique-se de que os três arquivos principais (index.html, styles.css e script.js) estão na mesma pasta.

    cd GS_citizentech_Application_Development

3. Dê um duplo clique no arquivo index.html ou abra-o diretamente no seu navegador de preferência (Google Chrome, Firefox, Safari, etc.).

Pronto! O guia interativo estará rodando localmente.
