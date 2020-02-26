import React from 'react';

class ChildChild extends React.Component{
    render() {
        return <div>{this.props.item.body}</div>;
    }
}

export default ChildChild;
