<template>
  <div class="score">
    <h1>Scores</h1>
    <div
      v-for="partie in parties"
      :key="partie._id"
      class="mt-8 pb-4 flex justify-center dashed-space-1px"
    >
      <div class="pr-64">{{ partie.points }} pts</div>
      <div>{{ user.first_name+" "+user.last_name }} - {{partie.date}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "score",
  components: {},
  data() {
    return {
      parties: [],
      error: null
    };
  },
  mounted() {
    this.axios
      .get("/api/game/parties")
      .then(response => {
        this.parties = response.data.data.parties;
      })
      .catch(errors => {
        this.error = errors.data;
      });
  },
  computed: {
    user: {
      get() {
        return this.$store.getters.currentAppUserData;
      },
      set(value) {
        this.$store.dispatch("storeUser", {
          user: value
        });
      }
    }
  }
};
</script>
