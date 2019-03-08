import { combineReducers } from "redux";
import * as types from "./types";

const initialState = {
  allIds: ["519188", "529334", "708546", "703363"],
  byIds: {
    "519188": {
      id: "519188",
      title: "Novinki"
    },
    "529334": {
      id: "529334",
      title: "Mar’ina Roshcha"
    },
    "708546": {
      id: "708546",
      title: "Holubynka"
    },
    "703363": {
      id: "703363",
      title: "Laspi"
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
