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
import Menu1 from "../components/Menu1";

function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

function createData(name, calories, fat) {
  return { name, calories, fat };
}

function createData0(name, calories, fat, tarifs, activation) {
  return { name, calories, fat, tarifs, activation };
}

function createData1(name, calories, fat, tarifs, activation, arg) {
  return { name, calories, fat, tarifs, activation, arg };
}
function createData2(name, calories, fat, tarifs, activation, arg, arg0, arg1) {
  return { name, calories, fat, tarifs, activation, arg, arg0, arg1 };
}
function createData3(name, calories, fat, tarifs, activation, arg) {
  return { name, calories, fat, tarifs, activation, arg };
}
function createData4(name, calories, fat, tarifs, activation, arg, arg0) {
  return { name, calories, fat, tarifs, activation, arg, arg0 };
}
function createData5(name, calories, fat, tarifs, activation) {
  return { name, calories, fat, tarifs, activation };
}
function createData6(name, calories) {
  return { name, calories };
}

const rows = [
  createData(
    "1",
    "Appels vers le réseau Chinguitel et tous les appels nationaux",
    "7.8 N-UM (78 A-UM)"
  ),
  createData("2", "Appels internationaux", "Zone 1 : 16.5 N-UM (165 A-UM)"),
  createData(" ", " ", "Zone 2 : 31 N-UM (310 A-UM)"),
  createData("", "", "Zone 3 : 41 N- UM (410 A-UM)"),
  createData("", "", "Zone 4 : 60 N-UM (600 A-UM)"),
  createData("", "", "Iles : 96 N-UM (960 A-UM)"),
  createData("", "", "Thuraya & Satellites : 225 N-UM (2250 A-UM)"),
  createData("3", "SMS vers le réseau Chinguitel	", "2 N-UM (20A-UM)"),
  createData("4", "SMS vers les réseaux nationaux	", "2 N-UM (20A-UM)"),
  createData(
    "5",
    "SMS vers les réseaux internationaux	",
    "7.08 N-UM (70.8 A-UM)"
  ),
];

const rows00 = [
  createData0("5 minutes", "00:00", "5 min", "5 N-UM	", "*590*50#"),
  createData0("33 minutes	", "2 jours	", "33 min	", "30 N-UM	", "*590*33#    "),
  createData0(
    "60 minutes Allo Lilkoul	",
    "3 jours	",
    "60 min	",
    "50 N-UM	",
    "Par carte recharge : *222* code recharge *1# Par solde : *590*60#"
  ),
];

const rows11 = [
  createData1(
    "Mauri allo	",
    "10	",
    "10 minutes	",
    "",
    "24 H",
    "*222*code de recharge*1# , Pour l'activation à partir du crédit *1#"
  ),
  createData1(
    "Mauri allo	",
    "20",
    "20 minutes	",
    "",
    "48 H",
    "*222*code de recharge*1# , Pour l'activation à partir du crédit *1#"
  ),
  createData1(
    "Mauri allo	",
    "30",
    "33 minutes	",
    "",
    "48 H",
    "Pour l'activation à partir du crédit *1#"
  ),
  createData1(
    "Mauri allo	",
    "50",
    "60 minutes	",
    "",
    "3 Jours",
    "*222*code de recharge*1#, Pour l'activation à partir du crédit *1#"
  ),
  createData1(
    "Mauri allo	",
    "100",
    "2 H et 30 minutes	",
    "100",
    "7 Jours",
    "*222*code de recharge*1#"
  ),
  createData1(
    "Mauri allo	",
    "200",
    "6 H",
    "200",
    "30 Jours",
    "*222*code de recharge*1#"
  ),
  createData1(
    "Mauri allo	",
    "300",
    "8 H",
    "300",
    "30 Jours",
    "*222*code de recharge*1#"
  ),
  createData1(
    "Mauri allo	",
    "500",
    "15 H",
    "500",
    "30 Jours",
    "*222*code de recharge*1#"
  ),
  createData1(
    "Mauri allo	",
    "1000",
    "30 H",
    "2000",
    "30 Jours",
    "*222*code de recharge*1#"
  ),
];

