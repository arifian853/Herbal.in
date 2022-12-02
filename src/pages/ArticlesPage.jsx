import React, { useState, useEffect }from "react";
import ArticlesBody from "../components/ArticlesBody";
import { getArticles } from "../utils/api_articles"; 
import { FiBookOpen } from "react-icons/fi" ;
import { Helmet } from 'react-helmet';

const ArticlesPage = () =>{
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        getArticles().then(({ data }) => {
            setArticles(data);
            setLoading(false);
        });

        return () => {
            setLoading(true);
        }
    }, []);


    if(loading){
        return (
            <div className="loading">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }

    return (
        <div className="article-page">
            <Helmet>
                <title>Herbal.in - Artikel
                    
                </title>
            </Helmet>
            <h1><FiBookOpen></FiBookOpen> Artikel kesehatan untuk anda</h1>
            <ArticlesBody articles={articles} />
        
        </div>
    )
}

export default ArticlesPage;