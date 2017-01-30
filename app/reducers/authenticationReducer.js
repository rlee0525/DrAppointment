import { RECEIVE_USER} from '../actions/authenticationActions';
// import merge from 'lodash/merge';

const authenticationReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default authenticationReducer;
