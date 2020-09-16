<template>
  <div id="ChatForm">
    <!--フォームの表示ボタン-->
    <v-btn
        color="#ffffff"
        dark
        center
        fab
        fixed
        right
        @click="showCreateForm"
    >
      <img src="../assets/createMessage.png">
    </v-btn>
    <v-dialog v-model="displayForm" max-width="500px">
      <!--コメント入力フォーム-->
      <v-card>
        <v-container>
          <h2>メッセージ内容</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="inputName"
                :rules="commentRules"
                label="宛先"
                required
            ></v-text-field>
            <v-text-field
                v-model="inputComment"
                :rules="commentRules"
                label="コメント"
                required
            ></v-text-field>
            <div class="btn-area">
              <div class="btn-1">
                <v-btn
                  color="#2A005F"
                  height="35px"
                  :disabled="!valid"
                  @click="addComment"
                >
                  <p>送信</p>
                </v-btn>
              </div>
              <div class="btn-2">
                <v-btn
                  color="#cccccc"
                  height="35px"
                  @click="hideCreateForm"
                >
                  <p>戻る</p>
                </v-btn>
              </div>
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {db} from '../plugins/firebase';

  export default {
    name: 'CreateForm',
    data: () => ({
      // form入力データ
      inputName: "",
      inputComment: "",
      // バリデーション
      valid: true,
      commentRules: [
        v => !!v || 'コメントは必須項目です',
      ],
      // Formダイアログの表示可否
      displayForm: false,
    }),
    methods: {
      // コメント追加
      addComment() {
        const now = new Date()
        // コメントをFirestoreへ登録
        db.collection('comments').add({
          content1: this.inputName,
          content2: this.inputComment,
          avatar: 'https://picsum.photos/50?image=' + (Math.floor(Math.random() * 400) + 1),
          createdAt: now
        })
        // ダイアログを閉じる
        this.hideCreateForm()
      },
      // Formの初期化
      clear() {
        this.$refs.form.reset()
      },
      // Formダイアログの表示
      showCreateForm() {
        this.displayForm = true
      },
      //
      // Formダイアログの非表示
      hideCreateForm() {
        this.clear()
        this.displayForm = false
      },
    },
  }
</script>

<style scoped>
img {
  width: 30px;
  height: 40px;
}

h2 {
  text-align: center;
}

.btn-area {
  padding: 10px;
  justify-content: space-around;
  text-align: center;
}

.btn-1 {
  margin-bottom: 10px;
}

p {
  color: #ffffff;
  font: 15px;
  padding-top: 15px;
}
</style>
