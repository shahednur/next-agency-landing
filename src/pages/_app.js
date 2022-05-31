import { useEffect } from 'react'
import Router from 'next/router'
import { initGA, logPageView } from '../analytics'
import 'swiper/css/bundle';
import "rc-drawer/assets/index.css";
import 'react-modal-video/css/modal-video.min.css';
import "typeface-dm-sans"

function MyApp({ Component, pageProps }) {
  useEffect(() => {

    initGA()
    logPageView()

    Router.events.on('routeChangeComplete', logPageView)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
