import React, { useState, useEffect } from "react";
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

import { freeSet } from "@coreui/icons";
const AdminLogin = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("admintoken")) {
      history.push("/admincontrol");
    }
  }, []);

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  let onSubmit = () => {
    if (mobile == "12345" && password == "12345") {
      localStorage.setItem("admintoken", "admin");
      history.push("/admincontrol");
    }
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center text-center ">
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

                    <CButton
                      onClick={() => {
                        onSubmit();
                      }}
                      color="primary"
                      className="px-4"
                    >
                      Login
                    </CButton>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default AdminLogin;
