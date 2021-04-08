import React, { Component } from 'react';
import BoxForm from './BoxForm';
import Box from "./Box";

class BoxList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            boxes : []
        }
        
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }
    addBox(boxItem) {
        this.setState({
            boxes : [...this.state.boxes,boxItem]
        });
        
    }
    removeBox(id) {
        this.setState({
            boxes : this.state.boxes.filter(box => box.id !== id)
        })
    }
    render() {
        const boxes = this.state.boxes.map((box) => {
            
            return <Box
                key={box.id}
                // key  property cannot be used by the us
                // IT is React specific and used internally by it
                // to identify the elements
                id={box.id}
                width={box.width}
                height={box.height}
                color={box.color}
                removeBox = {this.removeBox}
            />
        })
        return (
            <div>
                <h1>Box thingy</h1>
                <BoxForm addBoxItem={this.addBox} removeBox/>

                {boxes}
                
            </div>
        )
    }
    
    
}

export default BoxList;
