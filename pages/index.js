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
import Menu1 from "../components/Menu1";
import SendModal from "../components/Modals/SendModal";
import SideModal from "../components/SideModal";
import BigText from "../components/BigText";
import SmallText from "../components/SmallText";
import SmallList from "../components/SmallList";
import SmallUnder from "../components/SmallUnder";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
  createData5(
    "Maurinet",
    "20MB",
    "5 N-UM	",
    "0:00",
    "Pour l'activation à partir du crédit *2#"
  ),
  createData5(
    "Maurinet",
    "100MB",
    "10 N-UM	",
    "1Jour",
    "*222*code de recharge*2#, Pour l'activation à partir du crédit *2#"
  ),
  createData5(
    "Maurinet",
    "200MB",
    "20 N-UM	",
    "2Jours",
    "*222*code de recharge*2#, Pour l'activation à partir du crédit *2#"
  ),
  createData5(
    "Maurinet",
    "600MB",
    "50 N-UM	",
    "3Jours",
    "*222*code de recharge*2#, Pour l'activation à partir du crédit *2#"
  ),
  createData5(
    "Maurinet",
    "2GB	",
    "100 N-UM	",
    "30Jours",
    "*222*code de recharge*2#, Pour l'activation à partir du crédit *2#"
  ),
  createData5(
    "Maurinet",
    "4GB",
    "200 N-UM	",
    "30Jours",
    "*222*code de recharge*2#, Pour l'activation à partir du crédit *2#"
  ),
  createData5(
    "Maurinet",
    "7GB",
    "300 N-UM	",
    "30Jours",
    "*222*code de recharge*2#, Pour l'activation à partir du crédit *2#"
  ),
  createData5(
    "Maurinet",
    "12GB",
    "500 N-UM	",
    "30Jours",
    "*222*code de recharge*2#, Pour l'activation à partir du crédit *2#"
  ),
  createData5(
    "Maurinet",
    "25GB",
    "1000 N-UM	",
    "30Jours",
    "*222*code de recharge*2#, Pour l'activation à partir du crédit *2#"
  ),
  createData5(
    "Internet à partir du crédit",
    "Illimité",
    "1.25/512Kbs	",
    "Illimité",
    "ur activer le service tapez *590#, valable sur le réseau 3G"
  ),
];

