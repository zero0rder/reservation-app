import app from 'firebase/app';
import 'firebase/auth';
import dotenv from 'dotenv'; 
dotenv.config();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSENGER_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

//You only need to create the Firebase instance with the Firebase class 
//and pass it as value prop to the React's Context.
class Firebase { 
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }
}

export default Firebase;