import styles from "./EditForm.module.css";
import Input from "../Input";
import InputSelect from "../InputSelect";
import TextArea from "../TextArea";
import Button from "../Button";
import { CategoryContext } from "../../context/categories";
import { VideoContext } from "../../context/videos";
import { FavoritosContext } from "../../context/favorites";
import { useContext, useState, useEffect } from "react";
import { updateVideo } from '../../api';

const EditForm = ({ modalContent }) => {
    const categories = useContext(CategoryContext);
    const { setVideos } = useContext(VideoContext);
    const { setFavorito } = useContext(FavoritosContext); 

    const [title, setTitle] = useState(modalContent.title || "");
    const [category, setCategory] = useState(modalContent.category || "");
    const [image, setImage] = useState(modalContent.image || "");
    const [video, setVideo] = useState(modalContent.video || "");
    const [description, setDescription] = useState(modalContent.description || "");

    const [editSuccess, setEditSuccess] = useState(false);

    useEffect(() => {
        setTitle(modalContent.title);
        setCategory(modalContent.category);
        setImage(modalContent.image);
        setVideo(modalContent.video);
        setDescription(modalContent.description);
    }, [modalContent]);

    const handleEditVideo = async (e) => {
        e.preventDefault();
        const updatedVideo = {
            ...modalContent,
            title,
            category,
            image,
            video,
            description,
        };

        try {
            const updatedData = await updateVideo(updatedVideo.id, updatedVideo)
            // Actualizar el estado del contexto con el video editado
            setVideos((prevVideos) => 
                prevVideos.map((vid) => (vid.id === updatedData.id ? updatedVideo : vid))
            );
            
            // Actualizar también el estado de los videos favoritos si es necesario
            setFavorito((prevFavoritos) =>
                prevFavoritos.map((fav) => (fav.id === updatedData.id ? updatedVideo : fav))
            );
            
            setEditSuccess(true);
        } catch (error) {
            console.error('Error updating video:', error);
        }
    };

    return (
        <>
            <h2 className={styles.formTitle}>Editar video: </h2>
            <form className={styles.form} onSubmit={handleEditVideo}>
                <Input label="Título" value={title} placeholder="Ingresa el título del video" type="text" required setValue={setTitle}/>
                <InputSelect label="Categoría" value={category} options={categories} required setCategory={setCategory}/>
                <Input label="Imagen" value={image} placeholder="Ingresa el link a la imagen del video" type="text" required setValue={setImage}/>
                <Input label="Video" value={video} placeholder="Ingresa el link al video" type="text" required setValue={setVideo}/>
                <TextArea label="Descripción" value={description} required setValue={setDescription}/>

                {editSuccess && (
                    <p className={styles.successMessage}>¡El video ha sido editado!</p>
                )}

                <Button icon="bi-pencil-fill" primaryColor="#03122F" textColor="#ffffff" type="submit">Editar</Button>

            </form>
        </>
        
    );
};

export default EditForm;