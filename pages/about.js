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
    "Appels vers le r??seau Chinguitel et tous les appels nationaux",
    "7.8 N-UM (78 A-UM)"
  ),
  createData("2", "Appels internationaux", "Zone 1 : 16.5 N-UM (165 A-UM)"),
  createData(" ", " ", "Zone 2 : 31 N-UM (310 A-UM)"),
  createData("", "", "Zone 3 : 41 N- UM (410 A-UM)"),
  createData("", "", "Zone 4 : 60 N-UM (600 A-UM)"),
  createData("", "", "Iles : 96 N-UM (960 A-UM)"),
  createData("", "", "Thuraya & Satellites : 225 N-UM (2250 A-UM)"),
  createData("3", "SMS vers le r??seau Chinguitel	", "2 N-UM (20A-UM)"),
  createData("4", "SMS vers les r??seaux nationaux	", "2 N-UM (20A-UM)"),
  createData(
    "5",
    "SMS vers les r??seaux internationaux	",
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
    "*222*code de recharge*1# , Pour l'activation ?? partir du cr??dit *1#"
  ),
  createData1(
    "Mauri allo	",
    "20",
    "20 minutes	",
    "",
    "48 H",
    "*222*code de recharge*1# , Pour l'activation ?? partir du cr??dit *1#"
  ),
  createData1(
    "Mauri allo	",
    "30",
    "33 minutes	",
    "",
    "48 H",
    "Pour l'activation ?? partir du cr??dit *1#"
  ),
  createData1(
    "Mauri allo	",
    "50",
    "60 minutes	",
    "",
    "3 Jours",
    "*222*code de recharge*1#, Pour l'activation ?? partir du cr??dit *1#"
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
    "*222*code de recharge*3#, Pour l'activation ?? partir du cr??dit *3#"
  ),
  createData2(
    "Mauri Mix",
    "20 N-UM",
    "900 secondes",
    "50 MB",
    "50 SMS",
    "",
    "48 H",
    "*222*code de recharge*3#, Pour l'activation ?? partir du cr??dit *3#"
  ),
  createData2(
    "Mauri Mix",
    "30 N-UM",
    "1400 secondes",
    "75 MB",
    "75 SMS",
    "",
    "48 H",
    "Pour l'activation ?? partir du cr??dit *3#"
  ),
  createData2(
    "Mauri Mix",
    "50 N-UM",
    "40 min	",
    "400 MB",
    "",
    "40 SMS",
    "3 jours",
    "*222*code de recharge*3#, Pour l'activation ?? partir du cr??dit *3#"
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
    "*222*code de recharge*4#, Pour l'activation ?? partir du cr??dit *4#'"
  ),
  createData3(
    "Mauri Chat	",
    "20 N-UM	",
    "50 MB",
    "150 SMS	",
    "7 Jours",
    "*222*code de recharge*4#, Pour l'activation ?? partir du cr??dit *4#'"
  ),
  createData3(
    "Mauri Chat	",
    "50 N-UM	",
    "100 MB",
    "400 SMS	",
    "30 Jours ",
    "*222*code de recharge*4#, Pour l'activation ?? partir du cr??dit *4#'"
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
    "Pour l'activation ?? partir du cr??dit *1#"
  ),
  createData4(
    "Mauri Relax",
    "150 N-UM	",
    "2H",
    "1 GB+ 500 MB",
    "150 SMS",
    "15 Jours",
    "Pour l'activation ?? partir du cr??dit *3#"
  ),
];

const rows55 = [
  createData5("Dewli 5", "5 jours", "5 min", "60 N-UM", "*590*5#"),
  createData5("Dewli 15", "15 jours	", "15 min", "170 N-UM", "*590*15#"),
  createData5("Dewli 35", "30 jours", "35 min", "390 N-UM", "*590*35#"),
];

