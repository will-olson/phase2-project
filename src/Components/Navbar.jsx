import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar" role="navigation">
      <NavLink to="/" end> Home </NavLink>
      <NavLink to="/BigTech"> Big Tech </NavLink>
      <NavLink to="/IndustryLeaders"> Industry Leaders </NavLink>
      <NavLink to="/Media"> Media </NavLink>
      <NavLink to="/B2BSaaS"> B2B SaaS </NavLink>
      <NavLink to="/MarketingSaaS"> Marketing SaaS </NavLink>
      <NavLink to="/Healthcare"> Healthcare </NavLink>
      <NavLink to="/Fintech"> Fintech </NavLink>
      <NavLink to="/Finance"> Finance </NavLink>
      <NavLink to="/AI"> AI </NavLink>
      <NavLink to="/CommunitySubmissions"> Community Submissions </NavLink>
      <NavLink to="/Favorited"> Favorited </NavLink>

    </nav>
  );
}

export default NavBar;