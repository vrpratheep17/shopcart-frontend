import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();
  const [login, setLogin] = React.useState(false);
  const [name, setName] = React.useState("User");
  setInterval(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
      var token = localStorage.getItem("token");
      axios.defaults.headers.common["x-auth-token"] = token;
      var decoded = jwt_decode(token);

      setName(decoded.name);
    } else {
      setLogin(false);
    }
  }, 5000);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
      var token = localStorage.getItem("token");
      axios.defaults.headers.common["x-auth-token"] = token;
      var decoded = jwt_decode(token);

      setName(decoded.name);
    }
  }, []);
let logout=()=>{
  localStorage.removeItem("token");
}
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand text-poppins" to="/">
          <img
            height="30"
            src="https://img.icons8.com/cotton/64/000000/fast-cart.png"
          />{" "}
          Shop Cart
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0 text-center"></ul>
          <form class="d-flex">
            {login ? (
              <div>
                <div></div>
                <div className="text-center">
                  <div>
                    <CDropdown className="mt-2">
                      Welcome {name}
                      <CDropdownToggle
                        className="ml-3"
                        caret
                        color="secondary"
                      ></CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem onClick={() => history.push("/cart")}>
                          {" "}
                          Cart
                        </CDropdownItem>
                        <CDropdownItem
                          onClick={() => history.push("/wishlist")}
                        >
                          Wish list
                        </CDropdownItem>
                        <CDropdownItem
                          onClick={() => history.push("/purchase")}
                        >
                          Purchase
                        </CDropdownItem>
                        <CDropdownItem divider />
                        <CDropdownItem onClick={() => logout()}>
                          Log Out
                        </CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </div>
                </div>
              </div>
            ) : (
              <a class="navbar-brand" href="/Auth">
                Login / Signup
              </a>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
