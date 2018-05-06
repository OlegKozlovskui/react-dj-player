import {
  SET_LEFT_TRACKS,
  REMOVE_LEFT_TRACK,
  SET_RIGHT_TRACKS,
  REMOVE_RIGHT_TRACK
} from './types.js';

const initialState = {
  leftTracks: [],
  rightTracks: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_LEFT_TRACKS:
      return {
        ...state,
        leftTracks: [...state.leftTracks, ...action.payload]
      }
    case REMOVE_LEFT_TRACK:
      return {
        ...state,
        leftTracks: state.leftTracks.filter(track => track.id !== action.payload)
      }
    case SET_RIGHT_TRACKS:
      return {
        ...state,
        rightTracks: [...state.rightTracks, ...action.payload]
      }
    case REMOVE_RIGHT_TRACK:
      return {
        ...state,
        rightTracks: state.rightTracks.filter(track => track.id !== action.payload)
      }
    default:
      return state;
  }
}