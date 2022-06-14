import Seo from "../../components/Seo";

const Detail = ({params}) => {
    const [title, id] = params || [];
    return (
        <>
            <Seo title={title} />
            <h3>{title}</h3>
        </>
    );
};

export default Detail;

export function getServerSideProps({params:{params}}) {
    console.log(params);
    return {
        props: {
            params,
        },
    };
};