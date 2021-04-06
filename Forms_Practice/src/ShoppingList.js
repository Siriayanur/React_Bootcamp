import React,{ Component } from 'react';
import ShoppingListForm from './ShoppingListForm';

class ShoppingList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items:
                [
                    { name: "shoe", price: 50 },
                    { name: "shirt", price: 100 }
                ]
        }
        this.renderShoppingItemList = this.renderShoppingItemList.bind(this)
        this.addItem = this.addItem.bind(this)
    }
    renderShoppingItemList() {
        return <ul>
            {this.state.items.map(item => (
                <li>{item.name} : {item.price}</li>
            ))}
        </ul>;
    }
    addItem(item) {
        this.setState((currentState) => {
            return {
                items : [...currentState.items,item]
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Shopping</h1>
                {this.renderShoppingItemList()}
                <ShoppingListForm addItem={this.addItem}/>
            </div>
            
        );
    }
}

export default ShoppingList;