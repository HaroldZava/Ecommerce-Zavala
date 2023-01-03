import "./navbar.css";

function NavBar() {
    return (
        <nav>
            <ul className="nav-menu">
                <h2>
                    <li>
                        <a href="/">Perrito Pituco</a>
                    </li>
                </h2>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Collar
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Pechera
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Arnes
                    </a>
                </li>

                {/* <CartWidget/> */}
                <span>🛒</span>
            </ul>
        </nav>  
    );
}

export default NavBar;

