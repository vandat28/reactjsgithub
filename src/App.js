import logo from './logo.svg';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todo from './Todo-app/Todo';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import MyComponent from './MyComponent/MyComponent';
import ListUser from './Users/ListUser';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from './Users/User';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/about">
            <MyComponent/>
          </Route>
          <Route path="/user" exact>
            <ListUser />
          </Route>
          <Route path="/user/:id">
            <User/>
          </Route>
        </Switch>
      </header>
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
    </div>
    </BrowserRouter>
  );
}

export default App;
