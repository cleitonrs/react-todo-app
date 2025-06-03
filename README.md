# 📝 React Todo App com Firebase

Uma aplicação completa de lista de tarefas desenvolvida com **React.js** e **Firebase**, oferecendo funcionalidades de autenticação de usuários, gerenciamento de tarefas em tempo real e uma interface intuitiva.

## 🚀 Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Firebase**: Plataforma Backend-as-a-Service fornecendo:
  - **Authentication**: Gerenciamento de usuários com suporte a login, cadastro e redefinição de senha.
  - **Firestore**: Banco de dados NoSQL em tempo real para armazenamento das tarefas.
- **React Router**: Gerenciamento de rotas da aplicação.

## 🎯 Funcionalidades

- Cadastro de novos usuários com e-mail e senha.
- Login seguro com autenticação via Firebase.
- Redefinição de senha por e-mail.
- Adição, edição e remoção de tarefas.
- Visualização de tarefas em tempo real sincronizadas com o Firestore.
- Interface responsiva e amigável.

## Screenshots

![Image](https://github.com/user-attachments/assets/f6cdc23e-8334-4c24-88d1-ebe9cda62474)
![Image](https://github.com/user-attachments/assets/e7d302bc-5d86-49db-95c2-3ea53c06a324)

## 📂 Estrutura do Projeto

```
react-todo-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login/
│   │   │   ├── Login.css
│   │   │   ├── Login.jsx
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ResetPassword.jsx
│   │   ├── Todo/
│   │   │   ├── Todo.jsx
│   │   │   ├── TodoForm.jsx
│   │   │   └── TodoList.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── firebase/
│   │   └── config.js
│   ├── App.jsx
│   ├── index.jsx
│   └── styles/
│       └── App.css
├── .gitignore
├── package.json
└── README.md
```

## 🔧 Configuração e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/cleitonrs/react-todo-app.git
   ```
2. **Navegue até o diretório do projeto**:
   ```bash
   cd react-todo-app
   ```
3. **Instale as dependências**:
   ```bash
   npm install
   ```
4. **Configure o Firebase**:

   - Crie um projeto no [Firebase](https://console.firebase.google.com/).
   - Ative o **Authentication** com o método de e-mail/senha.
   - Crie um banco de dados **Firestore**.
   - Obtenha as configurações do seu projeto e substitua no arquivo `src/firebase/config.js`:

   ```javascript
   const firebaseConfig = {
     apiKey: "SUA_API_KEY",
     authDomain: "SEU_AUTH_DOMAIN",
     projectId: "SEU_PROJECT_ID",
     storageBucket: "SEU_STORAGE_BUCKET",
     messagingSenderId: "SEU_MESSAGING_SENDER_ID",
     appId: "SEU_APP_ID",
   };
   ```

5. **Inicie a aplicação**:
   ```bash
   npm start
   ```
6. **Acesse no navegador**:
   ```
   http://localhost:3000
   ```

## 📌 Observações

- Certifique-se de configurar corretamente as regras de segurança do Firestore para proteger os dados dos usuários.
- A aplicação utiliza **React Context API** para gerenciar o estado de autenticação do usuário.
- As rotas são protegidas, garantindo que apenas usuários autenticados possam acessar determinadas páginas.

## Hosting

https://react-todo21.netlify.app/login