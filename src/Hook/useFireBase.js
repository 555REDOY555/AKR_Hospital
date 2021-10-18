import initialize from "../Component/FireBase/FireBaseInit";
import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Redirect, useHistory } from "react-router";



initialize()


const useFireBase = () => {
     const history = useHistory()
     const [user, setUser] = useState({})
     const [error, setError] = useState('')
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [AlUser, setAlUser] = useState(false)



     const auth = getAuth();
     const GoogleProvider = new GoogleAuthProvider();
     const GithubProvide = new GithubAuthProvider();



     const handleEmailChange = e => {
          setEmail(e.target.value)
     }
     const handlePasswordChange = e => {
          setPassword(e.target.value)
     }



     const heandleRegistration = e => {
          e.preventDefault();
          console.log(email, password);


          if (password.length < 6) {
               setError("Password at least 6 cracter long")
               return;
          }
          AlUser ? EnterDetails(email, password) : PleaseRegister(email, password)


     }


     const EnterDetails = (email, password) => {
          signInWithEmailAndPassword(auth, email, password)
               .then((result) => {
                    // Signed in 
                    VarifyUser()
                    history.push('/home')
                    this.props.history.push('/home')
                    // ...
               })
               .catch((error) => {
                    setError(error.message)
               });

          // signInWithEmailAndPassword(auth, email, password)
          //      .then(result => {
          //           const user = result.user
          //           console.log(user)
          //           setError("")
          //           VarifyUser()
          //           history.push('/home')
          //      })
          //      .catch((error) => {
          //           setError(error.message)
          //      });

     }

     const VarifyUser = () => {
          sendEmailVerification(auth.currentUser)
               .then(result => {

               })
     }

     const PleaseRegister = (email, password) => {
          createUserWithEmailAndPassword(auth, email, password)
               .then((result) => {
                    const user = result.user;
                    console.log(user)
                    setError("")


               })
               .catch((error) => {
                    setError(error.message)
               });
     }






     const SingInWithGoogle = () => {
          signInWithPopup(auth, GoogleProvider)
               .then(result => {
                    console.log(result.user)
                    setUser(result.user)


               })
               .catch(error => {
                    setError(error.message)
               })
     }
     const logOut = () => {
          const auth = getAuth();
          signOut(auth).then(() => {
               setUser()

          }).catch((error) => {
               setError(error.message)
          });
     }
     const singInwithGitHub = () => {
          signInWithPopup(auth, GithubProvide)
               .then(result => {
                    console.log(result.user)
                    setUser(result.user)


               })
               .catch(error => {
                    setError(error.message)
               })
     }


     useEffect(() => {
          onAuthStateChanged(auth, user => {
               if (user) {
                    setUser(user)
               }
               else {

               }

          })
     }, [])

     return {
          logOut,
          SingInWithGoogle,
          singInwithGitHub,
          user,
          error,
          handleEmailChange,
          handlePasswordChange,
          heandleRegistration,
          EnterDetails,
          AlUser



     }
};

export default useFireBase;