import React from "react";
import ArticlesBody from "../components/ArticlesBody";
import { getArticles } from "../utils/api_articles"; 
import { FiBookOpen } from "react-icons/fi" ;


function ArticlesPage(){
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


    if(loading){
        return (
            <div className="loading-element">
                <p>Loading ...</p>
            </div>
        )
    }

    return (
        <div className="article-page">
            <h1><FiBookOpen></FiBookOpen> Here's some Health Articles for you</h1>
            <ArticlesBody articles={articles} />
            
        
        </div>
    )
}

export default ArticlesPage;