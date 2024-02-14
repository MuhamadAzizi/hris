'use-client';

import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script";
import Link from "next/link";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet" />
                {/* <link href="/assets/vendor_assets/css/bootstrap/bootstrap.css" />
                <link href="/assets/vendor_assets/css/daterangepicker.css" />
                <link href="/assets/vendor_assets/css/fontawesome.css" />
                <link href="/assets/vendor_assets/css/footable.standalone.min.css" />
                <link href="/assets/vendor_assets/css/fullcalendar@5.2.0.css" />
                <link href="/assets/vendor_assets/css/jquery-jvectormap-2.0.5.css" />
                <link href="/assets/vendor_assets/css/jquery.mCustomScrollbar.min.css" />
                <link href="/assets/vendor_assets/css/leaflet.css" />
                <link href="/assets/vendor_assets/css/line-awesome.min.css" />
                <link href="/assets/vendor_assets/css/magnific-popup.css" />
                <link href="/assets/vendor_assets/css/MarkerCluster.css" />
                <link href="/assets/vendor_assets/css/MarkerCluster.Default.css" />
                <link href="/assets/vendor_assets/css/select2.min.css" />
                <link href="/assets/vendor_assets/css/slick.css" />
                <link href="/assets/vendor_assets/css/star-rating-svg.css" />
                <link href="/assets/vendor_assets/css/trumbowyg.min.css" />
                <link href="/assets/vendor_assets/css/wickedpicker.min.css" />
                <link href="/style.css" precedence="default" /> */}
                {/* <link rel="icon" type="image/png" sizes="16x16" href="img/favicon.png" />
                <link href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" /> */}
            </Head>
            <body>
                <Main />
                <NextScript />
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-12345" />
                {/* <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBgYKHZB_QKKLWfIRaYPCadza3nhTAbv7c"></script> */}
                <Script src="/assets/vendor_assets/js/jquery/jquery-3.5.1.min.js" />
                <Script src="/assets/vendor_assets/js/jquery/jquery-ui.js" />
                <Script src="/assets/vendor_assets/js/bootstrap/popper.js" />
                <Script src="/assets/vendor_assets/js/bootstrap/bootstrap.min.js" />
                <Script src="/assets/vendor_assets/js/moment/moment.min.js" />
                <Script src="/assets/vendor_assets/js/accordion.js" />
                <Script src="/assets/vendor_assets/js/apexcharts.min.js" />
                <Script src="/assets/vendor_assets/js/autoComplete.js" />
                <Script src="/assets/vendor_assets/js/Chart.min.js" />
                <Script src="/assets/vendor_assets/js/daterangepicker.js" />
                <Script src="/assets/vendor_assets/js/drawer.js" />
                <Script src="/assets/vendor_assets/js/dynamicBadge.js" />
                <Script src="/assets/vendor_assets/js/dynamicCheckbox.js" />
                <Script src="/assets/vendor_assets/js/footable.min.js" />
                <Script src="/assets/vendor_assets/js/fullcalendar@5.2.0.js" />
                <Script src="/assets/vendor_assets/js/google-chart.js" />
                <Script src="/assets/vendor_assets/js/jquery-jvectormap-2.0.5.min.js" />
                <Script src="/assets/vendor_assets/js/jquery-jvectormap-world-mill-en.js" />
                <Script src="/assets/vendor_assets/js/jquery.countdown.min.js" />
                <Script src="/assets/vendor_assets/js/jquery.filterizr.min.js" />
                <Script src="/assets/vendor_assets/js/jquery.magnific-popup.min.js" />
                <Script src="/assets/vendor_assets/js/jquery.peity.min.js" />
                <Script src="/assets/vendor_assets/js/jquery.star-rating-svg.min.js" />
                <Script src="/assets/vendor_assets/js/leaflet.js" />
                <Script src="/assets/vendor_assets/js/leaflet.markercluster.js" />
                <Script src="/assets/vendor_assets/js/loader.js" />
                <Script src="/assets/vendor_assets/js/message.js" />
                <Script src="/assets/vendor_assets/js/moment.js" />
                <Script src="/assets/vendor_assets/js/muuri.min.js" />
                <Script src="/assets/vendor_assets/js/notification.js" />
                <Script src="/assets/vendor_assets/js/popover.js" />
                <Script src="/assets/vendor_assets/js/select2.full.min.js" />
                <Script src="/assets/vendor_assets/js/slick.min.js" />
                <Script src="/assets/vendor_assets/js/trumbowyg.min.js" />
                <Script src="/assets/vendor_assets/js/wickedpicker.min.js" />
                <Script src="/assets/theme_assets/js/apexmain.js" />
                <Script src="/assets/theme_assets/js/charts.js" />
                <Script src="/assets/theme_assets/js/drag-drop.js" />
                <Script src="/assets/theme_assets/js/footable.js" />
                <Script src="/assets/theme_assets/js/full-calendar.js" />
                <Script src="/assets/theme_assets/js/googlemap-init.js" />
                <Script src="/assets/theme_assets/js/icon-loader.js" />
                <Script src="/assets/theme_assets/js/jvectormap-init.js" />
                <Script src="/assets/theme_assets/js/leaflet-init.js" />
                <Script src="/assets/theme_assets/js/main.js" />
            </body>
        </Html>
    );
}