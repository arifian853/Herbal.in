import React from "react";
import PropTypes from "prop-types";
import ArticlesDetail from "../components/ArticlesDetail";
import { getArticle } from "../utils/api_articles";
import { useParams } from "react-router-dom";

function ArticlesDetailPageWrapper(){
    const { id } = useParams();

    return <ArticlesDetailPage id={id} />;
}

class ArticlesDetailPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            articles: null,
        }
    }

    async componentDidMount(){
        const article = await getArticle(this.props.id);

        this.setState(() => {
            return {
                articles: article.data
            }
        })
    }

    render(){
        if(this.state.articles){
            return (
                <section>
                    <ArticlesDetail {...this.state.articles} />
                </section>
            )
        }

        if(this.state.articles === null){
            return (
                <div className="loading">
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            )
        }
    }
}

ArticlesDetailPage.propTypes = {
    id: PropTypes.string.isRequired
}

export default ArticlesDetailPageWrapper;
