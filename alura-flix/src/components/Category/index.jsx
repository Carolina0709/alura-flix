import styles from "./Category.module.css";
import Card from "../Card";
import { useContext } from "react";
import { VideoContext } from "../../context/videos";
import TitleCategory from "../TitleCategory";

function Category({ name, backgroundColor }) {
    const { videos } = useContext(VideoContext);

    if (!Array.isArray(videos)) {
        return <div>Cargando videos...</div>;
    }

    const categoryVideos = videos.filter(video => video.category === name);

    if (categoryVideos.length === 0) {
        return <div>No hay videos en esta categoría</div>;
    }

    return (
        <section className={`container my-5 align-items-center align-items-lg-start ${styles.section}`}>
            <TitleCategory backgroundColor={backgroundColor}>{name}</TitleCategory>
            <section className={styles.sectionCards}>
                {categoryVideos.map(video => <Card key={video.id} {...video} backgroundColor={backgroundColor} />)}
            </section>
        </section>
    );
}

export default Category;
