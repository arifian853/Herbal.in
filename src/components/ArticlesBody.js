import React from "react";
import PropTypes from "prop-types";
import ArticleItem from "./ArticleItem";

function ArticlesBody({ articles, onDelete }){
    return (
        <div className="article-body">
            <p>Silahkan dibaca untuk menambah pengetahuan terkait peran dan manfaat obat-obatan herbal</p>

            {
                articles.map((article) => (
                    <ArticleItem key={article.id} id={article.id} article_title={article.article_title} article_image={article.article_image} createdAt={article.createdAt} article_description={article.article_description} article_author={article.article_author}   onDelete={onDelete} />
                ))
            },
        
        </div>
    )
}

ArticlesBody.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object),
}

export default ArticlesBody;