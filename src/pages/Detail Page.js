import React from "react";
import PropTypes from "prop-types";
import ProductDetail from "../components/ProductDetail";
import { getProduct } from "../utils/api_products";
import { useParams } from "react-router-dom";

function DetailPageWrapper(){
    const {id} = useParams();

    return <DetailPage id={id} />;
}

class DetailPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            products : null,
        }
    }

    async componentDidMount(){
        const product = await getProduct(this.props.id);
    
            this.setState(() => {
                    return {
                        products : product.data
                    }
                }
            )
    }

    render(){
        
        if(this.state.products){
          
        return (
            <section>
                <ProductDetail {...this.state.products} />
            </section>

        )
        }
        
        if(this.state.products === null){
            // return <NotFoundPage />
            return <p>Loading ...</p>
        }
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired
}

export default DetailPageWrapper;

