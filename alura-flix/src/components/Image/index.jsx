import styles from "./Image.module.css";

function Image({title, src}){
    return (
        <a className={styles.link} href="">
            <img className={styles.image} src={src} alt={title} />
        </a>
    )
}

export default Image;