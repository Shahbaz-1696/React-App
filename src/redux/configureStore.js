import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const ConfigueStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );
    return store;
}