import index from '../../pages/index.jsx'
import styles from '../../styles/Login.module.css'
export default function Login() {
    return (
        <div className={styles.container}>
            <div class="form-container sign-in-container">
                <form action="#">

                    <input type="email" placeholder="Email" />
                    <p><input type="password" placeholder="Password" /></p>
                    <a href="#">Esqueceu sua senha?</a>
                    <p><button className={styles.button}>Login</button></p>
                </form>
            </div>
            <div class="overlay-panel overlay-right">
                <h1>Fast Job</h1>
                <p>Aqui começa sua jornada, ofereça vagas ou encontre vagas para você</p>
                <button class="ghost" id="signUp">Registrar</button>
            </div>
        </div>

    )
}
