import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/api_articles";
import { ThemeContext } from "../context/ThemeContext";

const ArticlesDetail = ({ createdAt, article_title, article_image, article_description, article_author }) => {

  const { theme } = React.useContext(ThemeContext);


    return (
        <div className="article-detail" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <img src={article_image} alt={article_title} className="article-page__image" />

            <div className="article-page__content">
                <h1 className="article-title">{article_title}</h1>
                <p className="article-createdAt">{showFormattedDate(createdAt)}</p>
                <p className="article-author">Oleh : {article_author}</p>
                <p className="article-desc">{article_description}</p>

            </div>
        </div>
    )
}

ArticlesDetail.propTypes = {
    createdAt: PropTypes.string.isRequired,
    article_title: PropTypes.string.isRequired,
    article_image: PropTypes.string.isRequired,
    article_description: PropTypes.string.isRequired,
    article_author: PropTypes.string.isRequired
}

export default ArticlesDetail;