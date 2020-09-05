import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/index.css";

import Features from "../comps/Features";
import Blog from "../comps/Blog";
import Newsletter from "../comps/Newsletter";
import Price from "../comps/Price";
import Details from "../comps/Details";
import Testimonials from "../comps/Testimonials";

import Wrapper from "../components/Wrapper";

import LeftNav from "../components/nav/Left";

import Link from "next/link";
import Layout from "../views/Layout";

import { MENU, PAGE, STATIC_PAGES, POSTS, query } from "data/Contentful";

export async function getStaticProps({ params }) {
  return {
    props: {
      posts: [],
      sections: [],
      page: {},
      menu: {},
    },
  };
}

export default function Home(props) {
  const router = useRouter();

  const [showRegister, setShowRegister] = React.useState(false);

  return (
    <Layout>
      <Features />

      <Details />
      <Price />
      <Blog />

      <Testimonials />

      <div className="container mx-auto my-14"></div>
    </Layout>
  );
}
