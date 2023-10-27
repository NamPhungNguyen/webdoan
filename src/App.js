import './App.css';
import Navbar from './components/Navbar';
import Home from './components/menu_navbar/Home';
import About from './components/menu_navbar/About';
import Services from './components/menu_navbar/Services';
import Driver from './components/menu_navbar/Driver';
import Contact from './components/menu_navbar/Contact';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import LoginRegister from './components/auth/LoginRegister';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterDriver from './components/menu_navbar/RegisterDriver';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact> <Home /> </Route>
          <Route path='/about' component={About} exact> <About /> </Route>
          <Route path='/services' component={Services} exact> <Services /> </Route>
          <Route path='/driver' component={Driver} exact> <Driver /> </Route>
          <Route path='/contact' component={Contact} exact> <Contact /> </Route>
          <Route path='/login' component={Login} exact> <Login /> </Route>
          <Route path='/register' component={Register} exact> <Register /> </Route>
          <Route path='/driver-registration' component={RegisterDriver} exact> <RegisterDriver /> </Route>
        </Switch>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </Router>
    </>


  )
}

export default App;