const rows22 = [
  createData2(
    "Mauri Mix",
    "10 N-UM",
    "450 secondes",
    "20 MB",
    "20 SMS",
    "",
    "24 H",
    "*222*code de recharge*3#, Pour l'activation à partir du crédit *3#"
  ),
  createData2(
    "Mauri Mix",
    "20 N-UM",
    "900 secondes",
    "50 MB",
    "50 SMS",
    "",
    "48 H",
    "*222*code de recharge*3#, Pour l'activation à partir du crédit *3#"
  ),
  createData2(
    "Mauri Mix",
    "30 N-UM",
    "1400 secondes",
    "75 MB",
    "75 SMS",
    "",
    "48 H",
    "Pour l'activation à partir du crédit *3#"
  ),
  createData2(
    "Mauri Mix",
    "50 N-UM",
    "40 min	",
    "400 MB",
    "",
    "40 SMS",
    "3 jours",
    "*222*code de recharge*3#, Pour l'activation à partir du crédit *3#"
  ),
  createData2(
    "Mauri Mix",
    "100 N-UM",
    "1 h 30 minutes",
    "1 GB",
    "100 SMS",
    "100 N-UM",
    "7 jours",
    "*222* Code recharge*3#"
  ),
  createData2(
    "Mauri Mix",
    "200 N-UM",
    " 3 heures",
    "2 GB",
    "200 SMS",
    "200 N-UM",
    "30 jours",
    "*222* Code recharge*3#"
  ),
  createData2(
    "Mauri Mix",
    "300 N-UM",
    "5 heures",
    "3 GB",
    "300 SMS",
    "300 N-UM",
    "30 jours",
    "*222* Code recharge*3#"
  ),
  createData2(
    "Mauri Mix",
    "500 N-UM",
    "10 heures",
    "5 GB",
    "500 SMS",
    "500 N-UM",
    "30 jours",
    "*222* Code recharge*3#"
  ),
  createData2(
    "Mauri Mix",
    "1000 N-UM",
    "20 heures",
    "10 GB",
    "500 SMS",
    "2000 N-UM",
    "30 jours",
    "*222* Code recharge*3#"
  ),
];

const rows33 = [
  createData3(
    "Mauri Chat	",
    "10 N-UM	",
    "20 MB",
    "80 SMS	",
    "48 H",
    "*222*code de recharge*4#, Pour l'activation à partir du crédit *4#'"
  ),
  createData3(
    "Mauri Chat	",
    "20 N-UM	",
    "50 MB",
    "150 SMS	",
    "7 Jours",
    "*222*code de recharge*4#, Pour l'activation à partir du crédit *4#'"
  ),
  createData3(
    "Mauri Chat	",
    "50 N-UM	",
    "100 MB",
    "400 SMS	",
    "30 Jours ",
    "*222*code de recharge*4#, Pour l'activation à partir du crédit *4#'"
  ),
];

const rows44 = [
  createData4(
    "Mauri Relax",
    "150 N-UM	",
    "3 H et 30 minutes",
    "",
    "",
    "15 Jours",
    "Pour l'activation à partir du crédit *1#"
  ),
  createData4(
    "Mauri Relax",
    "150 N-UM	",
    "2H",
    "1 GB+ 500 MB",
    "150 SMS",
    "15 Jours",
    "Pour l'activation à partir du crédit *3#"
  ),
];

const rows55 = [
  createData5("Dewli 5", "5 jours", "5 min", "60 N-UM", "*590*5#"),
  createData5("Dewli 15", "15 jours	", "15 min", "170 N-UM", "*590*15#"),
  createData5("Dewli 35", "30 jours", "35 min", "390 N-UM", "*590*35#"),
];

