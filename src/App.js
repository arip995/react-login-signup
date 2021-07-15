import Login from './components/Signup';
import Signup from './components/Login';
import Profile from './components/Profile';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
   <Router>
      <Route exact path='/' component={Login}/>
      <Route exact path='/login' component={Signup}/>
      <Route exact path='/profile' component={Profile}/>
   </Router>
  );
}

export default App;
