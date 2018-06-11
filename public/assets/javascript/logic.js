let config = {
  apiKey: "AIzaSyDvzDG6RSdBNFP2jaPLc-ezJfIqnkpJAZk",
  authDomain: "jlernercamp.firebaseapp.com",
  databaseURL: "https://jlernercamp.firebaseio.com",
  projectId: "jlernercamp",
  storageBucket: "jlernercamp.appspot.com",
  messagingSenderId: "231699552517"
};
firebase.initializeApp(config);

const database = firebase.database();
const messageRef = database.ref("/messages");
$('#dropdownMenu1').dropdown();

$(document).ready(function () {
  let name    = $('#name'),
      email   = $('#email'),
      message = $('#message'),
      submit  = $('#submit'),
      clear   = $('#clear');

  // TODO:  Object from form data needs to be submitted to firebase
  submit.on('click', function (event) {
    event.preventDefault();
    let messageObj = {
      name   : name.val().trim(),
      email  : email.val().trim(),
      message: message.val().trim()
    };
    messageRef.push(messageObj);
    $('#name, #email, #message').val('');
  });
  
  clear.on('click', function (event) {
    event.preventDefault();
    $('#name, #email, #message').val('');
  });
});
