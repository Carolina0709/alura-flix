import styles from "./Footer.module.css";

function Footer(){
    return(
        <footer className={styles.footer}>
            <img src="/img/logo.png" alt="" />
            <div>
                <i className="bi bi-c-circle"></i>
                <p>Elaborado por: <span>Carolina González</span></p>
            </div>
        </footer>
    )

}

export default Footer;