import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import config from "../config/index";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
const SignUp = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/list");
    }
  }, []);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let onSubmit = () => {
   
    axios
      .post(`${config.backendAPI}/user/signup`, {
        name: name,
        mobile_number: mobile,
        password: password,
        email: email,
      })
      .then((res) => {
        history.push("/Auth");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon content={freeSet.cilUser} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type="text"
                      placeholder="Name"
                      autoComplete="Name"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon content={freeSet.cilUser} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                      type="text"
                      placeholder="Mobile number"
                      autoComplete="Mobilenumber"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                      placeholder="Email (Optional) "
                      autoComplete="email"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon content={freeSet.cil} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4"></CInputGroup>
                  <CButton
                    onClick={() => {
                      onSubmit();
                    }}
                    color="success"
                    block
                  >
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default SignUp;
