import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import components for routing
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Profile from './components/Profile/Profile';
import Shop from './components/Shop/Shop';
import Banner from './components/UI/Banner';
function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/courses" exact component={Courses}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/shop" exact component={Shop}/>
      </Switch>
    </Router>
  );
}

export default App;
