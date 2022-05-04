import type { ReactNode } from "react";
import Head from "next/head";
import {classNames} from '../../helpers/index';
import Header from './Header';
import Footer from './Footer';
import Script from 'next/script';

interface LayoutProps {
  meta?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const pageLoaded = (loader) => {
  clearInterval(loader)
  document.getElementsByClassName("loading")[0].classList.remove('opacity-100');
  document.getElementsByClassName("loading")[0].classList.add('hidden');
  document.getElementsByClassName("main-load")[0].classList.remove('opacity-0');
}

const checkImagesLoaded = (loader) => {
  var imgs = document.images,
            len = imgs.length,
            countImages = 0;

  [].forEach.call( imgs, function( img ) {
      if(img.complete)
        incrementCounter();
      else
        img.addEventListener( 'load', incrementCounter, false );
  } );

  function incrementCounter() {
    countImages++;
    if(countImages === len ) {
      console.log( 'All images loaded!' );
      pageLoaded(loader);
    }else{
      document.getElementById("percentLoaded").innerHTML="("+Math.floor(countImages/len*100)+"%"+")";
    }
  }
}

const scripts = () => {
  return <>
    <Script
      id="stripe-js"
      src="https://js.stripe.com/v3/"
      onLoad={() => {
        let counter = 0;
        let loader = setInterval(function(){
          if(counter>2){
            counter=0;
            document.getElementsByClassName('dots')[0].innerHTML = "";
          }else{
            document.getElementsByClassName('dots')[0].innerHTML+=".";
            counter++;
          }
        },1000);

        checkImagesLoaded(loader);

        // if(document.readyState === 'complete') {
        //   pageLoaded(loader);
        // } else {
        //   document.onreadystatechange = function () {
        //     if (document.readyState == "complete") {
        //       pageLoaded(loader);
        //     }
        //   }
        // }
      }}
    />
  </>;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <div className={classNames( 'antialiased w-full flex flex-col !bg-background text-white',props.className)}>
        <div className="absolute bottom-0 right-0 left-0 top-0 transitions-all duration-500 loading opacity-100 z-50">
            <div className="h-screen flex justify-center items-center">Loading<span id="percentLoaded"></span><span className="dots"></span></div>
        </div>
        <div className="transitions-all duration-1000 main-load opacity-0">
          {props.meta}
          {typeof props.header !== 'undefined' ? props.header : <Header />}
          <div className="flex-grow">{props.children}</div>
          {typeof props.footer !== 'undefined' ? props.footer : <Footer />}
        </div>
      </div>
      {scripts()}
    </>
  );
}
