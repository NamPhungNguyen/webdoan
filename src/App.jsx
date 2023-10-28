import './App.css';
import Navbar from './components/Navbar';
import Home from './components/menu_navbar/Home';
import About from './components/menu_navbar/About';
import Services from './components/menu_navbar/Services';
import Driver from './components/menu_navbar/Driver';
import Contact from './components/menu_navbar/Contact';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AdminLayout from './components/auth_admin/AdminLayout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterDriver from './components/menu_navbar/RegisterDriver';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/driver" exact component={Driver} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/driver-registration" exact component={RegisterDriver} />
        <Route path="/admin" exact component={AdminLayout} />
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
