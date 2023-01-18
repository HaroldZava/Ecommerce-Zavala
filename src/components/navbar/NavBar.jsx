import "./navbar.css";

function NavBar() {
    return (
        <nav>
            <ul className="nav-menu">
                <h2>
                    <li>
                        <Link to="/">Perrito Pituco</Link>
                    </li>
                </h2>
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Collar
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Pechera
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Arnes
                    </Link>
                </li>

                {/* <CartWidget/> */}
                <span>🛒</span>
            </ul>
        </nav>  
    );
}

export default NavBar;

