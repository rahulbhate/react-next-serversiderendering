function speakerReducer(state, action) {
  switch (action.type) {
    case 'setSpeakersData': {
      console.log('setSpeakersData action type called');
      return action.data;
    }
    case 'setSessionsData': {
      console.log('setSessionsData action type called');
      return action.data;
    }
    default:
      return state;
  }
}

export default speakerReducer;