const rows66 = [
  createData("1", "Appels vers Chinguitel	", "4.25 N-UM (42.48 A-UM)"),
  createData("2", "Tarif d’appel des lignes fixes", "4.25 N-UM (42.48 A-UM)"),
  createData("3", "Appel d’autres lignes nationales	", "4.25 N-UM (42.48 A-UM)"),
  createData("4", "National vers tous les réseaux", "4.25 N-UM (42.48 A-UM)"),
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

export default function Home({ menu1, setMenu1 }) {
  const { user, setUser } = useContext(AuthContext);
  const [render, setRender] = useState(0);
  const [cities, setCities] = useState(0);
  const [sellPoint, setSellPoint] = useState(0);
  const [step, setStep] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const Router = useRouter();

  const dataList = [
    {
      index: 0,
      label: "Fixe",
    },
    {
      index: 1,
      label: "Mobile",
    },
    {
      index: 2,
      label: "Internet",
    },
    {
      index: 3,
      label: "Réseau",
    },
    {
      index: 4,
      label: "Service client",
    },
  ];

  useEffect(() => {
    if (step === false) return;
    setModalVisible(true);
  }, [step]);

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
        <title>Chinguitel</title>
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
          <Header menu={menu1} setMenu={setMenu1} />
          <Menu1 menu={menu1} setMenu={setMenu1} />
          {modalVisible && (
            <SideModal
              title={dataList[step].label}
              modal={modalVisible}
              setModal={(item) => {
                setModalVisible(item);
                setStep(false);
              }}
            >
              {step == 0 && (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                ></div>
              )}
              {step == 1 && (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <BigText>Définition</BigText>
                  <SmallText padding={false}>
                    Le service Post-payé offre tous les services classiques du
                    téléphone mobile, permet de choisir des numéros favoris à
                    des prix compétitifs.
                  </SmallText>

                  <SmallText>
                    Pour s’y abonner, il suffit d’adresser une demande à
                    l’Agence des Entreprises pour l’ouverture d’un compte à
                    paiement facturé. Cette demande devra être accompagnée d’une
                    garantie bancaire ou d’une caution financière payée en
                    espèces ou par chèque.
                  </SmallText>
                  <BigText>Caractéristiques</BigText>

                  <ul>
                    <SmallList>Appels audio</SmallList>
                    <SmallList>SMS</SmallList>
                    <SmallList>Utilisation de l’Internet</SmallList>
                    <SmallList>Tarif à la seconde</SmallList>
                    <SmallList>
                      Tarif unique vers tous les réseaux nationaux et
                      internationaux
                    </SmallList>
                    <SmallList>Services de base gratuits :</SmallList>
                    <SmallUnder>Renseignements sur le crédit</SmallUnder>
                    <SmallUnder>Renvoi d’appels</SmallUnder>
                    <SmallUnder>Appels Conférences</SmallUnder>
                    <SmallUnder>Appel du centre des services</SmallUnder>
                    <SmallList>Facilité de gestion du compte</SmallList>
                    <SmallList>Messagerie vocale et SMS</SmallList>
                    <SmallList>
                      Services du réseau intelligent (Information sur les
                      plafonds, les crédits, etc.)
                    </SmallList>
                  </ul>
                  <SmallText></SmallText>
                  <BigText>Tarification</BigText>
                  <SmallText></SmallText>
                  <TableContainer component={Paper}>
                    <Table sx={{ width: "100%" }} aria-label="simple table">
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
                            <TableCell align="right">{row.calories}</TableCell>
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
                      Zone 2 : Sénégal, Mali, Côte-d'Ivoire, Togo, Gabon, Libye,
                      Burkina Faso, Cameroun, Tchad, Libéria, Congo, Guinée
                      équatoriale, Zimbabwé, Zambie, Oman, Myanmar, Ruanda,
                      Biélorussie, Burundi , Ouganda, Somalie, Estonie, Vietnam,
                      Haïti, Serbie, Moldavie, Bosnie-Herzégovine, Azerbaïdjan,
                      Nouvelle-Zélande, Suriname, Belgique, Yémen, Mozambique,
                      Kenya, La Slovénie
                    </SmallList>
                    <SmallList>
                      Zone 3 : Guinée, Niger, Algérie, Sierra Leone, Benin,
                      Lettonie, Guinée Bissau, Maroc, Congo, Suisse, République
                      centre Africaine, Djibouti, Comores.
                    </SmallList>
                    <SmallList>{"Zone 4 : Tunisie & Gambie"}</SmallList>
                    <SmallList>
                      Zone 5 : Madagascar, Cuba, Papouasie, Nouvelle-Guinée,
                      Nouvelle-Calédonie, Vanuatu, Maldives, Montserrat,
                      Saint-Marin, Sao Tomé-et-Principe, Îles Salomon, Kiribati,
                      Nauru, Samoa, Tonga, Tuvalu et Gibraltar.
                    </SmallList>
                    <SmallText></SmallText>
                    <SmallList>*Tous les prix incluent la TVA.</SmallList>
                    <SmallList>
                      *Thuraya et les satellites se facturent en minute.
                    </SmallList>
                  </ul>
                </div>
              )}
              {step == 2 && (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <BigText>3G/4G Mobile</BigText>
                  <SmallText>
                    En obtenant la puce Mauritani Prépayée, vous pouvez
                    bénéficier à des tarifs compétitifs de bouquets attractifs,
                    de données conçus spécialement pour répondre à vos besoins.
                  </SmallText>

                  <BigText>Caractéristiques</BigText>

                  <ul>
                    <SmallList>
                      La puce Mauritani est disponible dans toutes les Agences
                      Chinguitel et au niveau des points de vente des
                      distributeurs de Chinguitel
                    </SmallList>
                    <SmallList>
                      Le service Internet est activé automatiquement, pour 3G/4G
                    </SmallList>
                    <SmallList>
                      Le service Internet est disponible par votre choix de l’un
                      des bouquets du tableau ci-joint
                    </SmallList>
                  </ul>
                  <SmallText></SmallText>
                  <BigText>Méthode d’utilisation</BigText>
                  <SmallText>
                    Chaque puce Mauritani vous donne la possibilité d’accéder à
                    Internet à un haut débit sur les téléphones mobiles adaptés
                    à la technologie 3G/4G.
                  </SmallText>
                  <SmallText heading>Méthode d’utilisation</SmallText>
                  <SmallList title={"1."}>
                    Méthode automatique (conseillée) : En introduisant la puce
                    Mauritani dans votre téléphone mobile 3G/4G, vous recevrez
                    un message du réseau vous demandant d’enregistrer les
                    données sur votre téléphone. Appuyez alors sur la touche
                    Enregistrer, pour un enregistrement automatique et accédez
                    directement à la connexion Internet.
                  </SmallList>
                  <SmallList title={"2."}>
                    Si vous ne recevez pas un message du réseau, envoyez un SMS
                    au 109 et vous recevrez un message contenant les données à
                    enregistrer sur votre téléphone. Appuyer alors sur la touche
                    Enregistrer pour les sauvegarder
                  </SmallList>
                  <SmallList title={"3."}>
                    En cas d’échec des deux précédentes méthodes, il sera
                    impératif d’enregistrer les données requises manuellement
                    sur l’appareil, suivant la méthode ci-dessous :
                  </SmallList>
                  <SmallText heading>
                    Pour les appareils qui fonctionnent avec une technologie WAP
                    :{" "}
                  </SmallText>
                  <SmallText>APN: wap2g.chinguitel.mr </SmallText>
                  <SmallText>Proxy: 193.160.3.133 </SmallText>
                  <SmallText>Port: 8000</SmallText>
                  <SmallText heading>Pour les autres appareils : </SmallText>
                  <SmallText>APN : Internet3g.chinguitel.mr</SmallText>

                  <SmallText></SmallText>
                  <BigText>Offres 3G/4G Mobile</BigText>
                  <SmallText></SmallText>
                  <TableContainer component={Paper}>
                    <Table sx={{ width: "100%" }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Les Bouquets </TableCell>
                          <TableCell align="right">Internet</TableCell>
                          <TableCell align="right">Tarifs</TableCell>
                          <TableCell align="right">Validité</TableCell>
                          <TableCell align="right">Activation</TableCell>
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
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.tarifs}</TableCell>
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
            </SideModal>
          )}
          <div
            className={
              "lg:px-[150px] px-[30px] lg:flex-row flex-col lg:h-[calc(80%)] "
            }
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",

              paddingBottom: 75,
            }}
          >
            <div
              className="lg:order-1 order-2	"
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
                  "lg:w-[38vw] w-[100%] lg:text-[48px] text-[40px] lg:mt-[0px] mt-[50px] "
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
                  "lg:w-[30vw] w-[100%] lg:text-[18px] text-[19px] lg:mt-[0px] mt-[50px] "
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
                  height: 45,
                  backgroundColor: "#000",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 30,
                  cursor: "pointer",
                  borderRadius: 1000,
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
              className={"lg:w-[50%] w-[100%] lg:order-2 order-1 "}
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
                className={"lg:h-[60%] lg:pt-[0px] h-[60%] pt-[50px]  "}
                style={{
                  width: "100%",

                  objectFit: "contain",
                  backgroundSize: "contain",
                }}
              />
            </div>
          </div>
          <div
            className="lg:px-[75px] px-[0px] "
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
                      color: "#fff",
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

                    paddingTop: 10,
                    paddingBottom: 50,
                  }}
                >
                  <div
                    onClick={() => {
                      setStep(0);
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      width: "100%",
                      cursor: "pointer",
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
                        backgroundColor: "#fff",
                      }}
                    >
                      <AiFillPhone color="#0283C0" size={25} />
                    </div>
                    <span
                      style={{
                        fontFamily: "SFP-Regular",
                        fontSize: 19,
                        color: "#fff",
                        marginTop: 10,
                      }}
                    >
                      Fixe
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      setStep(1);
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      width: "100%",
                      flexDirection: "column",
                      paddingTop: 10,
                      paddingBottom: 10,
                      cursor: "pointer",
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
                        backgroundColor: "#fff",
                      }}
                    >
                      <BsFillPhoneFill color="#0283C0" size={25} />
                    </div>
                    <span
                      style={{
                        fontFamily: "SFP-Regular",
                        fontSize: 19,
                        marginTop: 10,
                        color: "#fff",
                      }}
                    >
                      Mobile
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      setStep(2);
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      width: "100%",
                      cursor: "pointer",
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
                        backgroundColor: "#fff",
                      }}
                    >
                      <FaInternetExplorer color="#0283C0" size={25} />
                    </div>
                    <span
                      style={{
                        fontFamily: "SFP-Regular",
                        fontSize: 19,
                        color: "#fff",
                        marginTop: 10,
                      }}
                    >
                      Internet
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      setStep(3);
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      width: "100%",
                      flexDirection: "column",
                      cursor: "pointer",
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
                        backgroundColor: "#fff",
                      }}
                    >
                      <AiOutlineWifi color="#0283C0" size={25} />
                    </div>
                    <span
                      style={{
                        fontFamily: "SFP-Regular",
                        fontSize: 19,
                        color: "#fff",

                        marginTop: 10,
                      }}
                    >
                      Réseau
                    </span>
                  </div>
                  <div
                    // onClick={() => {
                    //   setStep(4);
                    // }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      width: "100%",
                      cursor: "pointer",
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
                        backgroundColor: "#fff",
                      }}
                    >
                      <FaHeadset color="#0283C0" size={25} />
                    </div>
                    <span
                      style={{
                        fontFamily: "SFP-Regular",
                        fontSize: 19,
                        color: "#fff",
                        marginTop: 10,
                      }}
                    >
                      Service client
                    </span>
                  </div>
                </div>
                {/* <div
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
                        backgroundColor: "#fff",
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
                </div> */}
                <div
                  className={"sm:flex-row flex-col"}
                  style={{
                    width: "100%",
                    display: "flex",
                    backgroundColor: "#fff",
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
                    className="sm:items-start items-center "
                    style={{
                      flex: 1,
                      display: "flex",
                      height: "100%",
                      justifyContent: "center",

                      flexDirection: "column",
                    }}
                  >
                    <span
                      className="sm:text-left text-center "
                      style={{
                        width: "100%",
                        fontFamily: "SFP-Medium",
                        fontSize: 24,
                        color: "#000",
                      }}
                    >
                      Application Chinguitel
                    </span>
                    <span
                      className="sm:text-left text-center "
                      style={{
                        width: "100%",
                        fontFamily: "SFP-Regular",
                        fontSize: 16,
                        color: "#000",
                      }}
                    >
                      Accèdez En Un Clic Au Monde De Chinguitel Téléchargez
                      Votre Application
                    </span>
                    <div
                      onClick={() => {
                        Router.push(
                          "https://play.google.com/store/apps/details?id=mr.chinguitel.selfcare"
                        );
                      }}
                      style={{
                        display: "flex",
                        width: 180,
                        height: 40,
                        cursor: "pointer",
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
