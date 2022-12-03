import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/api_articles";

function ArticleItem({ id, createdAt, article_title, article_image, article_description, onDelete }){
    return (
        <div className="article-item__content">
            <img src={article_image} alt={article_title} className="article-item__image" />

            <div className="article-item__spec">
                <p className="article-item__title">{article_title}</p>
                <p className="article-item__createdAt">{showFormattedDate(createdAt)}</p>
                <hr />
                <p className="article-item__description">{article_description}</p>
                <p className="article-item__readMoreUrl"><Link to={`/articles/${id}`}>Read More</Link></p>
                <button className="article-delete-button" id={id} onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

ArticleItem.propTypes = {
    id: PropTypes.string.isRequired,
    article_title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    article_image: PropTypes.string.isRequired,
    article_description: PropTypes.string.isRequired,
    article_author: PropTypes.string.isRequired
}

export default ArticleItem;