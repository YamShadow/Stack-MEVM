<template>
  <button
    type="submit"
    class="rounded-full py-2 px-4 bouton openSans font-bold"
    :class="{ 'white': white}"
  >Connexion</button>
</template>

<script>
export default {
  name: "SubmitRound",
  props: {
    white: { type: Boolean, required: false, default: false },
    text: String
  }
};
</script>

<style scoped lang="scss">
.bouton {
  width: 50%;
  margin: 20px auto;
  padding: 15px;
}
.white {
  background-color: #4500b6;
  color: white;
}
</style>
