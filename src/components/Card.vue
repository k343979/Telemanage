<template>
  <div class="Card">
    <div class="Card-box">
      <div class="Card-title">
        <h1 class="Card-logo">未提出BOX</h1>
      </div>
      <div class="list">
        <ul v-for="task in lists1" :key="task.id">
          <li>宛先：{{ task.name }}</li>
          <li>内容：{{ task.content }}</li>
          <button @click="submitTask(task.id)">提出</button>
          <button @click="deleteTask(task.id)">削除</button>
        </ul>
      </div>
    </div>
    <div class="Card-box">
      <div class="Card-title">
        <h1 class="Card-logo">提出BOX</h1>
      </div>
      <div class="list">
        <ul v-for="task in lists2" :key="task.id">
          <li>宛先：{{ task.name }}</li>
          <li>内容：{{ task.content }}</li>
          <button @click="completeTask(task.id)">完了</button>
          <button @click="unsubmitTask(task.id)">再提出</button>
        </ul>
      </div>
    </div>
    <div class="Card-box">
      <div class="Card-title">
        <h1 class="Card-logo">完了BOX</h1>
      </div>
      <div class="list">
        <ul v-for="task in lists3" :key="task.id">
          <li>宛先：{{ task.name }}</li>
          <li>内容：{{ task.content }}</li>
          <button @click="deleteTask(task.id)">削除</button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store/index';
export default {
  created() {
    this.$store.dispatch("readTasks");
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    openModal() {
      this.show = true
      return this.$store.getters.getTaskById
    },
    submitTask(id) {
      this.$store.dispatch("submitTask", id);
    },
    completeTask(id) {
      this.$store.dispatch("completeTask", id);
    },
    unsubmitTask(id) {
      this.$store.dispatch("unsubmitTask", id);
    },
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
    closeModal() {
      this.show= false
    },
  },
  computed: {
    lists1() {
      return this.$store.state.tasks.filter(function (tasks) {
        return tasks.taskStatus === "undone"
      })
    },
    lists2() {
      return this.$store.state.tasks.filter(function (tasks) {
        return tasks.taskStatus === "done"
      })
    },
    lists3() {
      return this.$store.state.tasks.filter(function (tasks) {
        return tasks.taskStatus === "complete"
      })
    },
  },
  store,
};
</script>

<style scoped>
.Card {
  display: flex;
  width: 1230px;
  justify-content: space-around;
}

.Card-box {
  width: 27%;
  height: auto;
  margin-top: 50px;
}

.Card-title {
  font-size: 20px;
  background: #444;
  color: #ffffff;
  width: 100%;
  height: 70px;
  text-align: center;
  line-height: 70px;
}

.list {
  width: 100%;
  border: 1px solid #777;
  padding: 10px;
}

.list ul {
  border: 1px solid #777;
  margin-bottom: 10px;
}

.list li {
  margin-top: 10px;
  padding: 0 5px;
  list-style: none;
}

.overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  text-align: center;
  z-index: 2;
  width: 60%;
  padding: 10px;
  background: #ffffff;
}

.content h4  {
  font-size: 20px;
  color: #000;
  padding: 40px;
}

.Modal {
  width: 90%;
  margin: 0 auto;
}

.item {
  overflow: hidden;
  margin-left: 30px;
  margin-bottom: 25px;
}

.item input {
  height: 30px;
  padding: 10px;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
}

.item [type="text"] {
  width: 350px;
  height: 20px;
}

.label {
  float: left;
  margin-top: 5px;
  margin-right: 10px;
  width: 100px;
  border-left: solid 3px #2A005F;
  padding-left: 10px;
}

.inputs {
  padding-left: 40px;
  float: left;
  width: 360px;
}

.inputs label {
  padding-left: 10px;
}

.inputs [for="undone"] {
  margin-right: 40px;
}

.inputs [for="done"] {
  margin-right: 40px;
}

textarea {
  box-sizing: border-box;
  border: solid 1px #aaaaaa;
  border-radius: 5px;
  padding: 10px;
  margin-left: 70px;
  margin-bottom: 10px;
  height: 150px;
  font-size: 15px;
}

.btn-area {
  text-align: center;
}

.btn-area button {
  padding: 5px 40px;
  margin: 0;
  color: #ffffff;
  background-color: #e0505c;
  border: 1px solid #777777;
}

button {
  padding: 5px 20px;
  margin: 20px;
  background-color: #c4c4c4;
  color: #ffffff;
  border: 1px solid #777777;
  cursor: pointer;
}
</style>