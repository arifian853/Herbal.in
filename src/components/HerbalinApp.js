import React from "react";
import {Route, Routes} from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ArticlesPage from "../pages/ArticlesPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import { getUserLogged, putAccessToken } from "../utils/api_auth";
import DetailPageWrapper from "../pages/Detail Page";
import ArticlesDetailPageWrapper from "../pages/ArticlesDetailPage";
import NotFoundPage from "../pages/NotFoundPage";



class HerbalinApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            authedUser: null,
            initializing: true,

        }

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async componentDidMount(){
        const { data } = await getUserLogged();

        this.setState(() => {
            return {
                authedUser: data,
                initializing: false
            }
        })
    }

    async onLoginSuccess({ accessToken }){
        putAccessToken(accessToken);

        const { data } = await getUserLogged();

        this.setState(() => {
            return {
                authedUser: data
            }
        })
    }

    onLogout(){
        this.setState(() => {
            return {
                authedUser: null
            }
        });

        putAccessToken('');
    }

    render(){
        if(this.state.initializing){
            return null;
        }

        if(this.state.authedUser === null){
            return (
                <div className="herbalin-app">
                    <main>
                        <Routes>
                            <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                            <Route path="/register" element={<RegisterPage />} />
                        </Routes>
                    </main>
                </div>
            )
        }

        return (
            <div className="herbalin-app">
                <header className="herbalin-app__header">
                    <img src="images/leaf.png" alt="logo" className="herbalin-app__header_logo" />
                    <p className="herbalin-app__header_title">Herbal.in</p>
                    <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/articles" element={<ArticlesPage />} />
                        <Route path="/articles/:id" element={<ArticlesDetailPageWrapper />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/products/:id" element={<DetailPageWrapper />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
            </div>
        )
    }
}


export default HerbalinApp;
