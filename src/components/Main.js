import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTasksActionCreator, completeTaskActionCreator, handleLogOutActionCreator, handleLoginActionCreator} from '../actions/actions'
import TaskList from '../components/TaskList';
import LoginForm from './LoginForm';
import '../styles/Main.css';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getTasksActionCreator();
    }
    handleCompleteTask(task) {
        this.props.completeTaskActionCreator(task.id);
    }
    handleLogin(username, password) {
        this.props.handleLoginActionCreator(username, password)     
    }
    handleLogOut(e){
        e.preventDefault();
        this.props.handleLogOutActionCreator();
    }
    render() {
        const {tasks, logged} = this.props;
        if (!logged) {
            return <LoginForm onLogin={(username, password) => this.handleLogin(username, password)}/>
        } else
            return (
                <div className = 'container'>
                <h1>Simple Todo List</h1>
                    <section><h2>Todos</h2>
                        <TaskList
                            onCompleteTask={(task) => this.handleCompleteTask(task)}
                            tasks={tasks}></TaskList>
                    </section>
                    <button onClick={(e)=>this.handleLogOut(e)}>LOGOUT</button>
                </div>
            )
    }
}
function select(state) {
    console.log('in select main');
    return {
        logged: state.loged,
        tasks: state.tasks
    }
}
export default connect(select,{handleLoginActionCreator, getTasksActionCreator, completeTaskActionCreator, handleLogOutActionCreator})(Main)