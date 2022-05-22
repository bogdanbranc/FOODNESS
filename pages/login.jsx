import styles from "../styles/Login.module.css";
import Image from "next/image";

const Login = () => {
    return (
      <div className={styles.body}>
          <div className={styles.signin_form}>
              <h1>Conectare</h1>
              <form>
                 <input type="email" className={styles.input_box} required placeholder="Adresa de e-mail"/>
                 <input type="password" className={styles.input_box} required placeholder="Parola"/>
                 <a href="/forget_pass">Ai uitat parola?</a>
                 <br></br>
                 <br></br>
                 <span><input type="checkbox" required/></span><a href="#" className={styles.exclam}>Sunt de acord cu termenii si conditiile(click) </a>
                 <button type="button" className={styles.signin_button}>Conectare</button>
                 <p>Nu ai inca cont? <a href="/register">Inregistreaza-te</a></p>
                 <hr/>
                 <p className={styles.or}>SAU</p>
                 <button type="button" className={styles.signin_button_facebook}>
                   <Image className={styles.icon} src="/img/facebook.png" width="25" height="25" />Continua cu Facebook
                 </button>
                 <button type="button" className={styles.signin_button_google}>
                   <Image src="/img/google.png" width="25" height="25" />Continua cu Google
                 </button>
              </form>
          </div>
      </div>
    )
}

export default Login;