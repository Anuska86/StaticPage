import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

function Header() {
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

function MainContent() {
  return (
    <main>
      <h1>I am learning React because: </h1>
      <ol>
        <li>There is a lot of demand for work</li>
        <li>Is maintained by Meta</li>
        <li>Is used on thousands of apps</li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small className="footer-small">© 2024 Ana Sappia Rey development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(
  <>
    <Page />
  </>
);
