import { combineReducers } from "redux";

const initialState = {
  allIds: ["0", "1", "2"],
  byIds: {
    "0": {
      id: "0",
      title: "country 0",
      cities: ["0", "1"]
    },
    "1": {
      id: "1",
      title: "country 1",
      cities: ["2", "3"]
    },
    "2": {
      id: "2",
      title: "country 2",
      cities: ["4", "5"]
    }
  }
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ allIds, byIds });
