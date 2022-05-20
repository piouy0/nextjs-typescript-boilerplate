import React from "react";
import { AppProps } from "next/app";

import "../css/reset.css";
import "../css/global.css";

function Boilerplate({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Boilerplate
