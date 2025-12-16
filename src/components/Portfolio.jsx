import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
      <div className={styles.spisok}>
          <h1>Список хотелок на нг</h1>
          <ul className="ul2">
              <li className="li2">Булгари</li>
              <li className="li2">Луи Витон</li>
              <li className="li2">Картье</li>
              <li className="li2">Шоколадку</li>
              <li className="li2">Косметику</li>
              <li className="li2">Приору 2</li>
              <li className="li2">Ладу гранту</li>
              <li className="li2">Порш Тайкан</li>
              <li className="li2">Двенашка</li>
              <li className="li2">В Кувандык</li>
              <li className="li2">Новый год</li>
              <li className="li2">Сессия на 5 строго</li>
              <li className="li2">Диплом на 6 строгоо</li>
              <li className="li2">Кс Го</li>
          </ul>
   </div>
  );
}

export default Portfolio;
