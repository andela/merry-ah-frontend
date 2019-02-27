import {
  SET_NEXT_SLIDE,
  SET_PREVIOUS_SLIDE,
  SET_INIT_SLIDE,
} from '../actions/types';

const initialState = {
  artList: [],
  activeList: [],
};

/**
 *  @param {function} state
 * @param {function} action
 *  @returns {Object} action obj
 */
function featureReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INIT_SLIDE: {
      return {
        ...state,
        activeList: action.payload.artList.slice(0, 3),
        artList: action.payload.artList,
      };
    }
    case SET_NEXT_SLIDE: {
      const secondItem = state.activeList[1].objectID;

      /**
       * @params {object}
       * @returns {index}
       */
      const found = state.artList
        .findIndex(element => element.objectID === secondItem);
      const lastItemActiveList = state.activeList[state.activeList.length - 1];
      const lastItemArtList = state.artList[state.artList.length - 1];

      if (lastItemActiveList.objectID === lastItemArtList.objectID) {
        return {
          ...state,
          activeList: [
            ...state.artList.slice(found, found + 3),
            state.artList[0],
          ],
        };
      }

      if (state.activeList[2].objectID === state.artList[0].objectID) {
        return {
          ...state,
          activeList: state.artList.slice(0, 3),
        };
      }

      return {
        ...state,
        activeList: state.artList.slice(found, found + 3),
      };
    }
    case SET_PREVIOUS_SLIDE: {
      const secondItem = state.activeList[1].objectID;

      if (state.activeList[1].objectID === state.artList[1].objectID) {
        return {
          ...state,
          activeList: state.artList.slice(0, 3),
        };
      }
      /**
       * @params {object}
       * @returns {index}
       */
      const found = state.artList
        .findIndex(element => element.objectID === secondItem);
      return {
        ...state,
        activeList: state.artList.slice(found - 2, found + 1),
      };
    }
    default:
      return state;
  }
}

export default featureReducer;
