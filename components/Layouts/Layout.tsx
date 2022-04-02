import type { ReactNode } from "react";
import Head from "next/head";
import {classNames} from '../../helpers/index';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  meta?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <div className={classNames( 'antialiased w-full flex flex-col bg-black text-white',props.className)}>
      {props.meta}
      {typeof props.header !== 'undefined' ? props.header : <Header />}
      <div className="flex-grow">{props.children}</div>
      {typeof props.footer !== 'undefined' ? props.footer : <Footer />}
    </div>
    </>
  );
}
