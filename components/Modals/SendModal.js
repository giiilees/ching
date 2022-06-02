import React, { useContext, useEffect, useState } from "react";
import InputField from "../InputField";

import authApi from "../../api/auth";
import AuthContext from "../../auth/context";
import MyModal from "../MyModal";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import HeaderApp from "../HeaderApp";
import Link from "next/link";
import Head from "next/head";
import SideModal from "../SideModal";
import Cookies from "js-cookie";
import BeatLoader from "react-spinners/BeatLoader";

function financial(x) {
  return x ? Number.parseFloat(x).toFixed(2) : "0.00";
}

function SendModal({ sendModal, setSendModal, children }) {
  const Router = useRouter();

  return (
    <span>
      <SideModal
        title={"Envoyer"}
        modalVis={sendModal}
        setModalVis={setSendModal}
      >
        {children}
      </SideModal>
    </span>
  );
}

export default SendModal;
