import React from "react";
import { useNavigate } from "react-router-dom";
import ArticleInput from "../components/ArticleInput";
import { addArticle } from "../utils/api_articles";

function AddArticle(){
    const navigate = useNavigate();

    async function onAddArticleHandler(article){
        await addArticle(article);
        navigate('/articles');
    }

    return (
        <section>
            <h2>Tambah Artikel</h2>
            <ArticleInput addArticle={onAddArticleHandler} />
        </section>
    )
}

export default AddArticle;