import { Component } from "react";

class ClassEvent extends Component {
    handleClick = () => {
      console.log('Class Based Event Handler')
    }
    render () {
        return (
            <div>
                <h3>Class Event Component</h3>

                <button type="button" onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default ClassEvent