import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    sequence: 1
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
    submit(state, id) {
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })
      filtered.forEach(task => {
        task.taskStatus = "done"
      })
    },
    complete(state, id) {
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })
      filtered.forEach(task => {
        task.taskStatus = "complete"
      })
    },
    unsubmit(state, id) {
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })
      filtered.forEach(task => {
        task.taskStatus = "undone"
      })
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
    submitTask({ commit }, id) {
      commit("submit", id);
    },
    completeTask({ commit }, id) {
      commit("complete", id);
    },
    unsubmitTask({ commit }, id) {
      commit("unsubmit", id);
    },
    deleteTask({ commit }, id) {
      commit("delete", id);
    }
  },
})
