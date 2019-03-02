import { combineReducers } from "redux";
import * as types from "./types";

const initialState = {
  allIds: ["2950159", "524901", "515003", "4119617", "551487", "1496153"],
  byIds: {
    "2950159": {
      id: "2950159",
      title: "Berlin"
    },
    "524901": {
      id: "524901",
      title: "Moscow"
    },
    "515003": {
      id: "515003",
      title: "Orenburg"
    },
    "4119617": {
      id: "4119617",
      title: "London"
    },
    "551487": {
      id: "551487",
      title: "Kazan"
    },
    "1496153": {
      id: "1496153",
      title: "Omsk"
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