const rows66 = [
  createData("1", "Appels vers Chinguitel	", "4.48 N-UM (44.84 A-UM)"),
  createData("2", "Tarif d???appel des lignes fixes", "4.48 N-UM (44.84 A-UM)"),
  createData("3", "Appel d???autres lignes nationales	", "4.48 N-UM (44.84 A-UM)"),
  createData("4", "National vers tous les r??seaux", "4.48 N-UM (44.84 A-UM)"),
  createData("5", "Appels internationaux", "Zone 1 : 9.9 N-UM ( 99 A-UM)"),
  createData("", "", "Zone 2 : 23.25 N-UM ( 232.49 A-UM)"),
  createData("", "", "Zone 3 : 32.8 N-UM (328.01 A-UM)"),
  createData("", "", "Zone 4 : 50.99 N-UM (509.99 A-UM)"),
  createData("", "", "Zone 5: 86.39 N-UM (863.99 A-UM)"),
  createData("", "", "Thuraya & Satellite : 225 N-UM (2250A-UM)"),
  createData("6", "SMS vers le r??seau Chinguitel", "2 N-UM (20 A-UM)"),
  createData("7", "SMS vers les r??seaux nationaux", "2 N-UM (20 A-UM)"),
  createData(
    "8",
    "	SMS vers les r??seaux internationaux",
    "7.08 N-UM (70.8 A-UM)"
  ),
];

const rows77 = [
  createData6("De 10 ?? 29.9 UM", "4 N-UM"),
  createData6("De 30 ?? 99.9 UM", "7 N-UM"),
  createData6("De100 ?? 199.9 UM", "13 N-UM"),
  createData6("De 200 ?? 499.9 UM", "25 N-UM"),
  createData6("De 500 ?? 999.9 UM", "55 N-UM"),
  createData6("1000 N-UM et plus", "100 N-UM"),
];

const rows88 = [
  createData("Renvoi s'il n'y a pas de r??ponse", "*61*N??#	", "#61##"),
  createData("Renvoi si la ligne est occup??e", "*67*N??#", "#67##"),
  createData("Tous les cas de figures	", "*21*N??#", "#21##"),
  createData("Renvoi d'appel s'il est difficile d???appeler", "*62*N??#", "#62##"),
];

const rows99 = [
  createData6(
    "R??duction sur le tarif du groupe",
    "Il r??pond aux besoins des entreprises qui emploient moins de 15 personnes. Elles b??n??ficient d???une r??duction de 20% sur les tarifs des appels"
  ),
  createData6(
    "Ouvert dans le groupe",
    "Si le nombre d???employ??s est sup??rieur ?? 15, la facturation est mensuelle pour chaque employ?? du groupe en contrepartie des appels illimit??s pendant 30 jours. "
  ),
];

const rows001 = [
  createData7("Automatique", "", "1.25 N-UM (12.5 A-UM)", "Internet du cr??dit"),
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
  createData6("SMS illimit??s", "118 N-UM (1180 A-UM)"),
];
const rows005 = [createData6("200 N-UM (2000 A-UM)", "15 N-UM (150 A-UM)")];

