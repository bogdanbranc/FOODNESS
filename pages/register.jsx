import styles from "../styles/Register.module.css"

const Register = () => {
    return (
        <div className={styles.body}>
          <div className={styles.signin_form}>
              <h1>Inregistrare</h1>
              <form>
                 <input type="email" className={styles.input_box} required placeholder="Adresa de e-mail"/>
                 <input type="password" className={styles.input_box} required placeholder="Parola"/>
                 <input type="password" className={styles.input_box} required placeholder="Confirma Parola"/>
                 <br></br>
                 <br></br>
                 <span><input type="checkbox" required/></span><a href="#" className={styles.exclam}>Sunt de acord cu termenii si conditiile(click) </a>
                 <button type="button" className={styles.signup_button}>Inregistreaza</button>
              </form>
          </div>
        </div>
    )
}
export default Register