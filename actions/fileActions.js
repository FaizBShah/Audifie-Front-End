import { SELECT_FILE, REMOVE_FILE } from "../context/types";

export const selectFile = (fileId, dispatch) => {
  dispatch({
    type: SELECT_FILE,
    payload: fileId
  });
}

export const removeFile = (dispatch) => {
  dispatch({
    type: REMOVE_FILE
  });
}