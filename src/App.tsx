import styles from './App.module.css';
import poweredImg from './assets/powered.png';

const app =  () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImg} width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          ...
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  );
}

export default app;