import { createSignal } from "@dilane3/gx";

const tasksSignal = createSignal({
  name: "tasks",
  state: [
    {
      id: 1,
      title: "Manger une pomme",
      description: "Je dois manger une pomme",
      completed: false,
    },
    {
      id: 2,
      title: "Manger une orange",
      description: "Je dois manger une orange",
      completed: false,
    },
  ],
  actions: {
    addTask: (state, payload) => {
      return [
        ...state,
        {
          id: Math.random(),
          ...payload,
        },
      ];
    },
    deleteTask: (state, payload) => {
      return state.filter((task) => task.id !== payload);
    },
    deleteAllTasks: () => {
      return [];
    },
  },
});

export default tasksSignal;
