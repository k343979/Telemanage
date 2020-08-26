<template>
  <div id="ChatForm">
    <div class="createForm" @click="openForm">
      <img src="../assets/createMessage.png" />
      <div class="overlay" v-if="show">
        <div class="form">
          <h3>メッセージ作成</h3>
          <div class="content" ref="form">
            <textarea v-model="inputComment" required></textarea>
          </div>
        </div>
        <div class="btn-area">
          <button @click="addComment">送信する</button>
        </div>
        <button @click="closeForm">キャンセル</button>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../plugins/firebase'
export default {
  data() {
    return {
      show: false,
      inputComment: "",
    };
  },
  methods: {
    openForm() {
      this.show = true;
    },
    addComment() {
      const now = new Date()
      db.collection('comment').add({
        content: this.inputComment,
        createdAt: now
      })
      this.hideCreateForm
    },
    clear() {
      this.$refs.form.reset
    },
    hideCreateForm() {
      this.clear()
      this.show = false
    },
    closeForm() {
      this.show = false;
    }
  }
};
</script>

<style scoped>
.creteForm {
  position: relative;
}

img {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
}
</style>

