<template>
  <div id="Side">
    <h3 @click="openModal">タスク作成</h3>
    <div class="overlay" v-if="show">
      <div class="content">
        <h4>タスク作成画面</h4>
        <div class="Modal">
          <div class="item">
            <label class="label" for="name">宛先</label>
            <input id="name" type="text" name="hisname" v-model="name">
          </div>
          <div class="item">
            <p class="label">タスク状況</p>
            <div class="inputs">
              <input id="undone" type="radio" name="condition" v-model="taskStatus" value="undone"><label for="undone">未提出</label>
              <input id="done" type="radio" name="condition" v-model="taskStatus" value="done"><label for="done">提出</label>
              <input id="complete" type="radio" name="condition" v-model="taskStatus" value="complete"><label for="complete">完了</label>
            </div>
          </div>
          <div class="item">
            <label class="label" for="comment">タスク内容</label>
            <textarea class="inputs" name="comment" v-model="content"></textarea>
          </div>
          <div class="btn-area" @click="closeModal">
            <button @click="create" value="投稿">投稿</button>
          </div>
        </div>
        <button @click="closeModal">キャンセル</button>
      </div>
    </div>
    <router-link to='/chat'>
      メッセージ
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      name: "",
      taskStatus: "undone",
      content: ""
    };
  },
  methods: {
    openModal() {
      this.show = true;
    },
    create() {
      let task = {
        name: this.name,
        taskStatus: this.taskStatus,
        content: this.content
      };
      this.$store.dispatch("addTask", task);
    },
    closeModal() {
      this.name= "",
      this.taskStatus= "undone",
      this.content= "",
      this.show = false;
    }
  }
};
</script>

<style scoped>
#Side {
  width: 210px;
  padding-bottom: 20px;
  background-color: #2A005F;
}

#Side h3 {
  font-size: 20px;
  font-weight: bold;
  height: 20px;
  color: #c4c4c4;
  margin-top: 40px;
  text-align: center;
  cursor: pointer;
}

#Side h3:hover {
  color: #ffffff;
  text-decoration: underline;
}

a {
  font-size: 20px;
  font-weight: bold;
  height: 20px;
  color: #c4c4c4;
  display: block;
  margin-top: 40px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  color: #ffffff;
  text-decoration: underline;
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