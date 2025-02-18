# 🍕 Pizza Shop - Gerenciamento de Delivery de Pizzaria
![PizzaShop](https://github.com/user-attachments/assets/cb0986e5-5a2f-41f4-8682-32d14c5718cb)

## 📌 Descrição
O **Pizza Shop** é um serviço web projetado para facilitar o gerenciamento de pedidos de delivery de uma pizzaria. Com ele, você pode acompanhar estatísticas mensais, visualizar o histórico completo dos pedidos e ter um controle mais eficiente das operações.

Este foi o primeiro grande projeto da trilha **Ignite da Rocketseat**, desenvolvido com **React**, seguindo boas práticas e com cobertura de testes unitários e E2E.

---

## 🎯 Objetivo
O objetivo principal foi desenvolver o **Front End** de uma API já existente, aplicando boas práticas no consumo de APIs, além de garantir qualidade com testes unitários e de ponta a ponta (**E2E**).

---

## ⚡ Funcionalidades
O **Pizza Shop** oferece uma experiência completa e intuitiva, com diversas funcionalidades essenciais para um gerenciamento eficiente:

- 🔑 **Autenticação segura**: Login e Logout rápidos e eficientes.
- 🌗 **Modo Escuro/Claro**: Alternância entre temas para uma melhor experiência visual.
- ✏️ **Gerenciamento de Perfil**: Atualize suas informações de maneira simples.
- 🔍 **Filtro de Pedidos**: Encontre rapidamente pedidos específicos.
- 🔄 **Atualização de Status**: Altere o status dos pedidos em tempo real.
- 📑 **Detalhes do Pedido**: Visualize todas as informações de cada pedido.
- 📊 **Dashboard Interativo**:
  - 📆 **Estatísticas Mensais e Diárias**: Relação detalhada dos pedidos.
  - ❌ **Pedidos Cancelados**: Monitoramento dos cancelamentos.
  - 💰 **Receita Mensal**: Acompanhamento financeiro completo.
  - 🍕 **Gráfico de Pizza**: Exibição dos itens mais pedidos.
  - 📈 **Gráfico Semanal**: Análise da receita ao longo da semana.

---

## 🚀 Como rodar a aplicação localmente

### 🏗️ 1. Configurando a API

1. Certifique-se de que possui o Docker instalado.
2. No diretório da API, execute o seguinte comando para iniciar os containers:
   ```sh
   docker compose up -d
   ```
3. Com os containers rodando, inicie a API no diretório Back End:
   ```sh
   npm run dev
   ```

### 💻 2. Rodando o Front End

1. No diretório do Front End, execute o seguinte comando:
   ```sh
   npm run dev
   ```
2. Para acessar todas as funcionalidades do sistema, entre com o e-mail administrador:
   ```
   diego.schell.f@gmail.com
   ```

---

## ✅ Rodando os Testes

1. Para executar o ambiente de testes automáticos:
   ```sh
   npm run dev:test
   ```
2. Para rodar os testes em linha de comando:
   ```sh
   npm run test
   ```
3. Para visualizar os testes de forma mais detalhada com interface gráfica:
   ```sh
   npm run test:ui
   ```

---

## 🛠️ Tecnologias Utilizadas
Este projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

- ⚛️ **React**
- 🎣 **React Hook Form**
- 🔄 **React Query**
- 🚏 **React Router Dom**
- 🖌️ **Shadcn UI**
- 🎨 **Tailwind CSS**
- ✅ **Zod**
- ⚡ **TanStack Query**
- 🎛️ **Radix UI**
- 🔗 **Axios**
- 📏 **Eslint**
- 🎭 **Playwright**
- ✏️ **Lucide React**

---

## 📢 Considerações Finais
A API utilizada neste projeto pode ser encontrada neste repositório:
🔗 [Pizzashop API](https://github.com/rocketseat-education/pizzashop-api)

📌 **Importante**: Esta aplicação **não** possui uma funcionalidade para criar novos pedidos diretamente. Por isso, utilize o e-mail sugerido para testar todas as funcionalidades do site. E para fazer o login, enviamos um magnet link como resposta no console da API, porque preferimos não usar serviços de envio de e-mail.

---

💡 **Dúvidas, sugestões ou melhorias?** Fique à vontade para contribuir! 🍕🚀

