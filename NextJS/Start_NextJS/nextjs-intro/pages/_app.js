// import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function SeolyuApp({Component, pageProps}) {
    return (
        <Layout>
            {/* <NavBar /> */}
            <Component {...pageProps} />
            <span>hello</span>
            <footer>푸터</footer>
            <style jsx global>{`
                // a {
                //     color: blue;
                //     font-size: 42px;
                // }
            `}</style>
        </Layout>
    );
}