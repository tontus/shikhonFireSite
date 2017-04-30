var config = {
    apiKey: "AIzaSyBRt8mdeUjfIif3_8oT1sPa87SmetopI38",
    authDomain: "shikhonsms.firebaseapp.com",
    databaseURL: "https://shikhonsms.firebaseio.com",
    projectId: "shikhonsms",
    storageBucket: "shikhonsms.appspot.com",
    messagingSenderId: "268279432"
  };
  firebase.initializeApp(config);
   const dbRef = firebase.database().ref().child("AllData")
  
  
  
  function submitForm() {
    var name = document.getElementById("name-input").value
    var status = document.getElementById("status-input").value
    var institute = document.getElementById("institute-input").value
    var phoneNumber = document.getElementById("phoneNumber-input").value
    var couponCode = document.getElementById("couponCode-input").value
    var timeStamp = Math.floor(Date.now() / 1000)
    console.log(name)
    console.log(status)
    console.log(institute)
    console.log(phoneNumber)
    console.log(couponCode)
    if(name !="" || status != "" || phoneNumber != ""){
        firebase.database().ref('AllData/').push().set({
    userName: name,
    status: status,
    phoneNumber : phoneNumber,
    institute: institute,
    couponCode: couponCode,
    timeStamp: timeStamp
  });
    }
    
}
