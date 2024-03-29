import app from "firebase/app";
import "firebase/database";
import 'firebase/storage'

//Firebase doc for Web 
//Learn to use async await
//https://javascript.info/async-await

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


class FirebaseClass {
  constructor(){
    app.initializeApp(config);
    this.db = app.database();
  }

  async addtoSaveCards(props) {
    await this.db.ref('SaveCards').push(props)
  }
  
  async getCard(props) {
    const oneCard = await this.db.ref('SaveCards/' + props + '/' ).get()
    if (oneCard.exists()) {
      return oneCard.val()
    } 
  }

  async getSavedCards() {
    const listCardsSnapshot = await this.db.ref('SaveCards').get()
    if (listCardsSnapshot.exists()) {
      return listCardsSnapshot.val()
    } 
  }
    
}

export default new FirebaseClass()