import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount() {// UI상에서 보여질 때 호출됨
        console.log(`habit: ${this.props.habit.name} mounted`);
    }

    componentWillUnmount() { // UI상에서 없어질 때 호출됨
        console.log(`habit: ${this.props.habit.name} will unmounted`);
    }

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };
    
    handleDecrement = ()=> {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = ()=>{
        this.props.onDelete(this.props.habit);
    };
    render() {
        const { name, count  }  = this.props.habit;
        return (
            <>
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-square-plus"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-square-minus"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
            </>
        );
    }
}

export default Habit;