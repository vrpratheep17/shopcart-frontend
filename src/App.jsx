import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import UserAuth from "./Components/UserAuth/UserAuth";
import SignUp from "./Components/UserAuth/SignUp";
import ListAllitems from "./Components/ListAllitems/ListAllitems";
import Cart from "./Components/Profile/Cart/Cart";
import Purchase from "./Components/Profile/Payment/Payment";
import Wishlist from "./Components/Profile/Wishlist/Wishlist";
import List from "./Components/Profile/Payment/list";
import Admin from "./Components/Admin/Admin";
import AdminLogin from "./Components/Admin/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "@coreui/coreui/scss/coreui.scss";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/Auth">
              <UserAuth />
            </Route>
            <Route exact path="/register">
              <SignUp />
            </Route>
            <Route exact path="/list">
              <ListAllitems />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/purchase">
              <Purchase />
            </Route>
            <Route exact path="/wishlist">
              <Wishlist />
            </Route>
            <Route exact path="/list/:id">
              <List />
            </Route>
            <Route exact path="/admincontrol">
              <Admin />
            </Route>
            <Route exact path="/admin">
              <AdminLogin />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
