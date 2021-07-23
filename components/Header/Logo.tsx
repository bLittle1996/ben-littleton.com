import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <div className={styles.container} data-testid="logo">
      <h1 className={styles.text} aria-label="Ben Littleton">
        BL
      </h1>
    </div>
  );
};

export default Logo;
