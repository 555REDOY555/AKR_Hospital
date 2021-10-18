import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Servise from './Component/Servise/Servise';
import Details from './Component/Details/Details';
import LogIn from './Component/LogIn/LogIn';
import Register from './Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivatRoute from './Component/PrivatRoute/PrivatRoute';
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer';
import About from './Component/About/About';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivatRoute exact path='/servise'>
              <Servise></Servise>
            </PrivatRoute>
            <PrivatRoute path="/details/:kye" >
              <Details></Details>
            </PrivatRoute>
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
          </Switch>
        </Router>
        <Footer />
      </AuthProvider>
    </div >
  );
}

export default App;
