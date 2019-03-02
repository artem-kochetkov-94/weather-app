import { combineReducers } from "redux";

const initialState = {
  allIds: ["0", "1", "2"],
  byIds: {
    "0": {
      id: "0",
      title: "country 0",
      cities: ["2950159", "524901"]
    },
    "1": {
      id: "1",
      title: "country 1",
      cities: ["515003", "4119617"]
    },
    "2": {
      id: "2",
      title: "country 2",
      cities: ["551487", "1496153"]
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
