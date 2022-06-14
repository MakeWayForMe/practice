import Head from "next/head";

const Seo = ({title}) => {
    return (
        <Head>
            <title>{title} | 영화정보</title>
        </Head>
    );
};

export default Seo;