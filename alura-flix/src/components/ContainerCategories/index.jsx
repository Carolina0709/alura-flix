import { useContext } from "react";
import Category from "../Category";
import { CategoryContext } from "../../context/categories";

function ContainerCategories(){

    const categories = useContext(CategoryContext);

    if(categories.length === 0){
        return(
            <div>No hay videos en esta categoría</div>
        )
    }

    return(
        <>
        {
            categories.map((category) => <Category key={category.id} name={category.name} backgroundColor={category.background} />)
        }
        </>
    )
}

export default ContainerCategories;