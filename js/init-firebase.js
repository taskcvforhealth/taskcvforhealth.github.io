var Dia_chi_Dich_vu = "http://localhost:1200/"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeLurZ9bpy4b2W7C88ansMuYh3KZ41lnE",
    authDomain: "hackcovy-29f03.firebaseapp.com",
    databaseURL: "https://hackcovy-29f03.firebaseio.com",
    projectId: "hackcovy-29f03",
    storageBucket: "hackcovy-29f03.appspot.com",
    messagingSenderId: "239367203055",
    appId: "1:239367203055:web:6d62f6997c08274674131a"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function googleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    //firebase.auth().languageCode = 'pt';
    // provider.setCustomParameters({
    //     'login_hint': 'user@example.com'
    // });
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result)
        var obj = {};
        obj.email = result.user.email;
        obj.phoneNumber = result.user.phoneNumber;
        obj.fullName = result.user.displayName;
        obj.pictureProfile = result.user.photoURL;
        obj.historyAppointment = [];
        sessionStorage.setItem("user",JSON.stringify(obj));
        //Them_Benh_nhan(obj);
        console.log(obj);
        window.location.href="../book_an_appointment.html";
        // ...
    }).catch(function (error) {
        console.log(error)
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
    //firebase.auth().signInWithRedirect(provider);
}

function signOut()
{
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.href="../index.html";
      }).catch(function(error) {
        // An error happened.
      });
}

function Them_Benh_nhan(BenhNhan) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Them_Benh_nhan`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_goi = JSON.stringify(BenhNhan)
    Xu_ly_HTTP.send(Chuoi_goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

function Them_Lich_kham(BenhNhan) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Them_Lich_kham`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_goi = JSON.stringify(BenhNhan)
    Xu_ly_HTTP.send(Chuoi_goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}