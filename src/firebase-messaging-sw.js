// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.5/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
   apiKey: "AIzaSyDzLbKnKie9jagNn9Up1_dzHGdeGD1Wo8E",
    authDomain: "ssilweb.firebaseapp.com",
    databaseURL: "https://ssilweb.firebaseio.com",
    projectId: "ssilweb",
    storageBucket: "ssilweb.appspot.com",
    messagingSenderId: "859643726626",
    appId: "1:859643726626:web:b0e99587b064fc07dc737b"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// messaging.setBackgroundMessageHandler(function(payload) {
//     // console.log(payload)
//   });

// navigator.serviceWorker.register('./firebase-messaging-sw.js')
// .then((registration) => {
//   messaging.useServiceWorker(registration);
//   // Request permission and get token.....
// });