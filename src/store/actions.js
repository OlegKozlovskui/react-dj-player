import {
  SET_LEFT_TRACKS,
  REMOVE_LEFT_TRACK,
  SET_RIGHT_TRACKS,
  REMOVE_RIGHT_TRACK
} from './types.js';

export const setLeftTracks = tracks => ({
  type: SET_LEFT_TRACKS,
  payload: tracks
});

export const removeLeftTrack = trackId => ({
  type: REMOVE_LEFT_TRACK,
  payload: trackId
});

export const setRightTracks = tracks => ({
  type: SET_RIGHT_TRACKS,
  payload: tracks
});

export const removeRightTrack = trackId => ({
  type: REMOVE_RIGHT_TRACK,
  payload: trackId
});