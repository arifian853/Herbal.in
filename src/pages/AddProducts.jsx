import React from "react";
import { useNavigate } from "react-router-dom";
import ProductInput from "../components/ProductInput";
import { addArticle } from "../utils/api_articles";

function AddProducts(){
    const navigate = useNavigate();

    async function onAddArticleHandler(article){
        await addArticle(article);
        navigate('/admin-herbalin-artikel-edit');
    }

    return (
        <div className="add-article">
            <div className="add-article-input-wrapper">
                <h2>Tambah Artikel</h2>
                <ProductInput addArticle={onAddArticleHandler} />
            </div>
        </div>
    )
}

export default AddProducts;