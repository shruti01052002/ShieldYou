import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import Nav from "./Nav";

function Login() {
    const navigate = useNavigate();
    const firebaseConfig = {
        apiKey: "AIzaSyCkAjRPPQOh3YRxcTyTox3oda36Y5a3XXI",
        authDomain: "sheildu.firebaseapp.com",
        projectId: "sheildu",
        storageBucket: "sheildu.appspot.com",
        messagingSenderId: "629418197988",
        appId: "1:629418197988:web:1d6ee3c1358fb4c34ffdf1",
        measurementId: "G-T35757VPYN"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const database = getDatabase();
    const auth = getAuth();
    const register = () => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        console.log(email + " " + password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Logged in");
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });


    }
    return (
        <>
            <div style={{ backgroundColor: 'black', height: "100vh"}}>
                <Nav />
                <h1 style={{color:"white", paddingLeft:"200px", paddingTop:"50px"}}>Log in</h1>
                <div style={{paddingLeft:"200px", paddingTop:"30px", paddingRight:"700px" }}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" style={{color:"white"}}>Email address:</label>
                        <input type="text" className="form-control" id="email" aria-describedby="emailHelp" />
                        {/* <div id="email" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" style={{color:"white"}}>Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <button style={{backgroundColor:"f9ef23"}} type="button" className="b" onClick={register}>Submit</button>
                </form>
                </div>
            </div>

        </>
    );
}

export default Login;