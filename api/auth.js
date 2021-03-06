import Client from "./client";
import { create } from "apisauce";

const setCookie = (token, professional) =>
  Client.nextClient.post("/login", { token, professional });

const validateToken = (token) =>
  Client.apiClient.post(
    "auth/validate",
    {},
    { headers: { Authorization: token } }
  );

const updateUser = (token, name) =>
  Client.apiClient.post(
    "users/update",
    { name },
    { headers: { Authorization: token } }
  );

const updatePassword = (token, password, newPass) =>
  Client.apiClient.post(
    "users/password/new",
    { password, new: newPass },
    { headers: { Authorization: token } }
  );

const getCookie = () => Client.nextClient.post("/token");

const clearCookie = () => Client.nextClient.post("/logout");

const login = (phone, password) =>
  Client.apiClient.post("auth", { phone, password });

const signup = (name, phone, password) =>
  Client.apiClient.post("users", { name, phone, password });

const getPayments = (token, business, limit, skip, time) =>
  Client.apiClient.post(
    "gate/charges",
    {
      token,
      business,
      limit: limit ? limit : 10,
      skip: skip ? skip : 0,
      login: true,
      time,
    },
    { headers: { Authorization: token } }
  );

const getCollections = (limit, skip) =>
  Client.apiClient.post(
    "services/collection/get",
    {
      limit: limit ? limit : 10,
      skip: skip ? skip : 0,
    },
    {}
  );

const getMyOrders = (token, limit, skip) =>
  Client.apiClient.post(
    "services/order/get/mine",
    {
      limit: limit ? limit : 10,
      skip: skip ? skip : 0,
    },
    { headers: { Authorization: token } }
  );

const newOrder = (token, isService, service, amount, currency) =>
  Client.apiClient.post(
    "services/order",
    {
      isService,
      service,
      amount,
      currency,
    },
    { headers: { Authorization: token } }
  );

const newContact = (name, company, email, phone, subject, details) =>
  Client.apiClient.post(
    "services/contact",
    {
      name,
      company,
      email,
      phone,
      subject,
      details,
    },
    {}
  );

const getBalance = (token, business, limit, time, skip) =>
  Client.apiClient.post(
    "gate/balance",
    {
      token,
      business,
      time,
      limit: limit ? limit : 16,
      skip: skip ? skip : 0,
      login: true,
    },
    { headers: { Authorization: token } }
  );

const getPayment = (token, business, payment) =>
  Client.apiClient.post(
    "gate/charges/one",
    { token, business, login: true, payment },
    { headers: { Authorization: token } }
  );

const getCheckoutToken = (
  publicKey,
  amount,
  currency,
  success,
  fail,
  webhook
) =>
  Client.apiClient.post(
    "gate/checkout/token",
    { public: publicKey, amount, currency, success, fail, webhook },
    {}
  );

const getBusinessPublic = (token, business) =>
  Client.apiClient.post(
    "gate/business/public",
    { token, login: true, business },
    { headers: { Authorization: token } }
  );

const getBusiness = (token, business) =>
  Client.apiClient.post(
    "gate/business/one",
    { token, login: true, business },
    { headers: { Authorization: token } }
  );

const addBusiness = (
  token,
  name,
  description,
  descriptor,
  website,
  address,
  branding,
  phone,
  supportEmail,
  supportWebsite,
  privacy,
  terms
) =>
  Client.apiClient.post(
    "gate/business/add",
    {
      name,
      description,
      descriptor,
      website,
      address,
      branding,
      phone,
      supportEmail,
      supportWebsite,
      privacy,
      terms,
      login: true,
    },
    { headers: { Authorization: token } }
  );

const getBusinesses = (token) =>
  Client.apiClient.post(
    "gate/business",
    { token, login: true },
    { headers: { Authorization: token } }
  );

const getChain = (token, limit) =>
  Client.apiClient.post(
    "chain/get",
    { token, limit },
    { headers: { Authorization: token } }
  );

// const imageUpload = (token, user, file, name, type, onProgress) =>
//   Client.apiClient.post(
//     "api/v2/account/image",
//     { token, user, file, name, type },
//     {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//       onUploadProgress: (progress) =>
//         onProgress(progress.loaded / progress.total),
//     }
//   );

const newActivity = (token, type, to, amount, message) =>
  Client.apiClient.post(
    "chain/add",
    { token, type, to, amount, message },
    { headers: { Authorization: token } }
  );

// const register = (firstname, lastname, username, email, password) =>
//   Client.apiClient.post("/api/v2/users", {
//     firstname,
//     lastname,
//     username,
//     email,
//     password,
//   });

export default {
  login,
  newOrder,
  signup,
  getMyOrders,
  updateUser,
  addBusiness,
  getBusinesses,
  newActivity,
  getPayments,
  getCollections,
  updatePassword,
  validateToken,
  getChain,
  getBusinessPublic,
  getPayment,
  getBalance,
  newContact,
  getBusiness,
  getCheckoutToken,
  setCookie,
  getCookie,
  clearCookie,
};
