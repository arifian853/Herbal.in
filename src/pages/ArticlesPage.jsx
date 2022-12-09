import React, { useState, useEffect }from "react";
import ArticlesBody from "../components/ArticlesBody";
import { getArticles } from "../utils/api_articles"; 
import { FiBookOpen } from "react-icons/fi" ;
import { Helmet } from 'react-helmet';
import { Footer } from "../components/Footer";
import { ThemeContext } from "../context/ThemeContext";

const ArticlesPage = () =>{
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    

    const { theme } = React.useContext(ThemeContext);


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

                
                <div className="loading" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div ></div></div>
                </div>

        )
    }

    return (
        <div className="article-page" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <Helmet>
                <title>Herbal.in - Artikel
                    
                </title>
            </Helmet>
            <h1><FiBookOpen></FiBookOpen> Artikel kesehatan untuk anda</h1>
            <ArticlesBody articles={articles} />
            <Footer></Footer>
        </div>
    )
}

export default ArticlesPage;