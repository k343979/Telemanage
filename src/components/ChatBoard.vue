<template>
  <div id="ChatBoard">
    <div class="btn-area">
      <router-link to="/">
        ＜ 戻る
      </router-link>
    </div>
    <v-list three-line>
      <template v-for="(comment, index) in comments">
        <v-list-item
            :key="index"
            avatar
        >
          <v-list-item-avatar>
            <img :src="comment.avatar">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-subtitle class="text--primary subheading">
              {{comment.content}}
            </v-list-item-subtitle>
            <v-list-item-subtitle class="timestamps">
              {{comment.createdAt.toDate().toLocaleString()}}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="comment.id"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
  import {db} from '../plugins/firebase';

  export default {
    name: "ChatBoard",
    data: () => ({
      comments: [],
    }),
    firestore() {
      return {
        // firestoreのcommentsコレクションを参照
        comments: db.collection('comments').orderBy('createdAt')

      }
    },
  }
</script>

<style scoped>
.btn-area {
  padding: 10px 10px;
  border-bottom: 1px solid #c4c4c4;
}

a {
  font-size: 20px;
  font-weight: bold;
  height: 20px;
  color: #2A005F;
  text-decoration: none;
  cursor: pointer;
}

.text--primary, .timestamps {
  padding-left: 20px;
}
</style>