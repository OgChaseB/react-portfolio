import styles from "./Header.module.css";

function Header() {
  return (
    <div className="Header">
      <div className="Header_content">
        <h1>Матвеева и Подрядова</h1>
        <nav>
          <ul>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
