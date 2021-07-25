import { classNames } from "../../utils";
import { WithClassName } from "../../utils/types";
import styles from "./Logo.module.scss";

const Logo: React.FC<WithClassName> = ({ className }) => {
  return (
    <div
      className={classNames([styles.container, className])}
      data-testid="logo"
    >
      <h1 className={styles.text} aria-label="Ben Littleton">
        BL
      </h1>
    </div>
  );
};

export default Logo;
