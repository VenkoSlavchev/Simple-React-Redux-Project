import {ADD_TASK, COMPLETE_TASK, GET_TASKs, LOGGED,LOGGED_OUT} from  '../constants/constants'
export default RootReducer;
const initialState = {
    id: 0,
    tasks: [{
        id: 0,
        text: 'brushing my teeth',
        completed: false
    }]
};

function RootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TASKs:
            return Object.assign({}, state, {tasks: action.payload.tasks});
        case ADD_TASK:
            return addTaskReducer(state, action);
        case COMPLETE_TASK:
            return completeTaskReducer(state, action);
        case LOGGED:
            return login(state, action);
        case LOGGED_OUT:
            return onLogOut(state,action)
        default :
            return state
    }
}
function login(state, action) {
    sessionStorage.setItem('loged', true);
    let username = action.payload.username;
    let pass = action.payload.password;
    return Object.assign({}, state, {loged: true, username:username,password:pass})
}
function onLogOut(state, action) {
    sessionStorage.clear();
    return Object.assign({},state,{loged:false,username:'',password:''})
}
function addTaskReducer(state, action) {
    let task = action.payload;
    task.completed = false;
    let lastTask = state.tasks[state.tasks.length - 1];
    task.id = lastTask.id+1;
     return Object.assign({}, state, {tasks: [...state.tasks, task]});
}
function completeTaskReducer(state, action) {
    let id = action.payload.id;
    state.tasks.map(task => {
            if (id === task.id) {
                 task.completed = true;
            }
        })
    console.log(state);
    return Object.assign({}, state, {tasks: [...state.tasks]})
}
