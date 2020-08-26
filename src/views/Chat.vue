<template>
  <div id="Chat">
    <ChatBoard/>
    <ChatForm/>
  </div>
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