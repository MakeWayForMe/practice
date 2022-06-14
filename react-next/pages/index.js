import Link from "next/link";
import Seo from "../components/Seo";


const Home = ({results}) => {
    return (
        <div className="yam">
            <Seo title="홈" />
            {results?.map((mv) => (
                <Link href={`/movies/${mv.title}/${mv.id}`} key={mv.id}>
                    <a>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${mv.poster_path}`} />
                        <h3>{mv.title}</h3>
                    </div>
                    </a>
                </Link>
            ))}
            <style jsx>{`
                .yam {display:flex;flex-wrap:wrap;margin-top:30px;}
                .yam a {width:15%;font-size:10px;text-align:center;margin-right:2%;color:inherit;text-decoration:none;margin-bottom:10px;}
                .yam a:nth-child(6n) {margin-right:0;}
                .yam div{display:flex;flex-direction:column;justify-content:space-between;}
                .yam div img{transition:0.2s ease-in-out;border-radius:20px;height:200px;object-fit:cover;}
                .yam div:hover img{transform:scale(1.1);}
                .yam div h3{text-overflow:ellipsis;overflow:hidden;white-space: nowrap;}
            `}</style>
        </div>
    );
};

export default Home;

export async function getServerSideProps() {
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props: {
            results,
        },
    };
};