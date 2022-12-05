import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticlesDetailPageWrapper from "./pages/ArticlesDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import { getAllProducts } from "./utils/api_products";
import ProductsPage from "./pages/ProductsPage";
import { useSearchParams } from "react-router-dom";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import AddArticle from "./pages/AddArticle";
import OrderReceivedPage from "./pages/OrderReceivedPage";


function App() {
    const [loading, setLoading] = React.useState(true);
    const [ productItems, setProductItems ] = React.useState([]);
    const [ cartItems, setCartItems ] = React.useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] );
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ keyword, setKeyword ] = React.useState(() => {
        return searchParams.get('keyword') || ''
    })
    const [ selectedFilter, setSelectedFilter ] = React.useState();
    

    React.useEffect(() => {
        getAllProducts().then(({ data }) => {
            setProductItems(data);
            setLoading(false);
        });

        return () => {
            setLoading(true);
        }
    }, []);

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    function onSelectedFilterHandler(selectedFilter){
        setSelectedFilter(selectedFilter);
    }

    function onAddHandler(productItem){
        const productPresent = cartItems.find((cartItem) => cartItem.id === productItem.id);

        if(!productPresent){
             setCartItems([...cartItems, {...productItem, product_qty: 1 }]);
            
        } else {
            setCartItems(cartItems.map((cartItem) => cartItem.id === productItem.id ? {...productPresent, product_qty: productPresent.product_qty + 1} : cartItem));
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }

    function onRemoveHandler(productItem){
        const productPresent = cartItems.find((cartItem) => cartItem.id === productItem.id);
        if(productPresent.product_qty === 1){
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== productItem.id));
        } else {
            setCartItems(cartItems.map((cartItem) => cartItem.id === productItem.id ? {...productPresent, product_qty: productPresent.product_qty - 1} : cartItem )
            )
        }
    }

    function onClearItemHandler(productItem){
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== productItem.id));
    }

    function onClearCartHandler(){
        setCartItems([]);
    }



    return (
       
        <div className="herbalin-app">
               


            <header className="herbalin-app__header">
                <img src="images/leaf.png" alt="logo" className="herbalin-app__header_logo" />
                <p className="herbalin-app__header_title">Herbal.in</p>
                <Navigation cartItems={cartItems} />
                {/* <Navigation logout={this.onLogout} name={this.state.authedUser.name} /> */}
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<HomePage onAddHandler={onAddHandler} />} />
                    <Route path="/articles" element={<ArticlesPage />} />
                    <Route path="/articles/:id" element={<ArticlesDetailPageWrapper />} />
                    <Route path="/add-article" element={<AddArticle />} />
                 

                    <Route path="/products" element={<ProductsPage keyword={keyword} keywordChange={onKeywordChangeHandler} onAddHandler={onAddHandler} selectedFilter={selectedFilter} setSelectedFilter={onSelectedFilterHandler} productItems={productItems} loading={loading} />}></Route>
                    <Route path="/products/:id" element={<DetailPage products={productItems} onAddHandler={onAddHandler} />} />
                   

                    <Route path="/cart" element={<CartPage cartItems={cartItems} onAddHandler={onAddHandler} onRemoveHandler={onRemoveHandler} onClearItemHandler={onClearItemHandler} onClearCartHandler={onClearCartHandler} />} />
                    
                   
                    <Route path="/checkout" element=
                    {<CheckoutPage cartItems={cartItems} setCartItems={setCartItems} />} />
                    <Route path="/order-received" element={<OrderReceivedPage />} />

                  
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
        </div>
        
      
    )
}

export default App;
