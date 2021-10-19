import initialize from "../Component/FireBase/FireBaseInit";
import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import { Redirect, useHistory } from "react-router";



initialize()


const useFireBase = () => {

     const [user, setUser] = useState({})
     const [error, setError] = useState('')
     const [isLoading, setIsLoading] = useState(true);






     const auth = getAuth();
     const GoogleProvider = new GoogleAuthProvider();
     const GithubProvide = new GithubAuthProvider();







     // const heandleRegistration = e => {

     //      console.log(email, password);


     //      if (password.length < 6) {
     //           setError("Password at least 6 cracter long")
     //           return;
     //      }
     //      AlUser ? EnterDetails(email, password) : PleaseRegister(email, password)


     // }







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
     const logOut = () => {
          const auth = getAuth();
          signOut(auth).then(() => {
               setUser()

          }).catch((error) => {
               setError(error.message)
          });
     }


     useEffect(() => {
          onAuthStateChanged(auth, (user) => {
               if (user) {
                    setUser(user)
               } else {
                    setUser({})
               }
               setIsLoading(false)
          });

     }, [isLoading])

     return {
          logOut,
          SingInWithGoogle,
          singInwithGitHub,
          user,




     }
};

export default useFireBase;