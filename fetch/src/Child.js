import React from 'react';
import axios from 'axios';
import ChildChild from './ChildChild.js';

const API = 'https://jsonplaceholder.typicode.com/posts'

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            isLoading: false,
            error: null,
        };
    }

    update(){
        this.setState({ isLoading: true });

        axios.get(API,
            {
                params:{
                    'userId': this.props.id,
                }
            })
          .then(result => this.setState({
            data: result.data,
            isLoading: false
          }))
          .catch(error => this.setState({
            error,
            isLoading: false
      }));
    }

    componentDidMount(){
        this.update();
    }

    componentDidUpdate(prevProps){
        if(prevProps.id !== this.props.id){
            this.update();
        }
    }


    content() {
            return this.state.data.map((item, index) => (<div><h1>{item.title}</h1><ChildChild item={item}  key={index} /></div>));
    }

    render() {
        if (this.state.isLoading){
            return <h2>Loading...</h2>
        } else if (this.state.error){
            return <h2>Error!</h2>
        } else if (this.state.data){
            return this.content();
        } else {
            return <div>Got Nothing</div>;
        }
    }
}

export default Child;
