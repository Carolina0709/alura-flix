import styles from "./Button.module.css";

function Button({children, icon, primaryColor, textColor}){

    const buttonColors = {
        '--primary-color': primaryColor,
        '--text-color': textColor,
    }

    return(
        <button type="button" className={`btn btn-primary ${styles.button}`} style={buttonColors}>
            {icon ? <i className={`bi ${icon}`}></i> : <></> }
            {children}
        </button>
    )
}

export default Button;