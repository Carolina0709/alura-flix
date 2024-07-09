import TitleCategory from "../TitleCategory";
import styles from "./Banner.module.css";

function Banner(){
    return(
        <div className={styles.banner}>
            <div className="container d-md-flex">
                <div className="container">
                    <TitleCategory backgroundColor="green" >Front End</TitleCategory>
                    <h2></h2>

                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Banner;