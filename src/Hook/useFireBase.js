import initialize from "../Component/FireBase/FireBaseInit";
import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";



initialize()


const useFireBase = () => {
     const [user, setUser] = useState({})
     const [error, setError] = useState('')

     const auth = getAuth();
     const GoogleProvider = new GoogleAuthProvider();
     const GithubProvide = new GithubAuthProvider();


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
          error
     }
};

export default useFireBase;