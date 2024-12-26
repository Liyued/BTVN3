import styles from "./LoginOptions.module.css";

function LoginOption(props) {
  return (
    <button className={styles.option}>
      <img src={props.img} alt={props.option} />
      <p className="login-option-button">Sign in with {props.option}</p>
    </button>
  );
}

function LoginOptions() {
  return (
    <div className={styles.container}>
      <LoginOption img="src/assets/google.jpg" option="Google" />
      <LoginOption img="src/assets/apple.jpg" option="Apple" />
    </div>
  );
}

export default LoginOptions;
