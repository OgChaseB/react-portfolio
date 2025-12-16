import React, { useState } from "react";
import styles from "./About.module.css";

function About() {
  const [showExtraInfo, setShowExtraInfo] = useState(false);

  return (
    <div className={styles.spisok}>
      <h1>Информация о себе</h1>

      <div className={styles.extraSection}>
        <h2 className={styles.infoTitle}>
          Дополнительная информация
          <button
            className={styles.infoToggle}
            onClick={() => setShowExtraInfo(!showExtraInfo)}
          >
            {showExtraInfo ? "−" : "+"}
          </button>
        </h2>

        {showExtraInfo && (
          <div className={styles.infoContent}>
            <p>
            мямямямямямяямямямямямямямямямямямямямямямям
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Лет опыта</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Проектов</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Навыков</span>
              </div>
            </div>

            <div className={styles.skills}>
              <h3>Мои навыки:</h3>
              <ul className={styles.skillsList}>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>Git</li>
                <li>Адаптивная верстка</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {!showExtraInfo && (
        <p className={styles.prompt}>
          Нажмите на кнопку "+", чтобы увидеть больше информации
        </p>
      )}
    </div>
  );
}

export default About;
