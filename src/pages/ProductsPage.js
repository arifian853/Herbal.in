import React from "react";
import HerbalinMainProd from "../components/HerbalinMainProd";
import ProductList from "../components/ProductList";
import { useSearchParams } from "react-router-dom";
import { getAllProducts } from "../utils/api_products";

function ProductsPage(){
    const [loading, setLoading] = React.useState(true);
    const [products, setProducts] = React.useState([]);
   
    
    const [searchParams, setSearchParams ] = useSearchParams();
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    })

    const [ selectedFilter, setSelectedFilter ] = React.useState();


    React.useEffect(() => {
        getAllProducts().then(({ data }) => {
            setProducts(data);
            setLoading(false);
        
        });

        return () => {
            setLoading(true);
        }
    }, []);

    
  



    // belum selesai
    async function onAddToCart(){

    }


    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    function onSelectedFilterHandler(selectedFilter){
        setSelectedFilter(selectedFilter);

    }

    const searchProducts = products.filter((product) => product.product_name.toLowerCase().includes(keyword.toLowerCase())); 
    const ctgFilteredProducts = products.filter((product) => product.product_ctg === selectedFilter);
    const searchFilteredProducts = ctgFilteredProducts.filter((product) => product.product_name.toLowerCase().includes(keyword.toLowerCase())); 


    
    if(loading){
        return (
            <div className="loading-element">
                <p>Loading ...</p>
            </div>
        )
    }


    return (


        <div>
           <HerbalinMainProd keyword={keyword} keywordChange={onKeywordChangeHandler} selectedFilter={selectedFilter} setSelectedFilter={onSelectedFilterHandler}/>

           {searchFilteredProducts.length > 0 ? <ProductList products={searchFilteredProducts} addToCart={onAddToCart} isProductAdded={products.isProductAdded} /> :

           <ProductList products={searchProducts} addToCart={onAddToCart} isProductAdded={products.isProductAdded} />
           
           }
            
        </div>
    )
}

export default ProductsPage;