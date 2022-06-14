import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
    const router = useRouter();
    return (
        <nav>
            <Link href="/">
                <a className={router.pathname === "/" && `active`}>홈</a>
            </Link>
            <Link href="/about">
                <a className={router.pathname === "/about" && `active`}>이건머고</a>
            </Link>
            <style jsx>{`
                nav {display:flex;gap:10px;padding-left:50px;margin-top:30px;}
                a {text-decoration:none;font-weight:bold;font-size:20px;color:inherit;}
                .active {color: orange;font-weight: bold;}
            `}</style>
        </nav>
    )
};

export default NavBar;