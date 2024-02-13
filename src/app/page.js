import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import { Html, Head, Main, NextScript } from "next/document"

export default function Home() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="assets/vendor_assets/css/bootstrap/bootstrap.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/daterangepicker.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/fontawesome.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/footable.standalone.min.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/fullcalendar@5.2.0.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/jquery-jvectormap-2.0.5.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/jquery.mCustomScrollbar.min.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/leaflet.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/line-awesome.min.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/MarkerCluster.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/MarkerCluster.Default.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/select2.min.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/slick.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/star-rating-svg.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/trumbowyg.min.css" />
        <link rel="stylesheet" href="assets/vendor_assets/css/wickedpicker.min.css" />
        <link rel="stylesheet" href="style.css" />
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon.png" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
      </Head>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-12345" />
        <Sidebar />
      </body>
    </Html>
  );
}
