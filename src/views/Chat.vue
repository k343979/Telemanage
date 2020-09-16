<template>
  <v-app>
    <v-container>
      <ChatForm/>
      <ChatBoard/>
    </v-container>
  </v-app>
</template>

<script>
import ChatBoard from "../components/ChatBoard"
import ChatForm from "../components/ChatForm"
export default {
  components: {
    ChatBoard,
    ChatForm,
  }
};
</script>