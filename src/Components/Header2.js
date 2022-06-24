import { Link } from "react-router-dom";
function Header2(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/">Home</Link></li>
                                <li><Link className="dropdown-item" to="/">Back</Link></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                    <a class="btn btn-primary" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header2;