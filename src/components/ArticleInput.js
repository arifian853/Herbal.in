import React from "react";
import PropTypes from "prop-types";

class ArticleInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            createdAt: '', 
            article_title : '', 
            article_image: '', 
            article_description: ''
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onImageChangeHandler = this.onImageChangeHandler.bind(this);
        this.onDescChangeHandler = this.onDescChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event){
        this.setState(() => {
            return {
                article_title: event.target.value
            }
        })
    }

    onImageChangeHandler(event){
        this.setState(() => {
            return {
                article_image: event.target.value,

            }
        })
    }

    onDescChangeHandler(event){
        this.setState(() => {
            return {
                article_description: event.target.value
            }
        })
    }

    onSubmitHandler(event){
        event.preventDefault();
        
        this.props.addArticle(this.state);
  
    }

    render(){
        return (
            <form onSubmit={this.onSubmitHandler}>
                <input type="text" value={this.state.article_title} placeholder="Title" onChange={this.onTitleChangeHandler} />
                <input type="text" value={this.state.article_image} placeholder="Image Url" onChange={this.onImageChangeHandler} />
                <input type="text" value={this.state.article_description} placeholder="Description" onChange={this.onDescChangeHandler} />
                <button type="submit">Tambah</button>
            </form>
        )
    }

}

ArticleInput.propTypes = {
    addArticle: PropTypes.func.isRequired
}

export default ArticleInput;