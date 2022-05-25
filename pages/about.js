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

export default function About(props) {
  const { user, setUser } = useContext(AuthContext);
  const [render, setRender] = useState(0);

  const [sellPoint, setSellPoint] = useState("");
  const [cities, setCities] = useState("");
  const [currentData, setCurrentData] = useState(0);

  const Router = useRouter();

  const dataList = [
    {
      index: 0,
      label: "Mot du Directeur Général",
    },
    {
      index: 1,
      label: "Chinguitel",
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
          <Header />
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
                Qui sommes-nous?
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
                    {currentData == 0 && (
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                        }}
                      >
                        <SmallPhoto
                          contain
                          height={300}
                          src={"/chingdir.png"}
                        />

                        <SmallText heading bold>
                          Bienvenue à Chinguitel, le meilleur espace de
                          télécommunications
                        </SmallText>
                        <SmallText>
                          Nous sommes heureux de vous souhaiter la bienvenue
                          dans le site WEB de l’entreprise Chinguitel. Ce site
                          représente pour nous un portail d’échanges avec nos
                          abonnés, une passerelle nous permettant d’être
                          constamment à leur écoute afin de nous hisser au
                          niveau de leurs aspirations pour leur fournir les
                          services de grande qualité que procurent les progrès
                          sans cesse renouvelés des technologies de
                          télécommunications.
                        </SmallText>
                        <SmallText>
                          Aussi, cet espace nous permet-il de présenter les
                          offres alléchantes que propose notre entreprise ainsi
                          que les nouvelles opportunités offertes dans le cadre
                          de l’extension de nos services et de leur
                          diversification. Autre avantage et non des moindres,
                          ce portail nous offre, en plus, l’opportunité de
                          renforcer la dimension sociale de nos programmes
                          économiques et de matérialiser la pertinence du
                          contrat, sans nul autre pareil, qui nous lie à la
                          société mauritanienne.
                        </SmallText>
                        <SmallText>
                          Un coup d’œil rapide sur l'évolution de cette société,
                          montre un accroissement exponentiel de ses services et
                          une remarquable extension de sa présence sur le sol
                          national. Le tout est naturellement conforté de
                          nombreux succès engrangés en un temps record et qui
                          sont le fruit des efforts d'innovation visant le
                          développement soutenu qui reste le vrai credo de
                          Chinguitel.
                        </SmallText>
                        <SmallText>
                          En effet, forte de cette appellation, qui illustre son
                          profond ancrage dans l'espace mauritanien, Chinguitel
                          est demeurée fidèle à ses relations et à ses
                          engagements envers la Mauritanie à laquelle elle est,
                          avant tout, liée par une charge affective venant en
                          appui à la dimension investissement de son action.
                        </SmallText>
                        <SmallText>
                          Oui, depuis sa création - et en dépit de son relatif
                          jeune âge- Chinguitel a tenu à impacter positivement
                          le marché national mauritanien à travers la
                          construction et le fonctionnement d’un vaste réseau
                          d’infrastructures modernes de télécom, à travers
                          l’investissement pour acquérir les technologies de
                          pointe dans ce domaine et la mise à la disposition du
                          client d’une gamme variée d’applications exclusives et
                          de services innovants.
                        </SmallText>
                        <SmallText>
                          En plus de ces considérables acquis, Chinguitel veille
                          à l'amélioration continuelle de ses performances aux
                          niveaux technique, administratif et opérationnel afin
                          qu'elle puisse tenir le pari d'accompagner le rythme
                          du progrès technologique et continuer à fournir des
                          services d'un niveau n'ayant rien à envier à ceux des
                          plus grands opérateurs de téléphonie.
                        </SmallText>
                        <SmallText>
                          Aujourd’hui, notre entreprise est fière du
                          développement quantitatif et qualitatif de ses
                          réalisations, de l'accroissement constant de ses
                          partenaires, de celui de ses clients, de la fidélité
                          des abonnés, de sa capacité à se mettre à l'écoute de
                          ses usagers, d’identifier leurs besoins et répondre
                          efficacement à leur attente.
                        </SmallText>
                        <SmallText>
                          Partenaire clé de la société mauritanienne, Chinguitel
                          continuera d’œuvrer sans réserve à faire face à toutes
                          ses responsabilités, en particulier le domaine social.
                          C'est pour cela que, par le biais de ses initiatives
                          et projets économiques, sociaux et culturels, elle
                          tient constamment à développer un impact positif sur
                          la vie du peuple mauritanien. Cette responsabilité
                          sociale envers les populations tient en bonne place
                          dans la mission que nous nous assignons et qui est la
                          pierre angulaire des objectifs qui sont les nôtres.
                        </SmallText>
                        <SmallText>
                          Avec votre appui, Chinguitel poursuivra résolument la
                          mise en œuvre de sa stratégie visant le développement
                          d’une innovante et solide entreprise de communications
                          numériques, qui soit au service des communautés
                          auxquelles elle propose les meilleurs services ainsi
                          que l’accès à un environnement intégré de
                          télécommunications de grande qualité.
                        </SmallText>
                        <SmallText>
                          Avec vous et pour vous, nous veillerons sans cesse à
                          l’amélioration de la qualité de nos services, nous
                          nous appliquerons à garantir l’accès du marché
                          mauritanien aux meilleures solutions numériques et
                          nous tiendrons à favoriser notre clientèle par
                          l’acquisition d’équipements et programmes de dernière
                          génération.
                        </SmallText>
                        <SmallText heading>
                          Notre souci, à Chinguitel, est de toujours rester à
                          l’avant-garde.
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
                        <SmallPhoto contain height={300} src={"/ching.png"} />

                        <SmallText>
                          L’entreprise Chinguitel a été créée en 2006 avec un
                          capital de 2.7 milliards N-UM, qui a atteint
                          dernièrement les 24,921 milliard N-UM. L’entreprise
                          possède deux licences : La licence N°6 spécifique pour
                          le réseau pour téléphone mobile de la deuxième
                          génération. Cette licence couvre la période du 26
                          Juillet 2006 au 27 Juin 2021 pour 26,6 milliards N-UM.
                        </SmallText>
                        <SmallText>
                          Pour ce qui est de la deuxième, c’est la licence N°7
                          qui est spécifique au réseau de la troisième
                          génération de communication internationale, d’Internet
                          et du bouquet des cartes prépayées. Elle couvre la
                          période du 26 Juillet 2006 au 27 Juin 2021 pour 900
                          million N-UM.
                        </SmallText>
                        <SmallText>
                          Depuis le lancement de Chinguitel, les différentes
                          parties de l’entreprise travaillent sérieusement et
                          avec créativité pour rendre tous les services
                          accessibles aux citoyens. Elle offre un service
                          Internet mobile pour la première fois en Mauritanie à
                          grande échelle, ainsi que des services de
                          communication à travers les méthodes classiques dans
                          différentes zones mauritaniennes en valorisant la
                          langue arabe comme une langue principale similaire à
                          la langue française. Et pour une première fois,
                          l’abonné arabe bénéficie des mêmes avantages que son
                          vis-à-vis francophone. L’entreprise a retenu la
                          seconde comme étant une unité de facturation unifiée
                          pour tous les réseaux..
                        </SmallText>
                        <SmallText>
                          Tout au long des dernières décennies, la direction
                          exécutive a suivi des stratégies visant à développer
                          le fonctionnement de l’entreprise et la valoriser sa
                          mission au service des clients mauritaniens afin de
                          rehausser la qualité des prestations qui leur sont
                          fournies. Ces stratégies ont visé aussi le
                          développement du réseau et le lancement de deux
                          marques commerciales exclusives Zaki et Mauritani.
                        </SmallText>
                        <SmallText>
                          Chinguitel poursuit toujours ses interventions dans le
                          domaine du développement social. Elle a réalisé des
                          actions considérables en aidant les plus démunis et en
                          procédant à la distribution de paniers Ramadan.
                          L’entreprise a aussi soutenu et organisé différentes
                          activités dans les domaines de la culture, de
                          l’éducation, de la santé et du sport. Dans le domaine
                          du travail, Chinguitel a offert des milliers
                          d’opportunités d‘emploi directs et indirectes à
                          travers sa participation à l’économie mauritanienne et
                          sa participation à la qualification professionnelle de
                          jeunes Mauritaniens.
                        </SmallText>
                        <SmallText bold>
                          On tient, en particulier, à présenter les projets que
                          Chinguitel a réalisés durant les dernières décennies :
                        </SmallText>

                        <ul>
                          <SmallList>
                            La couverture des axes routiers nationaux par son
                            propre service de télécommunication{" "}
                          </SmallList>
                          <SmallList>
                            L’extension de la couverture Internet{" "}
                          </SmallList>
                          <SmallList>
                            Le développement de la dynamique des marchés de
                            communication à travers l’offre de services de
                            différentes formes technologiques.
                          </SmallList>
                        </ul>
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
