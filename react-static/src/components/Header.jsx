export default function Header() {
  return (
    <header className="header">
      <img className="logo" src="src/imgs/react-logo.png" alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li className="li-hor"> Pricing </li>
          <li className="li-hor"> About </li>
          <li className="li-hor"> Contact </li>
        </ul>
      </nav>
    </header>
  );
}
