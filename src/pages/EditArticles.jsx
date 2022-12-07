import React from "react";
import ArticlesBodyAdmin from "../components/ArticleBodyAdmin";
import { getArticles, deleteArticle } from "../utils/api_articles"; 
import { FiBookOpen } from "react-icons/fi" ;
import { Link } from "react-router-dom";

import { FiPlus } from "react-icons/fi";



const EditArticles = () => {
    const [loading, setLoading] = React.useState(true);
    const [articles, setArticles] = React.useState([]);

    
    React.useEffect(() => {
        getArticles().then(({ data }) => {
            setArticles(data);
            setLoading(false);
        });

        return () => {
            setLoading(true);
        }
    }, []);

    async function onDeleteHandler(id){
        await deleteArticle(id);

        const { data } = await getArticles();
        setArticles(data);
    }

    if(loading){
        return (
            <div className="loading">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }

    return (
        <div className="article-page">
            <h1><FiBookOpen></FiBookOpen> Edit Artikel</h1>
            <ArticlesBodyAdmin articles={articles} onDelete={onDeleteHandler} />
            <Link to="/admin-herbalin-artikel-add"> 
            <div className="article-page-action"><FiPlus className="action" /></div>
    </Link>
        </div>
    )
}

export default EditArticles;