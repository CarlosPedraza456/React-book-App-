import React from 'react';

class PanelAdd extends React.Component{

    constructor(props){
        super(props);
        this.state={

            title: '',
            image: '',
            rating: 1


        };
    }
    onChangeTitle = (e) =>{
        this.setState({title: e.target.value});
    }
    
    onChangeImage = (e) =>{
        this.setState({image: e.target.value+".jpg"});//dd ".jpg" extention to field to add the .jpg books.
    }

    onChangeRating = (e) =>{
        const rating = parseInt(e.target.value);
        this.setState({rating: rating})
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;

        this.props.onadd({title: title, image: image, rating: rating});
        this.props.onCancel();
    }
    render(){
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p className="row">
                           <h2>Lets to add a new book</h2>
                            <label>Write a tittle: </label>
                            <br></br>
                            <input onChange={this.onChangeTitle} type="text" name="title" className="input"></input>
                        </p>
                        <br></br>
                        <p className="row">
                            <label>Write a image's name: </label>
                            <br></br>
                            <input onChange={this.onChangeImage} type="text" name="image" className="input"></input>
                        </p>
                        <p className="row">
                            <label>Qualification</label>
                            <br></br>
                            <select onChange={this.onChangeRating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <div className="container-buttons">
                            <input type="submit" className="button btn-blueB" value="Submit"></input>
                            <button onClick={this.props.onCancel} className="button btn-normal">Cancel</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        );
    }

}

export default PanelAdd;