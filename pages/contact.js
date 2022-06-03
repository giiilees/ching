import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../auth/context";

import HomeScreen from "../screens/HomeScreen";

import { useRouter } from "next/router";

import cookie from "cookie";
import Cookies from "js-cookie";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import { AiFillPhone, AiOutlineWifi } from "react-icons/ai";
import { BsFillPhoneFill, BsWifi2 } from "react-icons/bs";
import { FaHeadset, FaInternetExplorer } from "react-icons/fa";
import Header from "../components/Header";
import BigText from "../components/BigText";
import SmallText from "../components/SmallText";
import SmallList from "../components/SmallList";
import SmallUnder from "../components/SmallUnder";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SmallPhoto from "../components/SmallPhoto";
import Menu1 from "../components/Menu1";
import MoonLoader from "react-spinners/MoonLoader";
import InputField from "../components/InputField";

import authApi from "../api/auth";

function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

export default function Contact({ menu1, setMenu1 }) {
  const { user, setUser } = useContext(AuthContext);
  const [disabled, setDisable] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");

  const Router = useRouter();

  const submitData = async (e) => {
    setDisable(true);
    e.preventDefault();
    const result = await authApi.newContact(
      firstname,
      lastname,
      company,
      email,
      phone,
      subject,
      details
    );
    if (!result.ok) {
      console.log(result);
      setDisable(false);
      return;
    }
    alert("Requête Envoyé");
    window.location.reload();
    setDisable(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <Head>
        <title>Contact</title>
      </Head>

      <div
        style={{
          display: "flex",
          width: "100%",
          flex: 1,
          overflowY: "auto",
          flexDirection: "column",
        }}
      >
        <div
          //   className="maincsshead"
          style={{
            display: "flex",
            height: "100vh",
            overflowY: "auto",
            overflowX: "hidden",
            width: "100vw",
            backgroundColor: "#2F374B",
            flexDirection: "column",
          }}
        >
          <Header menu={menu1} setMenu={setMenu1} />
          <Menu1 menu={menu1} setMenu={setMenu1} />
          <div
            className={
              "md:px-[150px] px-[30px] md:flex-row flex-col md:h-[80vh] "
            }
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              minHeight: "60vh",
              paddingBottom: 75,
            }}
          >
            <div
              className="md:order-1 order-2	"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                height: "100%",
                //backgroundColor: "red",
              }}
            >
              <span
                className={
                  "md:w-[38vw] w-[100%] md:text-[48px] text-[40px] md:mt-[0px] mt-[50px] "
                }
                style={{
                  fontFamily: "SFP-SemiBold",
                  color: "#fff",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              >
                Contactez-nous
              </span>
              <span
                className={
                  "md:w-[30vw] w-[100%] md:text-[18px] text-[19px] md:mt-[0px] mt-[50px] "
                }
                style={{
                  fontFamily: "SFP-Regular",
                  color: "#fff",
                  textAlign: "center",
                  lineHeight: 1.5,
                  marginTop: 30,
                }}
              >
                Bienvenue à Chinguitel, le meilleur espace de télécommunications
              </span>
            </div>
          </div>
          <div
            className="md:px-[75px] px-[0px] "
            style={{
              width: "100vw",

              paddingTop: 0,
              paddingBottom: 0,
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                //backgroundColor: "#fff",
                width: "100%",
                minHeight: 500,
                padding: 0,
                // top: -500,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                flexDirection: "column",
              }}
            >
              <div
                className={"md:p-[20px] p-[10px] "}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  //backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className={"md:w-[50%] w-[85%]  "}
                  style={
                    {
                      //backgroundColor: "red",
                    }
                  }
                >
                  <InputField
                    name="firstname"
                    placeholder="Prenom ( Obligatoire )"
                    value={firstname}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <InputField
                    name="lastname"
                    placeholder="Nom ( Obligatoire )"
                    value={lastname}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <InputField
                    name="company"
                    placeholder="Compagnie"
                    value={company}
                    type="text"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <InputField
                    name="email"
                    placeholder="Email ( Obligatoire )"
                    value={email}
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputField
                    name="phone"
                    placeholder="Numero de telephone"
                    value={phone}
                    type="text"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <InputField
                    name="subject"
                    placeholder="Sujet ( Obligatoire )"
                    value={subject}
                    type="text"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                      borderRadius: 7,
                      borderColor: "rgba(0,0,0,0.1)",
                      minHeight: 100,
                    }}
                    className={"flex    mb-[15px] "}
                  >
                    <textarea
                      className={
                        "flex-1 p-[10px] focus:border-[1px] border-blue-400  outline-none bg-transparent border-0 "
                      }
                      style={{
                        minHeight: 100,
                        borderRadius: 7,
                      }}
                      name="details"
                      placeholder="Details"
                      value={details}
                      type="text"
                      onChange={(e) => setDetails(e.target.value)}
                    />
                  </div>
                  <a
                    onClick={(e) => {
                      if (disabled) return;
                      submitData(e);
                    }}
                    style={{
                      display: "flex",
                      height: 40,
                      borderRadius: 7,
                      width: "100%",
                      backgroundColor: "lightgrey",
                      justifyContent: "center",
                      alignItems: "center",

                      marginBottom: 50,
                      cursor: "pointer",
                    }}
                  >
                    {!disabled && (
                      <span
                        style={{
                          color: "#000",
                          fontFamily: "SFP-Medium",
                          fontSize: 15,
                        }}
                      >
                        Envoyer
                      </span>
                    )}

                    {disabled && (
                      <MoonLoader color="#000" loading={true} size={12} />
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
