import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";


export function Header() {
  let authenticationLinks;

  if (localStorage.jwt) {
    authenticationLinks = (
      <div>
        <li><LogoutLink className="dropdown-item"/></li>
      </div>
    )
  } else {
    authenticationLinks = (
      <div>
        <li><Link className="dropdown-item" to="/login">Login</Link></li>
        <li><a className="dropdown-item" href="/signup">Sign up</a></li>
      </div>
    )
  }

  return (
<nav className="navbar navbar-expand-lg bg-background-light bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">SportsFC</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/orders/new">Make An Order</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/orders">All Orders</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Authentication
              </a>
              <ul className="dropdown-menu">
              {authenticationLinks}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products/new">Create a Product</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}