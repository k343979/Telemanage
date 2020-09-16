import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    sequence: 1
  },
  getters: {
    getTaskById: state => id => {
    return state.tasks.find(task => task.id === id);
    }
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setSequence(state, sequence) {
      state.sequence = sequence;
    },
    add(state, { name, taskStatus, content }) {
      const task = {
        id: state.sequence,
        name: name,
        taskStatus: taskStatus,
        content: content
      };
      state.tasks.push(task);
      state.sequence++;
      console.log(state);
    },
    update(state, { id, name, taskStatus, content }) {
      const index = state.tasks.findIndex(task => task.id === id);
      if (index >= 0) {
        state.tasks[index].name = name;
        state.tasks[index].taskStatus = taskStatus;
        state.tasks[index].content = content;
      }
      console.log(state);
    },
    delete(state, id) {
      const index = state.tasks.findIndex(task => task.id === id);
      if (index >= 0) {
        state.tasks.splice(index, 1);
      }
    }
  },
  actions: {
    readTasks({ commit }) {
      let tasks = [
        {
          id: 1,
          name: "Aさん",
          taskStatus: "undone",
          content: "営業日報の登録",
        },
        {
          id: 2,
          name: "Bさん",
          taskStatus: "undone",
          content: "営業日報の登録",
        },
        {
          id: 3,
          name: "Cさん",
          taskStatus: "done",
          content: "営業日報の登録",
        },
      ];
      let sequence = 4;
      commit("setTasks", tasks);
      commit("setSequence", sequence);
    },
    addTask({ commit }, task) {
      commit("add", task);
    },
    updateTask({ commit }, task) {
      commit("update", task);
    },
    deleteTask({ commit }, id) {
      commit("delete", id);
    }
  },
})
