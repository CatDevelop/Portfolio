import s from "./NavBar1.module.css";
import {Link} from "react-router-dom";
import Logo1 from "../../assets/img/Catik2.svg"
import GitHubLogo from "../../assets/img/GitHub.svg"


function NavBar() {
    return (
        <header className={s.navbar}>
            <nav className={s.navbarContainer}>
                <Link className={s.homeLink} to="/">
                    <div className={s.navbarLogo}><img src={Logo1} alt={"logo"}/></div>
                </Link>
                <button type="button" className={s.navbarToggle} id="navbar-toggle" aria-controls="navbar-menu"
                        aria-label="Toggle menu"
                        aria-expanded="false">
                    <span className={s.iconBar}></span>
                    <span className={s.iconBar}></span>
                    <span className={s.iconBar}></span>
                </button>

                <div id="navbar-menu" aria-labelledby="navbar-toggle">
                    <ul className={s.navbarLinks}>
                        <>
                            <li className={s.navbarItem}>
                                <Link className={s.navbarLink} to="/">
                                    Главная
                                </Link>
                            </li>
                            <li className={s.navbarItem}>
                                <Link className={s.navbarLink} to="works">
                                    Проекты
                                </Link>
                            </li>
                        </>
                    </ul>
                </div>

                <div id="navbar-menu" aria-labelledby="navbar-toggle" className={s.navbarLastContainer}>
                    <ul className={s.navbarLinks}>
                        <li className={s.navbarItem}>
                            <Link className={s.navbarLink} to="https://github.com/CatDevelop" target="_blank">
                                <img src={GitHubLogo} alt="GitHub"/>
                                GitHub
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>)
}

export default NavBar;
