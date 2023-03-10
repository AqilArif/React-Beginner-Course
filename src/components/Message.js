import { Component } from 'react';
class Message extends Component {
    render() {
        return (
            <h1>
                This is class component 
                {/* Message: {this.props.messageContent} */}
            </h1>
        )
    }
}

export default Message;