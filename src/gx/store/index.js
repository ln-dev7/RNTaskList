import { createStore } from "@dilane3/gx";
import tasksSignal from "./../signals/tasks";

const store = createStore([tasksSignal]);

export default store;
