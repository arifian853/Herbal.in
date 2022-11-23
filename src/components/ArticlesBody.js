import React from "react";
import PropTypes from "prop-types";
import ArticleItem from "./ArticleItem";

function ArticlesBody({ articles }){
    return (
        <div className="article-body">
            <p>Read some articles below to expand your knowledge</p>

            {
                articles.map((article) => (
                    <ArticleItem key={article.id} id={article.id} article_title={article.article_title} article_image={article.article_image} createdAt={article.createdAt} article_description={article.article_description} />
                ))
            }
        
        </div>
    )

}

ArticlesBody.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ArticlesBody;