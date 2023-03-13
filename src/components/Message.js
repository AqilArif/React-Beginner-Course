import { Component } from 'react';
class Message extends Component {
    render() {
        
        const { message } = this.props; // Destructuring Props

        return (
            <h1>
                {/* This is class component  */}
                Message: {message}
                {/* Message: {this.props.messageContent} */}
            </h1>
        )
    }
}

export default Message;