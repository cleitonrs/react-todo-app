# 📝 React Todo App with Firebase

A complete task list application developed with **React.js** and **Firebase**, offering user authentication, real-time task management, and an intuitive interface.

## 🚀 Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Firebase**: Backend-as-a-Service platform providing:
  - **Authentication**: User management with support for login, registration, and password reset.
  - **Firestore**: Real-time NoSQL database for task storage.
- **React Router**: Application route management.

## 🎯 Features

- Register new users with email and password.
- Secure login using Firebase authentication.
- Password reset via email.
- Add, edit, and delete tasks.
- Real-time task viewing synchronized with Firestore.
- Responsive and user-friendly interface.

## Screenshots

![Image](https://github.com/user-attachments/assets/f6cdc23e-8334-4c24-88d1-ebe9cda62474)
![Image](https://github.com/user-attachments/assets/e7d302bc-5d86-49db-95c2-3ea53c06a324)

## 📂 Project Structure

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

## 🔧 Setup and Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/cleitonrs/react-todo-app.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd react-todo-app
   ```
3. **Install the dependencies**:
   ```bash
   npm install
   ```
4. **Configure Firebase**:

   - Create a project on [Firebase](https://console.firebase.google.com/).
   - Enable **Authentication** with the email/password method.
   - Create a **Firestore** database.
   - Get your project configuration and replace it in the `src/firebase/config.js` file:

   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   };
   ```

5. **Start the application**:
   ```bash
   npm start
   ```
6. **Access in the browser**:
   ```
   http://localhost:3000
   ```

## 📌 Notes

- Make sure to correctly configure Firestore security rules to protect user data.
- The app uses **React Context API** to manage user authentication state.
- Routes are protected to ensure only authenticated users can access certain pages.

## Hosting

https://react-todo21.netlify.app/login