const rows66 = [
  createData("1", "Appels vers Chinguitel	", "4.48 N-UM (44.84 A-UM)"),
  createData("2", "Tarif d’appel des lignes fixes", "4.48 N-UM (44.84 A-UM)"),
  createData("3", "Appel d’autres lignes nationales	", "4.48 N-UM (44.84 A-UM)"),
  createData("4", "National vers tous les réseaux", "4.48 N-UM (44.84 A-UM)"),
  createData("5", "Appels internationaux", "Zone 1 : 9.9 N-UM ( 99 A-UM)"),
  createData("", "", "Zone 2 : 23.25 N-UM ( 232.49 A-UM)"),
  createData("", "", "Zone 3 : 32.8 N-UM (328.01 A-UM)"),
  createData("", "", "Zone 4 : 50.99 N-UM (509.99 A-UM)"),
  createData("", "", "Zone 5: 86.39 N-UM (863.99 A-UM)"),
  createData("", "", "Thuraya & Satellite : 225 N-UM (2250A-UM)"),
  createData("6", "SMS vers le réseau Chinguitel", "2 N-UM (20 A-UM)"),
  createData("7", "SMS vers les réseaux nationaux", "2 N-UM (20 A-UM)"),
  createData(
    "8",
    "	SMS vers les réseaux internationaux",
    "7.08 N-UM (70.8 A-UM)"
  ),
];

const rows77 = [
  createData6("De 10 à 29.9 UM", "4 N-UM"),
  createData6("De 30 à 99.9 UM", "7 N-UM"),
  createData6("De100 à 199.9 UM", "13 N-UM"),
  createData6("De 200 à 499.9 UM", "25 N-UM"),
  createData6("De 500 à 999.9 UM", "55 N-UM"),
  createData6("1000 N-UM et plus", "100 N-UM"),
];

const rows88 = [
  createData("Renvoi s'il n'y a pas de réponse", "*61*N°#	", "#61##"),
  createData("Renvoi si la ligne est occupée", "*67*N°#", "#67##"),
  createData("Tous les cas de figures	", "*21*N°#", "#21##"),
  createData("Renvoi d'appel s'il est difficile d’appeler", "*62*N°#", "#62##"),
];

