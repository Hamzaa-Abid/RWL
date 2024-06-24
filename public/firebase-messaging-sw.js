importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAG4uz_0H5Ef-V8kddxLWs-n_QCeI17ERI",
    authDomain: "rwl-net.firebaseapp.com",
    projectId: "rwl-net",
    storageBucket: "rwl-net.appspot.com",
    messagingSenderId: "851606058926",
    appId: "1:851606058926:web:c37c211ffad1989742ba3f",
    measurementId: "G-WLP0KPQLSN"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    
});