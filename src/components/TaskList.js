import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTaskActionCreator} from '../actions/actions';
import '../styles/TaskList.css';


class TaskList extends Component {
    constructor(props) {
        super(props);
    }
    addTask(taskText) {
        this.props.addTaskActionCreator(taskText);
    }
    render() {
        const {onCompleteTask, tasks} = this.props;
        var newTask;
        return (
            <ul className="task_list">
            <input type="text" ref={node => {
                        newTask = node
                    }}></input>
                    <button onClick={() => {
                        this.addTask(newTask.value)
                        newTask.value = ''}}>Add Task</button>
                {
                    tasks.map(task => {
                        return <li className={task.completed ? "list_items completed": "list_items"} key={task.id}>
                            {task.text}
                        <button onClick={() => onCompleteTask(task)}>Complete</button>
                        </li>
                    })
                }
            </ul>
        )

    }
}
function select(state) {
    return {};
};
export default connect(select,{addTaskActionCreator})(TaskList);
