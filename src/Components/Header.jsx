import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";

function Header({goHome, goCars, goAbout, goContacts}){
return(
<nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3 text-info brand-logo" href="#" onClick={goHome}>
          <span>AutoDrive</span>
          <FontAwesomeIcon icon={faCarSide} className="brand-car"></FontAwesomeIcon>
          </a>
        <button className="navbar-toggler"
         type="button"
         data-bs-toggle='collapse'
         data-bs-target='#mainNavbar'
         aria-expanded='false'
         arial-label='Toggle navigation'>
          <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto gap-lg-3">
            <li className="nav-item">
              <a className="nav-link active" href="#" onClick={goHome}>
                Головна
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={goCars}>
                Автомобілі
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={goAbout}>Про нас</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={goContacts}>Контакти</a>
            </li>
          </ul>
         </div>
      </div>
    </nav>
    )
}

export default Header;