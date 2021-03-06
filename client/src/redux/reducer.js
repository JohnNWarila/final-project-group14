import { combineReducers } from 'redux'

import {
  SET_USER_NAME,
  SET_JWT,
  SET_CURRENT_TASK,
  SET_NEXT_TASK,
  SET_NEXT_BREAK_DUR,
  SET_TASKS
} from './actions'

const initialStateUser = {
  username: "",
  jwt: ""
}

const initialStateTodo = {
  currentTask: {},
  nextTask: -1,
  nextBreakDur: 15
}

function userReducer(state = initialStateUser, action) {
  switch(action.type) {
    case SET_JWT:
      return {
        ...state,
        jwt: action.jwt
      }
    case SET_USER_NAME:
      return {
        ...state,
        username: action.name
      }
    default:
      return state
  }
}

function todoReducer(state = initialStateTodo, action) {
  switch(action.type) {
    case SET_CURRENT_TASK:
      return {
        ...state,
        currentTask: action.id
      }
    case SET_NEXT_TASK:
      return {
        ...state,
        nextTask: action.id
      }
    case SET_NEXT_BREAK_DUR:
      return {
        ...state,
        nextBreakDur: action.dur
      }
    default:
      return state
  }
}

function tasksReducer(state = [], action) {
  switch(action.type) {
    case SET_TASKS:
      return action.tasks
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  tasks: tasksReducer
})

export default rootReducer