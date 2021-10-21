// Assets
import styles from "../styles/Bar.module.scss";

const Bar = (props) => {
  return (
    <div className="bar w-full flex">
      <div
        className={`${styles.bar_item} ${
          props.userCompleted && styles.completed
        } w-1/3 flex flex-col items-center text-center`}
      >
        <div className={styles.icon}>
          <div className={`${styles.line} ${styles.line_left}`}></div>
          <i className="ri-user-line bg-white text-black p-2 rounded"></i>
          <div className={`${styles.line} ${styles.line_right}`}></div>
        </div>
        <p className="text-xs mt-2">Account Setup</p>
      </div>
      <div
        className={`${styles.bar_item} ${
          props.socialCompleted && styles.completed
        } w-1/3 flex flex-col items-center text-center`}
      >
        <div className={styles.icon}>
          <div className={`${styles.line} ${styles.line_left}`}></div>
          <i className="ri-earth-line bg-white text-black p-2 rounded"></i>
          <div className={`${styles.line} ${styles.line_right}`}></div>
        </div>
        <p className="text-xs mt-2">Social Networks</p>
      </div>
      <div
        className={`${styles.bar_item} ${
          props.personalCompleted && styles.completed
        } w-1/3 flex flex-col items-center text-center`}
      >
        <div className={styles.icon}>
          <div className={`${styles.line} ${styles.line_left}`}></div>
          <i className="ri-briefcase-5-line bg-white text-black p-2 rounded"></i>
          <div className={`${styles.line} ${styles.line_right}`}></div>
        </div>
        <p className="text-xs mt-2">Personal Details</p>
      </div>
    </div>
  );
};

export default Bar;
