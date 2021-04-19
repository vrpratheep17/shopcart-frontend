import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/index";
import Moment from "react-moment";
import { ToastContainer, toast } from "react-toastify";
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CModalHeader,
  CModal,
  CForm,
  CLabel,
  CFormText,
  CFormGroup,
  CInput,
  CContainer,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
let Admin = () => {
  const [list, setList] = useState([]);
  const [item, setItems] = useState([]);
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [seller, setSeller] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState(null);
  const [pay, setPay] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };
  let callOnInt = () => {
    axios.get(`${config.backendAPI}/user/getallusers`).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
    axios.get(`${config.backendAPI}/item/getallitems`).then((res) => {
      console.log(res.data);
      setItems(res.data.data);
    });
    axios.get(`${config.backendAPI}/payment/allpayment`).then((res) => {
      console.log(res.data);
      setPay(res.data.data);
    });
  };
  useEffect(() => {
    callOnInt();
  }, []);
  let deleteItemById = (id) => {
    axios.delete(`${config.backendAPI}/item/item/${id}`).then((res) => {
      callOnInt();
      toast.success("Product removed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  let editItembyId = (item) => {
    setName(item.name);
    setSeller(item.seller);
    setDescription(item.description);
    setPrice(item.price);
    setFlag(true);
    setModal(true);
    setId(item.id);
  };
  let onUpdateDataSubmit = (item) => {
    console.log(image);
    let fd = new FormData();
    fd.append("myImage", image);
    fd.append("name", name);
    fd.append("seller", seller);
    fd.append("description", description);
    fd.append("price", price);
    axios
      .put(`${config.backendAPI}/item/item/${id}`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        callOnInt();
        setModal(false);
        setName("");
        setDescription("");
        setImage(null);
        setPrice(0);
        toast.success("Product Data Updated", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  let onDataSubmit = () => {
    console.log(image);
    let fd = new FormData();
    fd.append("myImage", image);
    fd.append("name", name);
    fd.append("seller", seller);
    fd.append("description", description);
    fd.append("price", price);
    axios
      .post(`${config.backendAPI}/item/addaitem`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        callOnInt();
        setModal(false);
        setName("");
        setDescription("");
        setImage(null);
        setPrice(0);
        setSeller("");
        setImage();
        toast.success("Item added", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container mt-3 text-center">
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardHeader>Admin Control</CCardHeader>
          <CCardBody>
            <CTabs
              activeTab={active}
              onActiveTabChange={(idx) => setActive(idx)}
            >
              <CNav variant="tabs" className="text-center">
                <CNavItem>
                  <CNavLink>Profile</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Items</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Payment</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  {" "}
                  <div className="container mt-3">
                    <h2 className="text-center m-3">Users List</h2>
                    <div className="row">
                      {list.map((li) => {
                        return (
                          <div className="col-lg-3">
                            <div class="card">
                              <div class="card-body text-center">
                                <img src="https://img.icons8.com/fluent/48/000000/change-user-male.png" />
                                <h5 class="card-title text-center">
                                  {li.name}
                                </h5>
                                <p class="card-text text-center">
                                  <strong>Mobile Number:</strong>{" "}
                                  {li.mobile_number}
                                </p>
                                <hr />
                                <p class="card-text text-center">
                                  <strong>No of Payments Made:</strong>{" "}
                                  {li.payments.length}
                                </p>
                                <hr />
                                <p class="card-text text-center">
                                  <strong>No of items in Cart:</strong>{" "}
                                  {li.carts.length}
                                </p>
                                <p class="card-text text-center">
                                  <strong>Since</strong>{" "}
                                  <Moment format="YYYY-MM-DD HH:MM">
                                    {li.created_at}
                                  </Moment>{" "}
                                  <img
                                    className="ml-4"
                                    height="30"
                                    src="https://img.icons8.com/wired/48/000000/checked-2.png"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CTabPane>
                <CTabPane>
                  {" "}
                  <div className="container mt-3">
                    <h2 className="text-center m-3">
                      Items Management{" "}
                      <img
                        onClick={toggle}
                        style={{ cursor: "pointer" }}
                        src="https://img.icons8.com/ultraviolet/40/000000/plus.png"
                      />
                    </h2>
                    <div className="row">
                      {item.map((li) => {
                        return (
                          <div className="col-lg-3">
                            <div class="card">
                              <div className="text-right pr-4 pt-2">
                                <img
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    editItembyId(li);
                                  }}
                                  height="20"
                                  className="mr-3"
                                  src="https://img.icons8.com/wired/64/000000/edit.png"
                                />
                                <img
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    deleteItemById(li.id);
                                  }}
                                  height="20"
                                  src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"
                                />
                              </div>
                              <div class="card-body text-center">
                                <img
                                  height="150"
                                  src={`${config.backendAPI}/${li.img}`}
                                />

                                <h5 class="card-title text-center">
                                  {li.name}
                                </h5>
                                <p class="card-text text-center">
                                  <strong>Price:</strong> {li.price}
                                </p>
                                <hr />
                                <p class="card-text text-center">
                                  <strong>Seller:</strong> {li.seller}
                                </p>
                                <hr />
                                <p class="card-text text-center">
                                  <strong>Description:</strong> {li.description}
                                </p>
                                <p class="card-text text-center">
                                  <strong>Added On</strong>{" "}
                                  <Moment format="YYYY-MM-DD HH:MM">
                                    {li.created_at}
                                  </Moment>{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CTabPane>
                <CTabPane>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">amount</th>
                        <th scope="col">mode_of_payment</th>
                        <th scope="col">address</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pay.map((item, index) => {
                        return (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.user.name}</td>
                            <td>$ {item.amount}</td>
                            <td>{item.mode_of_payment}</td>
                            <td>{item.address}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
      <CModal show={modal} onClose={toggle}>
        <CModalHeader closeButton>Add a Item</CModalHeader>
        <CModalBody>
          <CContainer>
            <CRow>
              <CCol sm="12">
                <CForm action="" method="post">
                  <CFormGroup>
                    <CLabel htmlFor="nf-email">Name</CLabel>
                    <CInput
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type="name"
                      id="nf-name"
                      name="nf-name"
                      value={name}
                      placeholder="Enter Name.."
                      autoComplete="name"
                    />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="nf-password">seller</CLabel>
                    <CInput
                      onChange={(e) => {
                        setSeller(e.target.value);
                      }}
                      type="seller"
                      value={seller}
                      id="nf-seller"
                      name="nf-seller"
                      placeholder="Enter seller.."
                      autoComplete="current-seller"
                    />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="nf-password">Description</CLabel>
                    <CInput
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      type="description"
                      id="nf-description"
                      value={description}
                      name="nf-description"
                      placeholder="Enter description.."
                      autoComplete="current-description"
                    />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="nf-password">Price</CLabel>
                    <CInput
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      type="price"
                      id="nf-price"
                      value={price}
                      name="nf-price"
                      placeholder="Enter price.."
                      autoComplete="current-price"
                    />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="nf-password">Image</CLabel>
                    <CInput
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                      type="file"
                      id="nf-price"
                      name="myImage"
                    />
                  </CFormGroup>
                  {flag ? (
                    <CButton
                      onClick={() => onUpdateDataSubmit()}
                      color="primary"
                    >
                      Update
                    </CButton>
                  ) : (
                    <CButton onClick={() => onDataSubmit()} color="primary">
                      Add{" "}
                    </CButton>
                  )}
                </CForm>
              </CCol>
            </CRow>
          </CContainer>
        </CModalBody>
      </CModal>
      <ToastContainer
        position="top-center"
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
  );
};

export default Admin;
