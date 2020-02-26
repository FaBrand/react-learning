import React from 'react';
import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com/todos/'

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            isLoading: false,
            error: null,
        };
    }

    componentDidMount(){
        this.setState({ isLoading: true });

        axios.get(API + this.props.id)
          .then(result => this.setState({
            data: result.data,
            isLoading: false
          }))
          .catch(error => this.setState({
            error,
            isLoading: false
      }));
    }

    render() {
        if (this.state.isLoading){
            return <h2>Loading...</h2>
        } else if (this.state.error){
            return <h2>Error!</h2>
        } else if (this.state.data){
        return <h1>{this.state.data.title}</h1>;
        } else {
        return <div>Nothing</div>;
        }
    }
}

export default Child;
