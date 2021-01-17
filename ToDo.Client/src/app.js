import React from 'react';

class ToDoItem extends React.Component {
    render() {
        return (
            <li key={this.props.key}>
                <input type='checkbox' />
                {this.props.value}
            </li>
        );
    }
}

class ToDoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map((text, index) => <ToDoItem key={index} value={text} />)}
            </ul>
        );
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
        this.onClearClick =  this.onClearClick(this);
    }

    handleChange(event) {
        this.setState({ 
            inputValue: event.target.value 
        });
    }

    onAddClick() {       
        this.setState((state) => ({
            itemList: state.itemList.concat(state.inputValue),
            inputValue: ''
        }));
    }

    onClearClick() {
        this.setState({
            itemList: [],
            inputValue: ''
        });
    }

    render() {
        return (
            <section class="to-do-app">
                <input id='add-item-input' type='text' value={this.state.inputValue} onChange={this.handleChange.bind(this)} />
                <button onClick={this.onAddClick}>Add</button>
                <button onClick={this.onClearClick}>Clear</button>

                <ToDoList items={this.state.itemList} />
            </section>
        );
    };
}
