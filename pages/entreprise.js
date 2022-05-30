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
function createData7(name, calories, fat, arg) {
  return { name, calories, fat, arg };
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

const rows99 = [
  createData6(
    "Réduction sur le tarif du groupe",
    "Il répond aux besoins des entreprises qui emploient moins de 15 personnes. Elles bénéficient d’une réduction de 20% sur les tarifs des appels"
  ),
  createData6(
    "Ouvert dans le groupe",
    "Si le nombre d’employés est supérieur à 15, la facturation est mensuelle pour chaque employé du groupe en contrepartie des appels illimités pendant 30 jours. "
  ),
];

const rows001 = [
  createData7("Automatique", "", "1.25 N-UM (12.5 A-UM)", "Internet du crédit"),
];

const rows002 = [
  createData6("4500 N-UM (45000 A-UM)", "5000 SMS"),
  createData6("8000 N-UM (80000 A-UM)", "10000 SMS"),
  createData6("35000 N-UM (350000 A-UM)", "50000 SMS"),
  createData6("60000 N-UM (600000 A-UM)", "100000 SMS"),
  createData6("100000 N-UM (1000000 A-UM)", "200000 SMS"),
];

const rows003 = [createData6("Chinguitel", "0.472 N-UM (4.72 A-UM)")];
const rows004 = [
  createData6("1 Go ", "150 N-UM (1500 A-UM)"),
  createData6("500 Mo et 50 SMS ", "150 N-UM (1500 A-UM)"),
  createData6("SMS illimités", "118 N-UM (1180 A-UM)"),
];
const rows005 = [createData6("200 N-UM (2000 A-UM)", "15 N-UM (150 A-UM)")];

export default function Entreprise({ menu1, setMenu1 }) {
  const { user, setUser } = useContext(AuthContext);
  const [render, setRender] = useState(0);

  const [sellPoint, setSellPoint] = useState("");
  const [cities, setCities] = useState("");
  const [currentData, setCurrentData] = useState(0);

  const Router = useRouter();

  const dataList = [
    {
      index: 0,
      label: "PRO-TEAM",
    },
    {
      index: 1,
      label: "DATA",
    },
    {
      index: 2,
      label: "Mobile avec internet 3G",
    },
    {
      index: 3,
      label: "Pack SMS",
    },
    {
      index: 4,
      label: "Pack SMPP",
    },
    {
      index: 5,
      label: "DATA & SMS TRACKING",
    },
    {
      index: 6,
      label: "NUMERO VERT",
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
                Entreprise
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
                    <SmallPhoto
                      src={
                        currentData == 2
                          ? "/business/" + currentData + ".jpg"
                          : "/business/" + currentData + ".png"
                      }
                    />
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
                          Le service est destiné aux entreprises et aux
                          organisations qui veulent créer des sous-réseaux pour
                          leurs employés afin de développer les travaux et
                          optimiser les meilleurs budgets de communication au
                          sein d’un groupe d’abonnés avec des tarifs
                          préférentiels.
                        </SmallText>

                        <BigText>Caractéristiques</BigText>
                        <SmallText>
                          Le service PRO-TEAM présente tous les principaux
                          services d’un téléphone mobile :
                        </SmallText>
                        <ul>
                          <SmallList>Appels téléphoniques</SmallList>
                          <SmallList>SMS</SmallList>
                          <SmallList>Navigation Internet</SmallList>
                          <SmallList>
                            {
                              "Services gratuits (Connaître l’appelant, attente des appels, transfert des appels…etc.)"
                            }
                          </SmallList>
                        </ul>
                        <SmallText></SmallText>
                        <BigText>Consommation</BigText>
                        <SmallText>Selon le choix de l’entreprise : </SmallText>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Choix </TableCell>
                                <TableCell align="right">
                                  Détails de l’offre{" "}
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows99.map((row, index) => (
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
                        <SmallText>Mode d’activation :</SmallText>
                        <SmallText>
                          Pour activer le service, visitez ou appelez l’agence
                          Entreprises.
                        </SmallText>
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
                        <BigText>Données</BigText>
                        <SmallText>
                          Ce sont des solutions présentées par Chinguitel, pour
                          les grandes entreprises ayant des filiales, qui
                          permettent de coordonner leurs filiales d’une manière
                          électronique pour faciliter le fonctionnement des
                          différents systèmes. bouquets.
                        </SmallText>
                        <SmallText>
                          Chinguitel utilise plusieurs techniques pour présenter
                          ces solutions (La solution peut être présentée par une
                          seule technique ou un ensemble de techniques en même
                          temps pour garantir l’efficacité avec une optimisation
                          des coûts).{" "}
                        </SmallText>
                        <SmallText></SmallText>

                        <BigText>POINT TO POINT</BigText>
                        <SmallText>
                          POINT TO POINT spécialisée, permet l’obtention d’un
                          réseau de communication durable entre les différents
                          emplacements de l’entreprise, ils échangent l’ensemble
                          des données à travers une chaîne unique spécialisée
                          qui est en exclusivité dans votre entreprise. Elle
                          offre une série de services exceptionnels pour lier un
                          point à un autre ou à plusieurs autres points avec un
                          Internet identique à haut débit. Elle permet de créer
                          des tunnels sécurisés pour accéder à Internet.
                        </SmallText>
                        <SmallText>Caractéristiques :</SmallText>
                        <ul>
                          <SmallList>
                            Solutions adaptables et évolutives
                          </SmallList>
                          <SmallList>
                            Nous utilisons les dernières techniques de Radio
                          </SmallList>
                          <SmallList>
                            Efficacité de changement des vitesses de
                            coordination
                          </SmallList>
                          <SmallList>Tarification à la seconde</SmallList>
                        </ul>
                        <SmallText></SmallText>
                        <SmallText>Tarification :</SmallText>
                        <ul>
                          <SmallList>Selon la vitesse demandée</SmallList>
                        </ul>
                        <SmallText></SmallText>
                        <SmallText>Méthode d'activation :</SmallText>
                        <SmallText>
                          Pour activer le service, visitez ou appelez l’agence
                          Entreprises.
                        </SmallText>
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
                        <BigText>Définition</BigText>
                        <SmallText>
                          Avec l’obtention d’une SIM Mauritani, quel que soit
                          pour le post payé ou prépayé :
                        </SmallText>
                        <SmallText></SmallText>
                        <ul>
                          <SmallList>
                            Possibilité d’obtenir des packs attractifs avec des
                            prix compétitifs personnalisés en fonctions des
                            besoins.
                          </SmallList>
                          <SmallList>
                            Obtenir une SIM Mauritani des agences entreprises
                            Chinguitel.
                          </SmallList>
                          <SmallList>
                            Services Internet automatiquement activé pour 2G/3G
                            et la 4G
                          </SmallList>
                        </ul>
                        <SmallText></SmallText>
                        <BigText>Tarification</BigText>

                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableBody>
                              {rows001.map((row, index) => (
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
                                  <TableCell align="right">{row.arg}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <SmallText></SmallText>
                        <BigText> Mode d’activation</BigText>
                        <SmallText>
                          Veuillez visiter l'agence corporative la plus proche
                        </SmallText>
                        <SmallText></SmallText>
                        <SmallText>
                          Chaque SIM du réseau Mauritani vous permet l’accès à
                          Internet à haut débit sur les appareils téléphoniques
                          mobiles appropriés à la technologie 2G/3G et la 4G.
                        </SmallText>
                        <SmallText></SmallText>

                        <SmallText heading>
                          Méthode automatique (recommandée) :
                        </SmallText>
                        <ul>
                          <SmallList>
                            Insérez la SIM Mauritanie dans vos téléphones
                            mobiles 3G et vous recevez un message de la part du
                            réseau où il vous demande de souscrire les données
                            sur votre téléphone.
                          </SmallList>
                          <SmallList>
                            Vous cliquez sur enregistrer pour un enregistrement
                            automatique et utilisez Internet directement.
                          </SmallList>
                          <SmallList>
                            Dans le cas où vous ne recevez pas le message,
                            envoyez un SMS au 109 et vous allez recevoir un
                            message contenant les informations demandées.
                          </SmallList>
                          <SmallList>
                            Pour l’enregistrer sur votre téléphone, cliquez sur
                            enregistrer.
                          </SmallList>
                          <SmallList>
                            Si les deux méthodes ne marchent pas, vous devrez
                            enregistrer les informations demandées manuellement
                            sur votre appareil comme suit :
                          </SmallList>
                        </ul>

                        <SmallText></SmallText>
                        <SmallText heading>
                          Pour les abonnés au système 3G/ 4G :
                        </SmallText>
                        <SmallText>
                          Pour les abonnés au système 3G/ 4G :
                        </SmallText>
                        <SmallText>APN : wap2g.chinguitel.mr</SmallText>
                        <SmallText>Proxy : 193.160.3.133</SmallText>
                        <SmallText>Port: 8000</SmallText>
                        <SmallText>Pour les autres appareils :</SmallText>
                        <SmallText>APN : Internet3g.chinguitel.mr</SmallText>
                      </div>
                    )}
                    {currentData == 3 && (
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
                          Bulk SMS ou pack SMS permet d’envoyer un message à un
                          grand nombre de destinataires en même temps.
                        </SmallText>
                        <SmallText>
                          Peu importe la taille de votre entreprise, Petite,
                          Moyenne ou Grande, nous mettons à votre disposition
                          une plateforme SMS pour garantir l’envoi à vos
                          employés ou partenaires.
                        </SmallText>
                        <SmallText></SmallText>

                        <BigText>Caractéristiques</BigText>
                        <SmallList title={"Le service Bulk SMS"}>
                          Optimise votre temps et vous permet de rationaliser
                          les ressources par élaboration d’une communication
                          basée sur des SMS avec les employés, les clients, les
                          prestataires … etc.
                        </SmallList>
                        <SmallList title={"Le service Bulk SMS"}>
                          Vous permet d’envoyer immédiatement vos données
                          changées à la dernière minute, ou les informations
                          urgentes ou pour rappeler les rendez-vous importants.
                        </SmallList>
                        <SmallList title={"Le service Bulk SMS"}>
                          C’est un Interface Internet connecté directement au
                          réseau avec une facilité d’utilisation, disponible sur
                          n’importe quel ordinateur connecté à Internet.
                        </SmallList>
                        <SmallList title={""}>
                          Ne demande aucun investissement ou formation.
                        </SmallList>
                        <SmallList title={""}>
                          Ce service vous permet d'envoyer des messages à vos
                          clients ou employés qu'il soit abonnés à Chinguitel ou
                          autre abonnés locaux.
                        </SmallList>
                        <SmallList title={""}>
                          Le service Bulk SMS est facilement utilisable et
                          adaptable à vos besoins.
                        </SmallList>

                        <SmallText></SmallText>
                        <BigText>Tarification</BigText>

                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Tarifs (UM)</TableCell>
                                <TableCell align="right">Nombre SMS</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows002.map((row, index) => (
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
                        <SmallText>
                          On accorde aux entreprises des tarifs préférentiels.
                        </SmallText>

                        <SmallText heading>Mode d’activation :</SmallText>
                        <SmallText>
                          Pour activer ce service, visitez ou appelez l’agence
                          Entreprises.{" "}
                        </SmallText>
                      </div>
                    )}
                    {currentData == 4 && (
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
                          SMPP c’est un service de messagerie basé sur le
                          protocole IP/TCP qui peut être utilisé pour lier deux
                          parties sur n’importe quel serveur afin d’envoyer des
                          SMS par l’option SMSC appropriée à Chinguitel.
                        </SmallText>
                        <SmallText>
                          Cette liaison se fait d’une manière fiable qui
                          garantit la bonne accessibilité.
                        </SmallText>
                        <SmallText>
                          Ce service présente les meilleures solutions pour les
                          entreprises qui veulent envoyer un grand nombre des
                          SMS durant le mois.{" "}
                        </SmallText>
                        <SmallText></SmallText>

                        <BigText>Caractéristiques</BigText>
                        <ul>
                          <SmallList>
                            Soutenir les longues séries des SMS
                          </SmallList>
                          <SmallList>Capacité d’envoi standard</SmallList>
                          <SmallList>SMS en volume</SmallList>
                          <SmallList>Notifications et alertes</SmallList>
                          <SmallList>Messagerie à double destination</SmallList>
                        </ul>
                        <SmallText></SmallText>
                        <BigText>Tarification</BigText>

                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Destination</TableCell>
                                <TableCell align="right">Tarifs TTC</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows003.map((row, index) => (
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
                        <SmallText>
                          La tarification se fait par une facture mensuelle
                          basée sur le nombre des SMS.{" "}
                        </SmallText>
                        <SmallText heading>Mode d’activation :</SmallText>
                        <SmallText>
                          Pour activez le service, visitez ou appelez l’agence
                          Entreprises
                        </SmallText>
                      </div>
                    )}
                    {currentData == 5 && (
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
                          Ce service offre des packs pour les entreprises, qui
                          présentent des services en ligne par des SIM GSM ou
                          par des SMS, à travers l’utilisation des appareils qui
                          conviennent.
                        </SmallText>
                        <SmallText></SmallText>
                        <BigText>Packs</BigText>
                        <ul>
                          <SmallList>1 Go valable pour 30 jours.</SmallList>
                          <SmallList>
                            500 Mo et 50 SMS valable pour 30 jours.
                          </SmallList>
                          <SmallList>SMS illimités valable un mois.</SmallList>
                        </ul>
                        <SmallText></SmallText>
                        <BigText>Tarification</BigText>

                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Destination</TableCell>
                                <TableCell align="right">Tarifs TTC</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows004.map((row, index) => (
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
                        <SmallText>
                          La facturation est mensuelle et se base sur le nombre
                          des numéros.{" "}
                        </SmallText>
                        <SmallText heading>Mode d’activation :</SmallText>
                        <SmallText>
                          Pour activer le service, visitez ou appelez l’agence
                          Entreprises.{" "}
                        </SmallText>
                      </div>
                    )}
                    {currentData == 6 && (
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
                          Ce service permet aux entreprises la possibilité de
                          répondre aux questionnements de leurs clients qui
                          peuvent appeler gratuitement le numéro vert par
                          n’importe quel réseau national. C’est l’entreprise qui
                          paye les frais de l’appel.
                        </SmallText>
                        <SmallText></SmallText>
                        <BigText>Caractéristique</BigText>
                        <ul>
                          <SmallList>
                            Des numéros personnels composés de 7 chiffres
                            800030XX
                          </SmallList>
                          <SmallList>
                            La coordination avec d’autres opérateurs
                            téléphoniques.
                          </SmallList>
                          <SmallList>
                            Gratuité des appels pour vos clients.{" "}
                          </SmallList>
                        </ul>
                        <SmallText></SmallText>
                        <BigText>Tarification</BigText>

                        <TableContainer component={Paper}>
                          <Table
                            sx={{ width: "100%" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Abonnement mensuel</TableCell>
                                <TableCell align="right">Tarifs TTC</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows005.map((row, index) => (
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

                        <SmallText heading>Mode d’activation :</SmallText>
                        <SmallText>
                          Pour activer ce service, visitez ou appelez l’agence
                          Entreprises.
                        </SmallText>
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
