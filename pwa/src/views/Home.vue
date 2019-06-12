<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <a class="u-link-white mb-20" href="#" @click="toggleTimer">{{ time }}</a>
      <div>
        <a class="rounded-full py-2 px-4 bouton openSans font-bold" href="#" @click="reset">reset</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      time: 10,
      isRunning: false,
      interval: null
    };
  },
  methods: {
    toggleTimer() {
      if (this.isRunning) {
        clearInterval(this.interval);
        console.log("timer stops");
      } else {
        this.interval = setInterval(this.incrementTime, 1000);
      }
      this.isRunning = !this.isRunning;
    },
    incrementTime() {
      this.time = parseInt(this.time) - 1;
      if (this.time == 0) {
        clearInterval(this.interval);
        this.isRunning = !this.isRunning;
        console.log("SAVVVVVVEE");
      }
    },
    reset() {
      this.time = 10;
    }
  }
};
</script>


<style scoped lang="scss">
.bouton {
  width: 50%;
  margin: 20px auto;
  padding: 15px;
}
.contrast {
  background-color: #4500b6;
  color: white;
}
</style>

