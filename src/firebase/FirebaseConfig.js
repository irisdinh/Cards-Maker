import app from "firebase/app";
import "firebase/database";
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyDX5esGF_dq9vcDyDFW7ujlBCcxjC7zb3s",
    authDomain: "cards-maker-ba2ff.firebaseapp.com",
    projectId: "cards-maker-ba2ff",
    storageBucket: "cards-maker-ba2ff.appspot.com",
    messagingSenderId: "793833234277",
    appId: "1:793833234277:web:db998201315cd03aa8cb8c",
    measurementId: "G-SJCCY726TN",
    databaseURL: "https://cards-maker-ba2ff-default-rtdb.firebaseio.com/"
  };
firebase.initializeApp(config);

function Firebase (){
  return(
    <div>

    </div>
  )
}
export default Firebase 