import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticlesDetailPageWrapper from "./pages/ArticlesDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import { getAllProducts } from "./utils/api_products";
import ProductsPage from "./pages/ProductsPage";
import { useSearchParams } from "react-router-dom";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { SecureRoute } from "./components/SecureRoute";

function App() {
    const [ loading, setLoading ] = useState(true);
    const [ productItems, setProductItems ] = useState([]);
    const [ cartItems, setCartItems ] = useState([]);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ keyword, setKeyword ] = useState(() => {
        return searchParams.get('keyword') || ''
    })
    const [ selectedFilter, setSelectedFilter ] = useState();
    

    useEffect(() => {
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
            

            <main>
                <UserAuthContextProvider>
                    <Routes>
                        <Route path="/" element={<LandingPage />}></Route>
                        <Route path="/register" element={<RegisterPage />}></Route>
                        <Route path="/login" element={<LoginPage />}></Route>
                        <Route path="/home" element={
                        <SecureRoute>
                            <header className="herbalin-app__header">
                                <img src="images/leaf.png" alt="logo" className="herbalin-app__header_logo" />
                                <p className="herbalin-app__header_title">Herbal.in</p>
                                <Navigation cartItems={cartItems} />
                            </header>
                            <HomePage onAddHandler={onAddHandler} />
                        </SecureRoute>
                        } />
                        <Route path="/articles" element={<ArticlesPage />} />
                        <Route path="/articles/:id" element={<ArticlesDetailPageWrapper />} />
                        <Route path="/products" element={<ProductsPage keyword={keyword} keywordChange={onKeywordChangeHandler} onAddHandler={onAddHandler} selectedFilter={selectedFilter} setSelectedFilter={onSelectedFilterHandler} productItems={productItems} loading={loading} />}></Route>
                        <Route path="/products/:id" element={<DetailPage products={productItems} onAddHandler={onAddHandler} />} />
                        <Route path="/cart" element={<CartPage cartItems={cartItems} onAddHandler={onAddHandler} onRemoveHandler={onRemoveHandler} onClearItemHandler={onClearItemHandler} onClearCartHandler={onClearCartHandler} />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </UserAuthContextProvider>
                
            </main>
        </div>
    )
}

export default App;
