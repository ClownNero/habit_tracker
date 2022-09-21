import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        { id: 1, name: 'Reading', count : 0},
        { id: 2, name: 'Running', count : 0},
        { id: 3, name: 'Coding', count : 0},
    ],
  };

  handleIncrement = (habit) =>{
    console.log(`handleIncrement ${habit.name}`);
    const habits = this.state.habits.map(item=>{
      if(item.id === habit.id){
        return { ...habit, count: habit.count + 1 };
      } 
      return item;
    });
    this.setState({habits}); // shallowComparison하기 때문에 
  };

  handleDecrement = (habit)=> {
    console.log(`handleDecrement ${habit.name}`);
    const habits = this.state.habits.map(item=>{
      if(item.id === habit.id){
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } 
      return item;
    });
    this.setState({habits});
    // const habits = [...this.state.habits]; // 새로운 배열로 복사해옴
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count; // 삼항 연산자
    // if(habits[index].count > 0){ // if문 
    //     habits[index].count--;
    //     this.setState({ haibts: habits});
    // }
  };

  handleDelete = (habit)=>{
    console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter(item=> item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = name => {
    const habits = [...this.state.habits, {id:Date.now(), name: name, count: 0}];
    this.setState({habits});
  }

  handleReset = () => {
      //   const habits = this.state.habits.map(item=>{
      // if(item.id === habit.id){
      //   return { ...habit, count: habit.count + 1 };
      // } 
      // return item;
    const habits = this.state.habits.map(habit=>{
      if (habit.count !== 0){
        return {...habit, count:0};
      }
      return habit;
    });
    this.setState({habits});
  };
  render(){
  return (
  <>
    <Navbar totalCount={this.state.habits.filter(item=>item.count>0).length}/>
    <Habits
      habits={this.state.habits}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      onAdd={this.handleAdd}
      onReset={this.handleReset}
    />
  </>
  );
}
}

export default App;
