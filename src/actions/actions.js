import {ADD_TASK, COMPLETE_TASK, GET_TASKs, LOGGED,LOGGED_OUT} from  '../constants/constants'
const tasks = [
    {
        id:0,
        text: 'study...',
        completed: false
    },
    {
        id:1,
        text: 'sleep...',
        completed: false
    }
];

export function getTasks() {
    return {
        type: GET_TASKs,
        payload: {
            tasks
        }
    }
}
export function getTasksActionCreator() {
    return dispatch => {       
                dispatch(getTasks())      
    }
}

export function onLogin(username, password) {
console.log('in constants '+ username + password)
    return{
        type:LOGGED,
        payload:{
            username,password
        }
    }
}
export function handleLoginActionCreator(username,password) {
    return dispatch => {
            setTimeout(() => {
                dispatch(onLogin(username, password))
            }, 3000);
    }
}
export function addTask(text) {
    return {
        type: ADD_TASK,
        payload: {
            text
        }
    }
}
export function addTaskActionCreator(text) {
    return dispatch => {
            setTimeout(() => {
                dispatch(addTask(text))
            }, 1000);
    }
}
export function completeTask(id) {
    return{
        type:COMPLETE_TASK,
        payload:{
            id
        }
    }
}

export function completeTaskActionCreator(id) {
    return dispatch => {
            setTimeout(() => {
                dispatch(completeTask(id))
            }, 2000);
    }
}
export function onLoggingOut() {
    console.log('on logging out');

    return{
        type:LOGGED_OUT,
        payload:{

        }
    }
}
export function handleLogOutActionCreator() {
    return dispatch => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                dispatch(onLoggingOut())
            }, 2000)
            resolve();
        }).then(()=>{
                console.log('Bye Bye')
            }).then(()=>{
                console.log('Will be logged out after 2 seconds')
            });
        
                
    }
}
