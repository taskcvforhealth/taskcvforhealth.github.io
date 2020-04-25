var Dia_chi_Dich_vu = "http://localhost:1200/"

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyCeLurZ9bpy4b2W7C88ansMuYh3KZ41lnE",
    authDomain: "hackcovy-29f03.firebaseapp.com",
    databaseURL: "https://hackcovy-29f03.firebaseio.com",
    projectId: "hackcovy-29f03",
    storageBucket: "hackcovy-29f03.appspot.com",
    messagingSenderId: "239367203055",
    appId: "1:239367203055:web:21f309c6190bc37074131a"
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
        obj.listReminder = [];
        sessionStorage.setItem("user",JSON.stringify(obj));
        //Them_Nguoi_dung(obj);
        console.log(obj);
        window.location.href="./home.html";
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
        window.location.href="./index.html";
      }).catch(function(error) {
        // An error happened.
      });
}

function Them_Nguoi_dung(NguoiDung) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Them_Nguoi_dung`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_goi = JSON.stringify(NguoiDung)
    Xu_ly_HTTP.send(Chuoi_goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

function Them_Thong_bao(NguoiDung) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Them_Thong_bao`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_goi = JSON.stringify(NguoiDung)
    Xu_ly_HTTP.send(Chuoi_goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

function facebookSignIn()
{
    var providerFacebook = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(providerFacebook).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

function githubSignIn()
{
    var providerGitHub = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(providerGitHub).then(function(result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}