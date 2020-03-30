import React from 'react';
import MyTodoItem from './MyTodoItem';

class MyTodoList extends React.Component {

  render() {
    return(
      <div>

        {/* หา this ไม่เจอ ต้องใช้ arrow */}
        {/* {this.props.todoList.map(function(item, index) {
          return <MyTodoItem deleteTodoList={this.props.deleteTodoList} item={item} index={index} />
        }).bind(this) }
         */}
        
        {this.props.todoList.map( (item) => <MyTodoItem deleteTodoList={this.props.deleteTodoList} task={item.task} id={item.id} /> )}

      </div>
    )
  }
}

export default MyTodoList;