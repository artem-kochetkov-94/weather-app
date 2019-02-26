import { combineReducers } from "redux";

const initialState = {
  allIds: ["0", "1", "2", "3", "4", "5"],
  byIds: {
    "0": {
      id: "0",
      title: "city 0"
    },
    "1": {
      id: "1",
      title: "city 1"
    },
    "2": {
      id: "2",
      title: "city 2"
    },
    "3": {
      id: "3",
      title: "city 3"
    },
    "4": {
      id: "4",
      title: "city 4"
    },
    "5": {
      id: "5",
      title: "city 5"
    }
  },
  active: {
    id: "0",
    weather: {}
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

const active = (state = initialState.active, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ allIds, byIds, active });
