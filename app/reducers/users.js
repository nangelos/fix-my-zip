import axios from 'axios';

// ACTION TYPES
const GET_USER = 'GET_USER';
const GET_USERS = 'GET_USERS';
const ADD_USER = 'ADD_USER';
const EDIT_USER = 'EDIT_USER';

// ACTION CREATORS
export const getUser = (user) => ({type: GET_USER, user});
export const getUsers = (user) => ({type: GET_USERS, user});
export const createUser = (user) => ({type: ADD_USER, user});
export const updateUser = (user) => ({type: EDIT_USER, user});

// THUNK CREATORS
export const fetchUsers = () => {
  return thunk = (dispatch) => {
    return axios.get('/api/users')
    .then(res => res.data)
    .then(users => dispatch(getUsers(users)))
    .catch(err => console.error(err));
  }
}

export const fetchUser = (id) => {
  return thunk = (dispatch) => {
    return axios.get(`/api/users/${id}`)
    .then(res => res.data)
    .then(user => dispatch(getUser(user)))
    .catch(err => console.error(err));
  }
}

export const addUser = (newUser) => {
  return thunk = (dispatch) => {
    return axios.post('/users', newUser)
    .then(user => dispatch(createUser(newUser)))
    .catch(err => console.error(err));
  }
}

export const editUser = (id, changes) => {
  return thunk = (dispatch) => {
    return axios.put(`/users/${id}`, changes)
    .then(updatedUser => dispatch(updateUser(changes)))
    .catch(err => console.error(err));
  }
}

// REDUCER
const userReducer = (state = [], action) => {
  switch(action.type) {
    case GET_USER: {
      return [...state, action.user];
    }

    case GET_USERS: {
      return action.users;
    }

    case ADD_USER: {
      return [...state, action.user];
    }

    case EDIT_USER: {
      return Object.assign({}, state, action.user)
    }

    default:
      return state;
  }
}

export default userReducer;