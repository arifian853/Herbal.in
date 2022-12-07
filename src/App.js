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
import { AdminLogin } from "./pages/AdminLogin";
import { Editing } from "./pages/Editing";
import CheckoutPage from "./pages/CheckoutPage";

import EditArticles from "./pages/EditArticles";
import AddArticles from "./pages/AddArticles";

function App() {
    const [loading, setLoading] = useState(true);
    const [ productItems, setProductItems ] = useState([]);
    const [ cartItems, setCartItems ] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] );
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ keyword, setKeyword ] = useState(() => {
        return searchParams.get('keyword') || ''
    })
    const [ selectedFilter, setSelectedFilter ] =useState();
    

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
            

            <main>
                <UserAuthContextProvider>
                    <Routes>

                        {/* Login and Register */}
                        <Route path="/" element={<LandingPage />}></Route>
                        <Route path="/admin-herbalin-login" element={<AdminLogin> </AdminLogin>}></Route>
                        <Route path="/register" element={<RegisterPage />}></Route>
                        <Route path="/login" element={<LoginPage />}></Route>

                        {/* Home */}
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

                        {/* Articles */}
                        <Route path="/articles" element={ 
                        <SecureRoute>
                            <header className="herbalin-app__header">
                                <img src="images/leaf.png" alt="logo" className="herbalin-app__header_logo" />
                                <p className="herbalin-app__header_title">Herbal.in</p>
                                <Navigation cartItems={cartItems} />
                            </header>
                            <ArticlesPage />
                            </SecureRoute>} />

                        {/* Article Details */}
                        <Route path="/articles/:id" element={
                        <SecureRoute>
                            <header className="herbalin-app__header">
                                <img src="images/leaf.png" alt="logo" className="herbalin-app__header_logo" />
                                <p className="herbalin-app__header_title">Herbal.in</p>
                                <Navigation cartItems={cartItems} />
                            </header>
                            <ArticlesDetailPageWrapper />
                        </SecureRoute>} />
                        
                        {/* Products */}
                        <Route path="/products" element={
                        <SecureRoute>
                             <header className="herbalin-app__header">
                                <img src="images/leaf.png" alt="logo" className="herbalin-app__header_logo" />
                                <p className="herbalin-app__header_title">Herbal.in</p>
                                <Navigation cartItems={cartItems} />
                            </header>
                            <ProductsPage keyword={keyword} keywordChange={onKeywordChangeHandler} onAddHandler={onAddHandler} selectedFilter={selectedFilter} setSelectedFilter={onSelectedFilterHandler} productItems={productItems} loading={loading} />
                        </SecureRoute>} />

                        {/* Product Details */}
                        <Route path="/products/:id" element={
                            <SecureRoute>
                                <header className="herbalin-app__header">
                                    <img src="images/leaf.png" alt="logo" className="herbalin-app__header_logo" />
                                    <p className="herbalin-app__header_title">Herbal.in</p>
                                    <Navigation cartItems={cartItems} />
                                </header>
                                <DetailPage products={productItems} onAddHandler={onAddHandler} />
                            </SecureRoute>} />

                        {/* Cart */}
                        <Route path="/cart" element={
                            <SecureRoute>
                                <header className="herbalin-app__header">
                                    <img src="images/leaf.png" alt="logo" className="herbalin-app__header_logo" />
                                    <p className="herbalin-app__header_title">Herbal.in</p>
                                    <Navigation cartItems={cartItems} />
                                </header>
                                <CartPage cartItems={cartItems} onAddHandler={onAddHandler} onRemoveHandler={onRemoveHandler} onClearItemHandler={onClearItemHandler} onClearCartHandler={onClearCartHandler} />
                            </SecureRoute>
                        } />
                        {/* Checkout Page */}
                        <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} setCartItems={setCartItems} />} />

                        {/* Not Found Page */}
                        <Route path="*" element={<NotFoundPage />} />


                        {/* Admin Routes */}
                        {/* Edit page */}
                        <Route path="/editing" element={
                            
                            <SecureRoute>
                                <header className="herbalin-app__header">
                                <img src="images/leaf.png" alt="logo" className="herbalin-app__header_logo" />
                                <p className="herbalin-app__header_title">Herbal.in - Admin</p>
                                <Navigation cartItems={cartItems} />
                            </header>
                            <Editing />
                            </SecureRoute>
                        
                        } />

                        {/* Add or delete Article page */}
                        <Route path="/admin-herbalin-artikel-edit" element={
                            
                            <SecureRoute>
                                <header className="herbalin-app__header">
                                <img src="images/leaf.png" alt="logo" className="herbalin-app__header_logo" />
                                <p className="herbalin-app__header_title">Herbal.in - Admin </p>
                                <Navigation cartItems={cartItems} />
                            </header>
                            <EditArticles />
                            </SecureRoute>
                        
                        } />

                        {/* Add Article page */}
                        <Route path="/admin-herbalin-artikel-add" element={
                            
                            <SecureRoute>
                                <header className="herbalin-app__header">
                                <img src="images/leaf.png" alt="logo" className="herbalin-app__header_logo" />
                                <p className="herbalin-app__header_title">Herbal.in - Admin </p>
                                <Navigation cartItems={cartItems} />
                            </header>
                            <AddArticles />
                            </SecureRoute>
                        
                        } />

                        {/* Add or delete Products page */}
                        <Route path="/admin-herbalin-produk-edit" element={
                            
                            <SecureRoute>
                                <header className="herbalin-app__header">
                                <img src="images/leaf.png" alt="logo" className="herbalin-app__header_logo" />
                                <p className="herbalin-app__header_title">Herbal.in - Admin </p>
                                <Navigation cartItems={cartItems} />
                            </header>
                            <AddArticles />
                            </SecureRoute>
                        
                        } />
                    </Routes>
                </UserAuthContextProvider>
            
                
            </main>
        </div>
    )
}

export default App;
