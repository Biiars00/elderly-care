"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const firebaseConfig = {
    apiKey: "AIzaSyA6qRcGyHCFwJYykX1Gd28aQii1vt73aZM",
    authDomain: "care-idosos.firebaseapp.com",
    projectId: "care-idosos",
};
const app = (0, app_1.initializeApp)(firebaseConfig);
const auth = (0, auth_1.getAuth)();
// createUserWithEmailAndPassword(auth, 'teste@care.com', 'minhaSenha123')
//   .then((userCredential) => {
//     console.log('User created:', userCredential.user.email);
//   })
//   .catch((error) => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('User already exists. Continued...');
//     } else {
//       console.error('Error creating user:', error);
//     }
//   });
async function getIdToken(email, password) {
    try {
        const auth = (0, auth_1.getAuth)(app);
        const userCredential = await (0, auth_1.signInWithEmailAndPassword)(auth, email, password);
        const user = userCredential.user;
        if (!user) {
            console.error('Usuário não encontrado');
            return;
        }
        const token = await user.getIdToken();
        console.log('Token JWT:', token);
        return token;
    }
    catch (error) {
        console.error('Erro ao fazer login e obter token:', error);
    }
}
getIdToken('teste@care.com', 'minhaSenha123');
