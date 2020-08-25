import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_API_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

 const database = firebase.database();


export { firebase, database as default };





 //child_removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// // child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// // child_Added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //  database.ref('expenses')
// // .once('value')
// // .then((snapshot)=> {
// //   const expenses = []

// //   snapshot.forEach((childSnapshot) => {
// //      expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()   
// //      })
// //   })

// //   console.log(expenses)
// // });

// // database.ref('expenses').on('value', (snapshot)=> {
// //     const expenses = []

// //     snapshot.forEach((childSnapshot) => {
// //        expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()   
// //        })
// //     })
// //     console.log(expenses)
// // })

// // database.ref('notes/-MFSz6hZKSYX5MnzSAaS').remove()

// // database.ref('expenses').push({
// //         description: 'To do',
// //         note: 'go for a run, react, angular, python',
// //         amount: 3000,
// //         createdAt: '20th August'
// //     })
    
//     database.ref('expenses').push({
//         description: 'love',
//         note: 'go for a run, react, angular, python',
//         amount: 3000,
//         createdAt: '20th August'
//     })

//     database.ref('expenses').push({
//         description: 'power bill',
//         note: 'go for a run, react, angular, python',
//         amount: 3000,
//         createdAt: '30th August'
//     })




// // const onValueChange =database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('error with data fetching', 0)
// // }); 

// // setTimeout(() => {
// // database.ref('age').set(29)
// // }, 3500);

// // setTimeout(() => {
// //     database.ref().off(onValueChange)
// //     }, 7000);

// //     setTimeout(() => {
// //         database.ref('age').set(30)
// //         }, 10500);

// // database.ref().on('value', (snapshot) => {
// //     const val = (snapshot.val());
// //     console.log( `${val.name} is a ${val.job.title} at ${val.job.company}`)
// // });

// // database.ref('notes').push({
// //     title: 'To do',
// //     body: 'go for a run, react, angular, python'
// // })



// // const firebaseNotes = {
// //     notes: {
// //         chikavincent: {
// //             title: 'first notes',
// //              body: 'This is my note'
// //         }
// //     }
// // }
// // const notes = [{
// //     id: 12,
// //     title: 'First Note',
// //     body: 'this is my note',
// // }, {
// //     id: 7612,
// //     title: 'Another Note',
// //     body: 'this is my note', 
// // }]
// // database.ref('notes').set(notes)
// //  database.ref('location/city')
// //  .once('value')
// //  .then((snapshot) => {
// //   const val =  snapshot.val()
// //   console.log(val)
// //  })
// //  .catch((e) => {
// //    console.log('Error fetching data', e)
// //  })
// //   database.ref().set({
// //       name: 'Andrew Mead',
// //       age: 26,
// //       stressLevel: 6,
// //       job: {
// //         title:'software developer',
// //         company: 'Google'
// //     },
// //       isSingle: true,
// //       location: {
// //           city: 'enugu state',
// //           town: 'uwani'
// //       }
// //   }).then(() => {
// //       console.log('Data is saved!')
// //   }).catch((e) => {
// //       console.log('this failed', e)
// //   })

//   //database.ref().set('this is my data')

// //   database.ref('age').set(27);
// //   database.ref('location/city').set('PH city');

// //   database.ref('attributes').set({
// //       height: 6.2,
// //       weight: 190
// //   }).then(() => {
// //     console.log('second one worked')
// //   }).catch((e) => {
// //       console.log('things didnt work', e)
// //   })

// //database.ref('isSingle').set(null);

// // database.ref()
// // .remove()
// // .then(() => {
// //    console.log('it was removed')
// // }).catch((e) => {
// //    console.log('error happened', e)
// // })

// // database.ref().update({
// // stressLevel: 10,
// // 'job/company': 'Awka',
// // 'location/city': 'Seattle'


// // });




