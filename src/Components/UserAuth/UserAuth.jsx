import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import config from "../config/index";
import { freeSet } from "@coreui/icons";
const UserAuth = () => {
   const history = useHistory();
  useEffect(()=>{
    if(  localStorage.getItem("token")){
       history.push("/list");
    }
  },[])
   
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  let onSubmit = () => {
   
   
    axios
      .post(`${config.backendAPI}/user/login`, {
        mobile_number: mobile,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.data.access_token);
   
        history.push("/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon content={freeSet.cilUser} />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="mobile number"
                        autoComplete="mobilenumber"
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon content={freeSet.cilUser} />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          onClick={() => {
                            onSubmit();
                          }}
                          color="primary"
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 "
                              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Sign up to get started with purchasing products with us
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default UserAuth;
