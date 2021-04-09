const BUY_CAKE = 'BUY_CAKE';

// action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First Redux Action',
  };
}

// (previousState, action) => newState

// initialState should be defined in a single object
// initialState should be passed as a parameter for the state
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};
