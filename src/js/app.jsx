import React from 'react';
import ReactDOM from 'react-dom';
import List from "./components/list.jsx";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskNumber: 1,
            items: [],
        };
    }


    handleOnClickAdd = () => {
        this.setState({
            taskNumber: this.state.taskNumber+1,
            items: [...this.state.items, this.state.taskNumber]
        });

    };
    handleOnClickRemove = () => {
        if (this.state.taskNumber == 2) {
            this.setState({
                taskNumber: this.state.taskNumber-1,
                items: []
            })
        }
        else if (this.state.taskNumber == 1) {}
        else {
            const itemList = [...this.state.items];
            itemList.pop();
            this.setState({
                taskNumber: this.state.taskNumber-1,
                items: itemList
             })
        }
    }
    handleOnClickClear = () => {
        this.setState({
            taskNumber: 1,
            items: []
        })

    }

    render() {
        return (
            <div className={'todolist'}>
                <div className={'buttons'}>
                    <button className={'add'}
                        onClick={this.handleOnClickAdd}
                    >Add</button>
                    <button className={'remove'}
                        onClick={this.handleOnClickRemove}
                    >Remove</button>
                    <button className={'clear'}
                        onClick={this.handleOnClickClear}
                    >Clear</button>
                </div>
                <div className={'list_items'}>
                    <h1>To do:</h1>

                    <List items={this.state.items} />
                </div>
            </div>
        );
    }
}




ReactDOM.render(
    <App/>,
    document.getElementById('app')
);