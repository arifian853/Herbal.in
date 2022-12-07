import React from "react";
import { useNavigate } from "react-router-dom";
import ArticleInput from "../components/ArticleInput";
import { addArticle } from "../utils/api_articles";

function AddArticles(){
    const navigate = useNavigate();

    async function onAddArticleHandler(article){
        await addArticle(article);
        navigate('/admin-herbalin-artikel-edit');
    }

    return (
        <div className="add-article">
            <div className="add-article-input-wrapper">
                <h2>Tambah Artikel</h2>
                <ArticleInput addArticle={onAddArticleHandler} />
            </div>
        </div>
    )
}

export default AddArticles;