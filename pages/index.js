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

function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

export default function Home(props) {
  const { user, setUser } = useContext(AuthContext);
  const [render, setRender] = useState(0);
  const [cities, setCities] = useState(0);
  const [sellPoint, setSellPoint] = useState(0);

  const Router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
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
          className="maincsshead"
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
          <Header />
          <div
            className={
              "sm:px-[150px] px-[30px] sm:flex-row flex-col sm:h-[calc(80%)] "
            }
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",

              paddingBottom: 75,
            }}
          >
            <div
              className="sm:order-1 order-2	"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flex: 1,
                height: "100%",
                //backgroundColor: "red",
              }}
            >
              <span
                className={
                  "sm:w-[38vw] w-[100%] sm:text-[48px] text-[40px] sm:mt-[0px] mt-[50px] "
                }
                style={{
                  fontFamily: "SFP-SemiBold",
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                Nouvelles façons de se connecter
              </span>
              <span
                className={
                  "sm:w-[30vw] w-[100%] sm:text-[18px] text-[19px] sm:mt-[0px] mt-[50px] "
                }
                style={{
                  fontFamily: "SFP-Regular",
                  color: "#fff",
                  lineHeight: 1.5,
                  marginTop: 30,
                }}
              >
                Chinguitel offre à tous ses abonnés un bouquet de services
                répondant aux besoins de toutes les catégories d’usagers du
                réseau en applications audio, données ou multimédias.
              </span>
              <div
                onClick={() => {
                  Router.push("/shop");
                }}
                style={{
                  display: "flex",
                  width: 180,
                  height: 50,
                  backgroundColor: "#000",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 30,
                  cursor: "pointer",
                  borderRadius: 0,
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontFamily: "SFP-Regular",
                    fontSize: 15,
                  }}
                >
                  Nos Services
                </span>
              </div>
            </div>
            <div
              className={"sm:w-[50%] w-[100%] sm:order-2 order-1 "}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",

                height: "100%",
                //backgroundColor: "green",
              }}
            >
              <img
                src={"/vect.png"}
                className={"sm:h-[80%] sm:pt-[0px] h-[70%] pt-[50px]  "}
                style={{
                  width: "100%",

                  objectFit: "contain",
                  backgroundSize: "contain",
                }}
              />
            </div>
          </div>
          <div
            className="sm:px-[75px] px-[0px] "
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
                backgroundColor: "#fff",
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
                className={"sm:p-[20px] p-[10px] "}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className={"sm:p-[0px] p-[10px] "}
                  style={{
                    width: "100%",
                    borderRadius: 15,

                    overflow: "hidden",
                  }}
                >
                  <Carousel
                    showStatus={false}
                    showThumbs={false}
                    showArrows={true}
                  >
                    <div>
                      <img src="/ching2.jpg" />
                    </div>
                    <div>
                      <img src="/ching3.jpg" />
                    </div>
                    <div>
                      <img src="/ching1.jpg" />
                    </div>
                  </Carousel>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    //backgroundColor: "red",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 20,
                    marginTop: 10,
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "SFP-Medium",
                      fontSize: 24,
                    }}
                  >
                    Dernières offres
                  </span>
                  <span
                    style={{
                      cursor: "pointer",
                      fontFamily: "SFP-Regular",
                      fontSize: 18,
                      color: "blue",
                    }}
                  >
                    Voir tout
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    //backgroundColor: "red",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginTop: 50,
                    padding: 20,
                    paddingTop: 20,
                    paddingBottom: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "SFP-Medium",
                      fontSize: 24,
                    }}
                  >
                    Contact
                  </span>
                </div>
                <div
                  className={"sm:flex-row flex-col"}
                  style={{
                    display: "flex",
                    width: "100%",
                    //backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                    paddingTop: 10,
                    paddingBottom: 50,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      width: "100%",

                      flexDirection: "column",
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    <div
                      className={"sm:w-[15vw] w-[100%] "}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 60,

                        borderRadius: 7,
                        backgroundColor: "#0283C0",
                      }}
                    >
                      <AiFillPhone color="#fff" size={25} />
                    </div>
                    <span
                      style={{
                        fontFamily: "SFP-Regular",
                        fontSize: 19,
                        marginTop: 10,
                      }}
                    >
                      Fixe
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      width: "100%",
                      flexDirection: "column",
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    <div
                      className={"sm:w-[15vw] w-[100%] "}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 60,

                        borderRadius: 7,
                        backgroundColor: "#0283C0",
                      }}
                    >
                      <BsFillPhoneFill color="#fff" size={25} />
                    </div>
                    <span
                      style={{
                        fontFamily: "SFP-Regular",
                        fontSize: 19,
                        marginTop: 10,
                      }}
                    >
                      Mobile
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      width: "100%",
                      flexDirection: "column",
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    {" "}
                    <div
                      className={"sm:w-[15vw] w-[100%] "}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 60,

                        borderRadius: 7,
                        backgroundColor: "#0283C0",
                      }}
                    >
                      <FaInternetExplorer color="#fff" size={25} />
                    </div>
                    <span
                      style={{
                        fontFamily: "SFP-Regular",
                        fontSize: 19,
                        marginTop: 10,
                      }}
                    >
                      Internet
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      width: "100%",
                      flexDirection: "column",
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    {" "}
                    <div
                      className={"sm:w-[15vw] w-[100%] "}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 60,

                        borderRadius: 7,
                        backgroundColor: "#0283C0",
                      }}
                    >
                      <AiOutlineWifi color="#fff" size={25} />
                    </div>
                    <span
                      style={{
                        fontFamily: "SFP-Regular",
                        fontSize: 19,
                        marginTop: 10,
                      }}
                    >
                      Réseau
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      width: "100%",
                      flexDirection: "column",
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    <div
                      className={"sm:w-[15vw] w-[100%] "}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 60,

                        borderRadius: 7,
                        backgroundColor: "#0283C0",
                      }}
                    >
                      <FaHeadset color="#fff" size={25} />
                    </div>
                    <span
                      style={{
                        fontFamily: "SFP-Regular",
                        fontSize: 19,
                        marginTop: 10,
                      }}
                    >
                      Service client
                    </span>
                  </div>
                </div>
                <div
                  className={"sm:flex-row flex-col"}
                  style={{
                    width: "100%",
                    display: "flex",

                    padding: 20,
                    alignItems: "center",
                    paddingTop: 50,
                    paddingBottom: 50,
                    minHeight: 200,
                    borderRadius: 15,
                    backgroundColor: "#2F374B",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      height: "100%",
                      justifyContent: "center",
                      marginBottom: 20,
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    {" "}
                    <img
                      src={"/chinglogo1.png"}
                      style={{
                        width: 150,
                        objectFit: "contain",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "SFP-Medium",
                        fontSize: 24,
                        marginBottom: 0,
                        color: "#fff",
                      }}
                    >
                      Trouver une agence
                    </span>
                  </div>
                  <div
                    className="sm:items-start	items-center "
                    style={{
                      display: "flex",
                      flex: 1,
                      width: "100%",
                      justifyContent: "center",

                      //backgroundColor: "red",
                      flexDirection: "column",
                    }}
                  >
                    <select
                      style={{
                        backgroundColor: "rgba(255,255,255,1)",
                        borderWidth: 0,
                        width: "80%",
                        fontFamily: "SFP-Regular",
                        color: "rgba(0,0,40,0.7)",
                        height: 45,
                        outline: 0,
                        fontSize: 14,
                        paddingLeft: 10,
                        marginBottom: 10,
                        paddingRight: 10,
                        borderRadius: 10,
                      }}
                      value={cities}
                      onChange={(e) => {
                        setCities(e.target.value);

                        //window.location.href = "/";
                      }}
                    >
                      <option
                        key={0}
                        label={"toutes les villes"}
                        value={"test"}
                      />
                    </select>
                    <select
                      style={{
                        backgroundColor: "rgba(255,255,255,1)",
                        borderWidth: 0,
                        width: "80%",
                        fontFamily: "SFP-Regular",
                        color: "rgba(0,0,40,0.7)",
                        height: 45,
                        outline: 0,
                        fontSize: 14,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderRadius: 10,
                        marginBottom: 20,
                      }}
                      value={sellPoint}
                      onChange={(e) => {
                        setSellPoint(e.target.value);

                        //window.location.href = "/";
                      }}
                    >
                      <option
                        key={0}
                        label={"points de vente"}
                        value={"test"}
                      />
                    </select>
                    <div
                      style={{
                        display: "flex",
                        width: 180,
                        height: 40,
                        backgroundColor: "#0283C0",
                        justifyContent: "center",
                        alignItems: "center",

                        borderRadius: 7,
                      }}
                    >
                      <span
                        style={{
                          color: "#fff",
                          fontFamily: "SFP-Regular",
                          fontSize: 15,
                        }}
                      >
                        Filtrer
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={"sm:flex-row flex-col"}
                  style={{
                    width: "100%",
                    display: "flex",

                    padding: 20,
                    alignItems: "center",
                    minHeight: 200,
                    borderRadius: 15,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/chingapp.png"
                      style={{
                        width: 250,
                        marginTop: 30,
                        marginBottom: 30,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "SFP-Medium",
                        fontSize: 24,
                        color: "#000",
                      }}
                    >
                      Application Chinguitel
                    </span>
                    <span
                      style={{
                        fontFamily: "SFP-Regular",
                        fontSize: 16,
                        color: "#000",
                      }}
                    >
                      Accèdez En Un Clic Au Monde De Chinguitel Téléchargez
                      Votre Application
                    </span>
                    <div
                      style={{
                        display: "flex",
                        width: 180,
                        height: 40,
                        backgroundColor: "#0283C0",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 30,
                        borderRadius: 7,
                      }}
                    >
                      <span
                        style={{
                          color: "#fff",
                          fontFamily: "SFP-Regular",
                          fontSize: 15,
                        }}
                      >
                        Telecharger
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