export default function About({ menu1, setMenu1 }) {
  const { user, setUser } = useContext(AuthContext);
  const [render, setRender] = useState(0);

  const [sellPoint, setSellPoint] = useState("");
  const [cities, setCities] = useState("");
  const [currentData, setCurrentData] = useState(0);

  const Router = useRouter();

  const dataList = [
    {
      index: 0,
      label: "Mot du Directeur G??n??ral",
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
      <Head>
        <title> Qui sommes-nous?</title>
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
                Bienvenue ?? Chinguitel, le meilleur espace de t??l??communications
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
                          Bienvenue ?? Chinguitel, le meilleur espace de
                          t??l??communications
                        </SmallText>
                        <SmallText>
                          Nous sommes heureux de vous souhaiter la bienvenue
                          dans le site WEB de l???entreprise Chinguitel. Ce site
                          repr??sente pour nous un portail d?????changes avec nos
                          abonn??s, une passerelle nous permettant d?????tre
                          constamment ?? leur ??coute afin de nous hisser au
                          niveau de leurs aspirations pour leur fournir les
                          services de grande qualit?? que procurent les progr??s
                          sans cesse renouvel??s des technologies de
                          t??l??communications.
                        </SmallText>
                        <SmallText>
                          Aussi, cet espace nous permet-il de pr??senter les
                          offres all??chantes que propose notre entreprise ainsi
                          que les nouvelles opportunit??s offertes dans le cadre
                          de l???extension de nos services et de leur
                          diversification. Autre avantage et non des moindres,
                          ce portail nous offre, en plus, l???opportunit?? de
                          renforcer la dimension sociale de nos programmes
                          ??conomiques et de mat??rialiser la pertinence du
                          contrat, sans nul autre pareil, qui nous lie ?? la
                          soci??t?? mauritanienne.
                        </SmallText>
                        <SmallText>
                          Un coup d?????il rapide sur l'??volution de cette soci??t??,
                          montre un accroissement exponentiel de ses services et
                          une remarquable extension de sa pr??sence sur le sol
                          national. Le tout est naturellement confort?? de
                          nombreux succ??s engrang??s en un temps record et qui
                          sont le fruit des efforts d'innovation visant le
                          d??veloppement soutenu qui reste le vrai credo de
                          Chinguitel.
                        </SmallText>
                        <SmallText>
                          En effet, forte de cette appellation, qui illustre son
                          profond ancrage dans l'espace mauritanien, Chinguitel
                          est demeur??e fid??le ?? ses relations et ?? ses
                          engagements envers la Mauritanie ?? laquelle elle est,
                          avant tout, li??e par une charge affective venant en
                          appui ?? la dimension investissement de son action.
                        </SmallText>
                        <SmallText>
                          Oui, depuis sa cr??ation - et en d??pit de son relatif
                          jeune ??ge- Chinguitel a tenu ?? impacter positivement
                          le march?? national mauritanien ?? travers la
                          construction et le fonctionnement d???un vaste r??seau
                          d???infrastructures modernes de t??l??com, ?? travers
                          l???investissement pour acqu??rir les technologies de
                          pointe dans ce domaine et la mise ?? la disposition du
                          client d???une gamme vari??e d???applications exclusives et
                          de services innovants.
                        </SmallText>
                        <SmallText>
                          En plus de ces consid??rables acquis, Chinguitel veille
                          ?? l'am??lioration continuelle de ses performances aux
                          niveaux technique, administratif et op??rationnel afin
                          qu'elle puisse tenir le pari d'accompagner le rythme
                          du progr??s technologique et continuer ?? fournir des
                          services d'un niveau n'ayant rien ?? envier ?? ceux des
                          plus grands op??rateurs de t??l??phonie.
                        </SmallText>
                        <SmallText>
                          Aujourd???hui, notre entreprise est fi??re du
                          d??veloppement quantitatif et qualitatif de ses
                          r??alisations, de l'accroissement constant de ses
                          partenaires, de celui de ses clients, de la fid??lit??
                          des abonn??s, de sa capacit?? ?? se mettre ?? l'??coute de
                          ses usagers, d???identifier leurs besoins et r??pondre
                          efficacement ?? leur attente.
                        </SmallText>
                        <SmallText>
                          Partenaire cl?? de la soci??t?? mauritanienne, Chinguitel
                          continuera d?????uvrer sans r??serve ?? faire face ?? toutes
                          ses responsabilit??s, en particulier le domaine social.
                          C'est pour cela que, par le biais de ses initiatives
                          et projets ??conomiques, sociaux et culturels, elle
                          tient constamment ?? d??velopper un impact positif sur
                          la vie du peuple mauritanien. Cette responsabilit??
                          sociale envers les populations tient en bonne place
                          dans la mission que nous nous assignons et qui est la
                          pierre angulaire des objectifs qui sont les n??tres.
                        </SmallText>
                        <SmallText>
                          Avec votre appui, Chinguitel poursuivra r??solument la
                          mise en ??uvre de sa strat??gie visant le d??veloppement
                          d???une innovante et solide entreprise de communications
                          num??riques, qui soit au service des communaut??s
                          auxquelles elle propose les meilleurs services ainsi
                          que l???acc??s ?? un environnement int??gr?? de
                          t??l??communications de grande qualit??.
                        </SmallText>
                        <SmallText>
                          Avec vous et pour vous, nous veillerons sans cesse ??
                          l???am??lioration de la qualit?? de nos services, nous
                          nous appliquerons ?? garantir l???acc??s du march??
                          mauritanien aux meilleures solutions num??riques et
                          nous tiendrons ?? favoriser notre client??le par
                          l???acquisition d?????quipements et programmes de derni??re
                          g??n??ration.
                        </SmallText>
                        <SmallText heading>
                          Notre souci, ?? Chinguitel, est de toujours rester ??
                          l???avant-garde.
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
                          L???entreprise Chinguitel a ??t?? cr????e en 2006 avec un
                          capital de 2.7 milliards N-UM, qui a atteint
                          derni??rement les 24,921 milliard N-UM. L???entreprise
                          poss??de deux licences : La licence N??6 sp??cifique pour
                          le r??seau pour t??l??phone mobile de la deuxi??me
                          g??n??ration. Cette licence couvre la p??riode du 26
                          Juillet 2006 au 27 Juin 2021 pour 26,6 milliards N-UM.
                        </SmallText>
                        <SmallText>
                          Pour ce qui est de la deuxi??me, c???est la licence N??7
                          qui est sp??cifique au r??seau de la troisi??me
                          g??n??ration de communication internationale, d???Internet
                          et du bouquet des cartes pr??pay??es. Elle couvre la
                          p??riode du 26 Juillet 2006 au 27 Juin 2021 pour 900
                          million N-UM.
                        </SmallText>
                        <SmallText>
                          Depuis le lancement de Chinguitel, les diff??rentes
                          parties de l???entreprise travaillent s??rieusement et
                          avec cr??ativit?? pour rendre tous les services
                          accessibles aux citoyens. Elle offre un service
                          Internet mobile pour la premi??re fois en Mauritanie ??
                          grande ??chelle, ainsi que des services de
                          communication ?? travers les m??thodes classiques dans
                          diff??rentes zones mauritaniennes en valorisant la
                          langue arabe comme une langue principale similaire ??
                          la langue fran??aise. Et pour une premi??re fois,
                          l???abonn?? arabe b??n??ficie des m??mes avantages que son
                          vis-??-vis francophone. L???entreprise a retenu la
                          seconde comme ??tant une unit?? de facturation unifi??e
                          pour tous les r??seaux..
                        </SmallText>
                        <SmallText>
                          Tout au long des derni??res d??cennies, la direction
                          ex??cutive a suivi des strat??gies visant ?? d??velopper
                          le fonctionnement de l???entreprise et la valoriser sa
                          mission au service des clients mauritaniens afin de
                          rehausser la qualit?? des prestations qui leur sont
                          fournies. Ces strat??gies ont vis?? aussi le
                          d??veloppement du r??seau et le lancement de deux
                          marques commerciales exclusives Zaki et Mauritani.
                        </SmallText>
                        <SmallText>
                          Chinguitel poursuit toujours ses interventions dans le
                          domaine du d??veloppement social. Elle a r??alis?? des
                          actions consid??rables en aidant les plus d??munis et en
                          proc??dant ?? la distribution de paniers Ramadan.
                          L???entreprise a aussi soutenu et organis?? diff??rentes
                          activit??s dans les domaines de la culture, de
                          l?????ducation, de la sant?? et du sport. Dans le domaine
                          du travail, Chinguitel a offert des milliers
                          d???opportunit??s d???emploi directs et indirectes ??
                          travers sa participation ?? l?????conomie mauritanienne et
                          sa participation ?? la qualification professionnelle de
                          jeunes Mauritaniens.
                        </SmallText>
                        <SmallText bold>
                          On tient, en particulier, ?? pr??senter les projets que
                          Chinguitel a r??alis??s durant les derni??res d??cennies :
                        </SmallText>

                        <ul>
                          <SmallList>
                            La couverture des axes routiers nationaux par son
                            propre service de t??l??communication{" "}
                          </SmallList>
                          <SmallList>
                            L???extension de la couverture Internet{" "}
                          </SmallList>
                          <SmallList>
                            Le d??veloppement de la dynamique des march??s de
                            communication ?? travers l???offre de services de
                            diff??rentes formes technologiques.
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