export default function Individual({ menu1, setMenu1 }) {
  const { user, setUser } = useContext(AuthContext);
  const [render, setRender] = useState(0);

  const [sellPoint, setSellPoint] = useState("");
  const [cities, setCities] = useState("");
  const [currentData, setCurrentData] = useState(0);

  const Router = useRouter();

  const dataList = [
    {
      index: 0,
      label: "Prépayé",
    },
    {
      index: 1,
      label: "Postpayé",
    },
    {
      index: 2,
      label: "Services",
    },
  ];

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
                Particuliers
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
                Chinguitel offre à tous ses abonnés un bouquet de services
                répondant aux besoins de toutes les catégories d’usagers du
                réseau en applications audio, données ou multimédias.
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
                className={"md:p-[20px] p-[10px] "}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className={"md:p-[0px] p-[10px] "}
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
                      <img src="/chingpersonal0.jpg" />
                    </div>
                    <div>
                      <img src="/chingpersonal1.jpg" />
                    </div>
                    <div>
                      <img src="/chingpersonal2.jpg" />
                    </div>
                    <div>
                      <img src="/chingpersonal3.jpg" />
                    </div>
                    <div>
                      <img src="/chingpersonal4.jpg" />
                    </div>
                  </Carousel>
                </div>
                <div
                  className={"md:flex-row flex-col "}
                  style={{
                    width: "100%",
                    display: "flex",
                    marginTop: 20,
                  }}
                >
                  <div
                    className={"md:w-[40vw] w-[100%] "}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // backgroundColor: "red",

                      padding: 20,
                    }}
                  >
                    {dataList.map((item, index) => (
                      <div
                        onClick={() => {
                          setCurrentData(item.index);
                        }}
                        key={index}
                        style={{
                          display: "flex",
                          cursor: "pointer",
                          width: "100%",
                          height: 35,
                          marginBottom: 10,
                          backgroundColor:
                            currentData == item.index ? "blue" : "#fff",
                          paddingLeft: 10,
                          paddingRight: 10,
                          alignItems: "center",
                          borderRadius: 7,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "SFP-Regular",
                            color: currentData == item.index ? "#fff" : "#000",
                            textAlign: "center",
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      padding: 20,
                    }}
                  >
                    {currentData == 0 && (
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                        }}
                      >
                        <BigText>Définition</BigText>
                        <SmallText>
                          2G / 3G et la 4G . A travers cet ajout de qualité,
                          Chinguitel offre à tous ses abonnés un bouquet de
                          services répondant aux besoins de toutes les
                          catégories d’usagers du réseau en applications audio,
                          données ou multimédias.
                        </SmallText>
                        <BigText>Coût</BigText>
                        <SmallText>
                          Cette offre comprend une carte 2G/3G et la 4G à 50
                          N-UM ( 500 A-UM) seulement avec 30 N-UM (300 A-UM) de
                          crédit.
                        </SmallText>
                        <BigText>Caractéristiques</BigText>
                        <ul>
                          <SmallList>
                            Accès aux services 2G/3G et la 4G en bénéficiant
                            d’un service de haute qualité
                          </SmallList>
                          <SmallList>Tarification à la seconde</SmallList>
                          <SmallList>
                            Tarif unique vers tous les réseaux nationaux
                          </SmallList>
                          <SmallList>Services de base gratuits</SmallList>
                          <SmallUnder>Consultation du compte</SmallUnder>
                          <SmallUnder>Renvoi d’appels</SmallUnder>
                          <SmallUnder>Conférences</SmallUnder>
                          <SmallUnder>Appel du centre des services</SmallUnder>
                          <SmallList>Facilité de gestion du compte</SmallList>
                          <SmallList>Boîte vocale et SMS</SmallList>
                          <SmallList>
                            Appels visuels et messages multimédias
                          </SmallList>
                          <SmallList>
                            Connexion Internet sur les appareils mobiles.
                          </SmallList>
                        </ul>
                        <SmallText></SmallText>
                        <BigText>Tarification</BigText>
                        <SmallText></SmallText>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell align="right">{""}</TableCell>
                                <TableCell align="right">Service</TableCell>
                                <TableCell align="right">Tarif</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.calories}
                                  </TableCell>
                                  <TableCell align="right">{row.fat}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <SmallText></SmallText>
                        <ul>
                          <SmallList>
                            Zone 1 : Tout le monde sauf les zones 2 ,3 ,4 et 5
                          </SmallList>
                          <SmallList>
                            Zone 2 : Sénégal, Mali, Côte-d'Ivoire, Togo, Gabon,
                            Libye, Burkina Faso, Cameroun, Tchad, Libéria,
                            Congo, Guinée équatoriale, Zimbabwé, Zambie, Oman,
                            Myanmar, Ruanda, Biélorussie, Burundi , Ouganda,
                            Somalie, Estonie, Vietnam, Haïti, Serbie, Moldavie,
                            Bosnie-Herzégovine, Azerbaïdjan, Nouvelle-Zélande,
                            Suriname, Belgique, Yémen, Mozambique, Kenya, La
                            Slovénie, Arabie Saoudite
                          </SmallList>
                          <SmallList>
                            Zone 3 : Guinée, Niger, Algérie, Sierra Leone,
                            Benin, Lettonie, Guinée Bissau, Maroc, Congo,
                            Suisse, République centre Africaine, Djibouti,
                            Comores
                          </SmallList>
                          <SmallList>{"Zone 4 : Tunisie & Gambie"}</SmallList>
                          <SmallList>
                            Zone 5 : Madagascar, Cuba, Papouasie,
                            Nouvelle-Guinée, Nouvelle-Calédonie, Vanuatu,
                            Maldives, Montserrat, Saint-Marin, Sao
                            Tomé-et-Principe, Îles Salomon, Kiribati, Nauru,
                            Samoa, Tonga, Tuvalu et Gibraltar.
                          </SmallList>
                          <SmallText></SmallText>
                          <SmallList>*Tous les prix incluent la TVA.</SmallList>
                          <SmallList>
                            * Tous les pays facturent leurs appels en 10
                            secondes sauf Thuraya et les satellites, facturés en
                            unité chaque minute.{" "}
                          </SmallList>
                        </ul>
                        <SmallText></SmallText>
                        <SmallText></SmallText>
                        <BigText> Heures multiples Mauritani</BigText>
                        <SmallText>
                          Un bouquet d’heures offrant plusieurs options d’appels
                          à des tarifs variés :
                        </SmallText>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Les Bouquets</TableCell>
                                <TableCell align="right">Validité</TableCell>
                                <TableCell align="right">Minutes</TableCell>
                                <TableCell align="right">Tarifs</TableCell>
                                <TableCell align="right">Activation</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows00.map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.calories}
                                  </TableCell>
                                  <TableCell align="right">{row.fat}</TableCell>
                                  <TableCell align="right">
                                    {row.tarifs}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.activation}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <SmallText></SmallText>
                        <BigText>Mauri Allo</BigText>
                        <SmallText></SmallText>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Offre</TableCell>
                                <TableCell align="right">Prix</TableCell>
                                <TableCell align="right">Minutes</TableCell>
                                <TableCell align="right">Bonus</TableCell>
                                <TableCell align="right">Validité</TableCell>
                                <TableCell align="right">Activation</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows11.map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.calories}
                                  </TableCell>
                                  <TableCell align="right">{row.fat}</TableCell>
                                  <TableCell align="right">
                                    {row.tarifs}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.activation}
                                  </TableCell>
                                  <TableCell align="right">{row.arg}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <SmallText></SmallText>
                        <SmallText></SmallText>
                        <BigText>Les offres Mauri MIX</BigText>
                        <SmallText></SmallText>
                        <SmallText>
                          Les meilleurs bouquets pour les appels, Internet et
                          les SMS :
                        </SmallText>

                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Les Bouquets </TableCell>
                                <TableCell align="right">Tarifs</TableCell>
                                <TableCell align="right">Minutes </TableCell>
                                <TableCell align="right">Internet</TableCell>
                                <TableCell align="right">SMS</TableCell>
                                <TableCell align="right">Bonus </TableCell>
                                <TableCell align="right">Validité </TableCell>
                                <TableCell align="right">Activation </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows22.map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.calories}
                                  </TableCell>
                                  <TableCell align="right">{row.fat}</TableCell>
                                  <TableCell align="right">
                                    {row.tarifs}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.activation}
                                  </TableCell>
                                  <TableCell align="right">{row.arg}</TableCell>
                                  <TableCell align="right">
                                    {row.arg0}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.arg1}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <SmallText></SmallText>
                        <SmallText></SmallText>
                        <BigText>Mauri - Chat</BigText>
                        <SmallText></SmallText>

                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Les Bouquets </TableCell>
                                <TableCell align="right">Prix</TableCell>
                                <TableCell align="right">Internet </TableCell>
                                <TableCell align="right">SMS</TableCell>
                                <TableCell align="right">Validité</TableCell>
                                <TableCell align="right">Activation </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows33.map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.calories}
                                  </TableCell>
                                  <TableCell align="right">{row.fat}</TableCell>
                                  <TableCell align="right">
                                    {row.tarifs}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.activation}
                                  </TableCell>
                                  <TableCell align="right">{row.arg}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <SmallText></SmallText>
                        <SmallText></SmallText>

                        <BigText>Mauri Relax</BigText>
                        <SmallText></SmallText>

                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Les Bouquets </TableCell>
                                <TableCell align="right">Prix</TableCell>
                                <TableCell align="right">Minutes</TableCell>
                                <TableCell align="right">Internet </TableCell>
                                <TableCell align="right">SMS</TableCell>
                                <TableCell align="right">Validité</TableCell>

                                <TableCell align="right">Activation </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows44.map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.calories}
                                  </TableCell>
                                  <TableCell align="right">{row.fat}</TableCell>
                                  <TableCell align="right">
                                    {row.tarifs}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.activation}
                                  </TableCell>
                                  <TableCell align="right">{row.arg}</TableCell>
                                  <TableCell align="right">
                                    {row.arg0}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>

                        <SmallText></SmallText>
                        <SmallText></SmallText>

                        <BigText>Offre d’appels internationaux</BigText>
                        <SmallText></SmallText>
                        <SmallText>
                          Le service d’appels internationaux vous confère de
                          multiples et convenables options pour les
                          communications internationales :
                        </SmallText>

                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Les Bouquets </TableCell>
                                <TableCell align="right">Validité</TableCell>
                                <TableCell align="right">Minutes</TableCell>
                                <TableCell align="right">Traifs </TableCell>
                                <TableCell align="right">
                                  Activation Mauritani{" "}
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows55.map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.calories}
                                  </TableCell>
                                  <TableCell align="right">{row.fat}</TableCell>
                                  <TableCell align="right">
                                    {row.tarifs}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.activation}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </div>
                    )}
                    {currentData == 1 && (
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                        }}
                      >
                        <BigText>Définition</BigText>
                        <SmallText>
                          Le service Post-Payé offre tous les avantages
                          classiques du téléphone mobile, avec la possibilité de
                          choisir des numéros favoris à des prix compétitifs, de
                          jouir d’une connexion Internet à travers les
                          téléphones intelligents suivant les différents
                          bouquets.
                        </SmallText>
                        <SmallText></SmallText>
                        <SmallText>
                          our accéder à ce service, l’abonné doit adresser à
                          l’Agence des entreprises une demande d’ouverture de
                          compte à paiement facturé, accompagnée d’une garantie
                          bancaire ou d’une caution financière payée en espèces
                          ou par chèque.
                        </SmallText>
                        <BigText>Caractéristiques</BigText>
                        <SmallText>
                          Le Post-Payé permet de bénéficier des services G3/4G:
                        </SmallText>
                        <ul>
                          <SmallList>
                            Des meilleures communications audio
                          </SmallList>
                          <SmallList>SMS</SmallList>
                          <SmallList>De l’Internet à haut débit</SmallList>
                          <SmallList>Tarification à la seconde</SmallList>
                          <SmallList>
                            Tarif compétitif unique vers tous les réseaux
                            nationaux et internationaux
                          </SmallList>
                          <SmallList>Services de base gratuits</SmallList>
                          <SmallUnder>Renseignements sur le crédit</SmallUnder>
                          <SmallUnder>Renvoi d’appels</SmallUnder>
                          <SmallUnder>Conférences</SmallUnder>
                          <SmallUnder>Appel du centre des services</SmallUnder>
                          <SmallList>Facilité de gestion du compte</SmallList>
                          <SmallList>Boîte vocale et SMS</SmallList>
                          <SmallList>
                            Services du réseau intelligent (Information sur les
                            plafonds, les crédits, etc.)
                          </SmallList>
                          <SmallList>
                            Connexion Internet sur les appareils
                            mobiles.Communications audio et messages
                            multimédias.
                          </SmallList>
                        </ul>
                        <SmallText></SmallText>
                        <BigText>Tarification</BigText>
                        <SmallText></SmallText>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell align="right">{""}</TableCell>
                                <TableCell align="right">Service</TableCell>
                                <TableCell align="right">Tarif</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows66.map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.calories}
                                  </TableCell>
                                  <TableCell align="right">{row.fat}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <SmallText></SmallText>
                        <ul>
                          <SmallList>
                            Zone 1 : Tout le monde sauf les zones 2 ,3 ,4 et 5
                          </SmallList>
                          <SmallList>
                            Zone 2 : Sénégal, Mali, Côte-d'Ivoire, Togo, Gabon,
                            Libye, Burkina Faso, Cameroun, Tchad, Libéria,
                            Congo, Guinée équatoriale, Zimbabwé, Zambie, Oman,
                            Myanmar, Ruanda, Biélorussie, Burundi , Ouganda,
                            Somalie, Estonie, Vietnam, Haïti, Serbie, Moldavie,
                            Bosnie-Herzégovine, Azerbaïdjan, Nouvelle-Zélande,
                            Suriname, Belgique, Yémen, Mozambique, Kenya, La
                            Slovénie
                          </SmallList>
                          <SmallList>
                            Zone 3 : Guinée, Niger, Algérie, Sierra Leone,
                            Benin, Lettonie, Guinée Bissau, Maroc, Congo,
                            Suisse, République centre Africaine, Djibouti,
                            Comores.
                          </SmallList>
                          <SmallList>{"Zone 4 : Tunisie & Gambie"}</SmallList>
                          <SmallList>
                            Zone 5 : Madagascar, Cuba, Papouasie,
                            Nouvelle-Guinée, Nouvelle-Calédonie, Vanuatu,
                            Maldives, Montserrat, Saint-Marin, Sao
                            Tomé-et-Principe, Îles Salomon, Kiribati, Nauru,
                            Samoa, Tonga, Tuvalu et Gibraltar.
                          </SmallList>
                          <SmallText></SmallText>
                          <SmallList>*Tous les prix incluent la TVA.</SmallList>
                          <SmallList>
                            *Thuraya et les satellites se facturent en minute.
                          </SmallList>
                        </ul>
                      </div>
                    )}
                    {currentData == 2 && (
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                        }}
                      >
                        <BigText>Service Transfert de crédit</BigText>
                        <SmallText>
                          Il vous permet de transférer un montant de crédit d’un
                          numéro Mauritani à un autre numéro Mauritani.
                        </SmallText>
                        <SmallText></SmallText>
                        <SmallText padding={false}>
                          Méthode 1 : Taper *333* Montant * N° Destinataire*
                          PIN# et appuyer sur OK.
                        </SmallText>
                        <SmallText>
                          Méthode 2 : Appeler le 125 ou 112 et suivre les
                          instructions.
                        </SmallText>
                        <SmallText>
                          Méthode d’activation : Automatique
                        </SmallText>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell align="right">
                                  Categories versée N-UM{" "}
                                </TableCell>
                                <TableCell align="right">
                                  Coût TTC en N-UM
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows77.map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.calories}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <SmallText></SmallText>
                        <BigText>Numéro masqué sur le réseau Mauritani</BigText>
                        <SmallText>
                          Ce service vous donne l’opportunité de masquer votre
                          numéro à vos correspondants. Ainsi, Chinguitel vous
                          permet de vous distinguer des autres.
                        </SmallText>
                        <SmallText>
                          Activation : Acquise sur demande présentée sur place
                          au Service Clientèle (Agence Principale de Chinguitel)
                        </SmallText>
                        <SmallText>Coût : 1200 N-UM TTC /an</SmallText>
                        <SmallText>Utilisation :</SmallText>
                        <SmallList>
                          Pour faire apparaître le N° : *31# numéro contacté
                        </SmallList>
                        <SmallList>
                          Pour masquer le N° : # 31# numéro contacté
                        </SmallList>
                        <SmallText></SmallText>
                        <BigText>Service de messagerie vocale VMS</BigText>
                        <SmallText>
                          Le Service VMS de Chinguitel permet l’envoi de
                          messages vocaux dans le cas où votre interlocuteur est
                          indisponible et ne peut vous répondre. Il se fait par
                          une interface de voix chez l’utilisateur qui lui
                          permet d’activer et de gérer ce système.
                        </SmallText>
                        <SmallText>
                          Activation : Acquise sur demande présentée sur place
                          au Service Clientèle (Mauricenter ou Agence Carrefour)
                        </SmallText>
                        <SmallText>
                          Coût : Gratuit pour consulter les messages vocaux.
                          Pour enregistrer et envoyer un message vocal, le tarif
                          est de 40 N-UM la minute HT. (Tarif d’appel standard).
                        </SmallText>
                        <SmallText></SmallText>
                        <BigText>Rechargement du compte</BigText>
                        <SmallText>
                          Vous pouvez recharger votre compte suivant l’une des
                          méthodes ci-après :
                        </SmallText>
                        <SmallText>
                          Méthode 1 : Taper *222 * introduire le N° de la carte
                          de recharge # Appuyer sur OK
                        </SmallText>
                        <SmallText>
                          Méthode 2 : Appeler le 125 et suivre les instructions
                        </SmallText>
                        <SmallText></SmallText>

                        <SmallText>
                          Vous pouvez recharger un autre compte à partir de
                          votre compte:
                        </SmallText>
                        <SmallText>
                          Méthode 1 : Appeler le 122 et suivre les instructions
                        </SmallText>
                        <SmallText>
                          Méthode 2 : Taper *222 * introduire le N° de la carte
                          de recharge* N° du compte # Appuyer sur OK Crédit
                          valable durant 3 mois.
                        </SmallText>
                        <SmallText></SmallText>

                        <BigText>Service Conférences</BigText>
                        <SmallText>
                          Grâce à ce service, vous pouvez communiquer
                          simultanément avec plusieurs correspondants.
                        </SmallText>
                        <SmallText>
                          Automatiquement activé, et disponible chez tous les
                          abonnés Chinguitel, pour mettre votre correspondant en
                          attente, il faut activer le service mise en attente à
                          travers le service clientèle.
                        </SmallText>
                        <SmallText>Activation :</SmallText>
                        <SmallText>
                          Ce service suppose l’appel en premier lieu d’un
                          correspondant auquel on demande de rester en ligne,
                          puis l’appel d’un autre en deuxième lieu et quand le
                          second correspondant répond, il vous suffit de choisir
                          « appel conférence » de la liste des choix sur votre
                          téléphone
                        </SmallText>
                        <SmallText></SmallText>

                        <BigText>Service de mise en attente</BigText>
                        <SmallText>
                          Grâce à ce service, vous bénéficiez de l’avantage de
                          recevoir un nouvel appel alors même que vous êtes déjà
                          en communication avec un autre correspondant.
                        </SmallText>
                        <SmallText>
                          Pour activer le service : Taper *43 # et appuyer sur
                          OK
                        </SmallText>
                        <SmallText>
                          Pour désactiver le service : Taper #43# et appuyer sur
                          OK
                        </SmallText>
                        <SmallText>
                          Pour vérifier la situation du service des appels :
                          Taper #43# puis appuyer sur OK
                        </SmallText>
                        <SmallText></SmallText>
                        <BigText>Consultation du solde</BigText>
                        <SmallText>
                          Ce service vous permet de consulter votre crédit
                          (service gratuit)
                        </SmallText>
                        <SmallText>
                          Méthode 1 : Taper *222# Appuyer sur OK
                        </SmallText>
                        <SmallText>
                          Méthode 2 : Appeler le 125 et suivre les instructions
                        </SmallText>
                        <SmallText></SmallText>
                        <BigText>Service d’identification du Numéro</BigText>
                        <SmallText>
                          Grâce à ce service, vous pouvez accéder aux références
                          d’enregistrement de votre numéro.
                        </SmallText>
                        <SmallText>
                          Méthode : Envoyer 1 par SMS au 122.
                        </SmallText>
                        <SmallText>
                          Enregistrement des données : Vous pouvez appeler ou
                          envoyer votre numéro national au 127 pour enregistrer
                          vos données.
                        </SmallText>

                        <SmallText></SmallText>
                        <BigText>Renvoi d’appels</BigText>
                        <SmallText>
                          Grâce à ce service, vous pouvez renvoyer les appels
                          reçus vers tout autre numéro mobile ou fixe à
                          l’intérieur ou hors du réseau (local et international)
                        </SmallText>
                        <SmallText>Activation : Automatique</SmallText>
                        <SmallText>
                          Coût : En activant le renvoi d’appel, vous payez les
                          frais de communication entre votre numéro et le numéro
                          sur lequel vous avez fait le transfert (local ou
                          international).
                        </SmallText>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell align="right">Objectif</TableCell>
                                <TableCell align="right">Activation</TableCell>
                                <TableCell align="right">
                                  Désactivation
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows88.map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.calories}
                                  </TableCell>
                                  <TableCell align="right">{row.fat}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </div>
                    )}
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
