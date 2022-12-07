import React from "react";
import PropTypes from "prop-types";
import ArticleItemAdmin from "./ArticleItemAdmin";

const ArticlesBodyAdmin = ({ articles, onDelete }) => {
    return (
        <div className="article-body">
            <p>Silahkan dibaca untuk menambah pengetahuan terkait peran dan manfaat obat-obatan herbal</p>

            {
                articles.map((article) => (
                    <ArticleItemAdmin key={article.id} id={article.id} article_title={article.article_title} article_image={article.article_image} createdAt={article.createdAt} article_description={article.article_description} article_author={article.article_author}   onDelete={onDelete} />
                ))
            },
        
        </div>
    )
}

ArticlesBodyAdmin.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object),
}

export default ArticlesBodyAdmin;