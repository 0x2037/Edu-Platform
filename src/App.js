import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import components for routing
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Shop from './components/Shop/Shop';
import Footer from './components/UI/Footer';
import SignUp from './components/Account/SignUp';
import Login from './components/Account/Login';
import AccessDenied from './components/Error/AccessDenied';
import Progress from './components/Profile/Progress';
import ProfileDefault from './components/Profile/ProfileDefault';
import ProfileSettings from './components/Profile/ProfileSettings';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/courses" exact component={Courses}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={ProfileDefault} />
        <Route path="/profile/settings" exact component={ProfileSettings}/>
        <Route path="/profile/progress" exact component={Progress} />
        <Route component={AccessDenied} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
