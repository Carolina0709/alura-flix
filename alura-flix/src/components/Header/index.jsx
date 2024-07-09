import Button from "../Button";
import styles from "./Header.module.css";


function Header(){
    return(
        <header className={styles.header}>
            <a href="/">
                <img src="/img/logo.png" />
            </a>
        
            <div>
                <Button icon="bi-plus-square" primaryColor="#03122F" textColor="#2271D1">Categoría</Button>
                <Button icon="bi-plus-square" primaryColor="#03122F" textColor="#ffffff">Video</Button>
            </div>
   
        </header>
        
    )

}

export default Header;