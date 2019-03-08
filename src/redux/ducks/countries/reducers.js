import { combineReducers } from "redux";

const initialState = {
  allIds: ["0", "1", "2"],
  byIds: {
    "0": {
      id: "0",
      title: "RU",
      cities: ["519188", "529334"]
    },
    "1": {
      id: "1",
      title: "UA",
      cities: ["708546", "703363"]
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
