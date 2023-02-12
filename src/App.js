import React from 'react';
//{useState, useRef}
import './App.css';

// import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import {useAuthState} from 'react-firebase-hooks/auth';
// import {useCollectionData} from 'react-firebase-hooks/firestore'
import PgRegister from './pages/Login/PgRegister';

// firebase.initializeApp({
//   apiKey: "AIzaSyBwW0Bycz6-VHfbNErartsPpBmuqZDoxQE",
//   authDomain: "react-web-app-b2406.firebaseapp.com",
//   projectId: "react-web-app-b2406",
//   storageBucket: "react-web-app-b2406.appspot.com",
//   messagingSenderId: "56227368269",
//   appId: "1:56227368269:web:82152030def8bed29e7b04"
// })

// const auth = firebase.auth();
// const firestore = firebase.firestore();

function App() {

  // const [user] = useAuthState(auth);

  return (
    // <div className="App">
    //   <header>
    //     <SignOut/>

    //   </header>

    //   <section>
    //     {user ? <ChatRoom/> : <SignIn/>}
    //   </section>
    // </div>
    <PgRegister/>
  );
}

// function SignIn(){
//   const SignInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return(
//     <button onClick={SignInWithGoogle}>Sign in with Google</button>
//   )
// }

// function SignOut(){
//   return auth.currentUser && (
//     <button onClick={() => auth.signOut()}>Sign Out</button>  
//   )
// }

// function ChatRoom() {
//   const dummy = useRef();

//   const messageRef = firestore.collection('messages');
//   const query = messageRef.orderBy('createAt');

//   const [messages] = useCollectionData(query, {idField: 'id'});

//   const [formValue, setFormValue] = useState('');

//   const sendMessage = async(e) => {
//     e.preventDefault();
//     const {uid, photoURL} = auth.currentUser;

//     await messageRef.add({
//       text: formValue,
//       createAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL    
//     })

//     setFormValue('');

//     dummy.current.scrollIntoView({behavior: 'smooth'});

//   }


//   return (
//     <>
//       <main>
//         {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}

//         <div ref={dummy}></div>
        
//       </main>
//       <form onSubmit={sendMessage}>
//         <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
//         <button type="submit">Send</button>
//       </form>
//     </>
//   )
// }

// function ChatMessage(props){
//   const {text, uid, photoURL} = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL} alt="..."/>
//       <p>{text}</p>
//     </div>
//   )
// }

export default App;
