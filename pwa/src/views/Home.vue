<template>
  <div class="home">
    <p>Clique sur le pointeur un maximum de fois en 10 secondes !</p>
    <img alt="Click here" class="picture" @click="play" src="../assets/click.png">
    <div>
      <p>
        Temps restant :
        <span class="font-bold">{{ time }} {{ (time == 1) ? 'seconde' : 'secondes' }}</span>
      </p>
      <p>
        Nombre de points :
        <span class="font-bold">{{ points }} points</span>
      </p>
      <div class="mt-4">
        <a v-if="time == 0" class="bouton font-bold" href="#" @click="reset">Rejouer ?</a>
        <router-link to="/tap" v-if="time == 0" class="bouton font-bold">Scores</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      time: 10,
      points: 0,
      isRunning: false,
      interval: null,
      error: null
    };
  },
  methods: {
    play() {
      if (this.time > 0) {
        if (!this.isRunning) {
          this.isRunning = !this.isRunning;
          this.interval = setInterval(this.incrementTime, 1000);
        }
        this.points++;
      }
    },
    incrementTime() {
      this.time = parseInt(this.time) - 1;
      if (this.time == 0) {
        clearInterval(this.interval);
        this.isRunning = !this.isRunning;
        this.saveScore();
      }
    },
    reset() {
      this.time = 10;
      this.points = 0;
    },
    saveScore() {
      this.axios
        .post("/api/game/parties", {
          points: this.points
        })
        .then(response => {
          if (response.data.error == null) {
          } else {
            this.error = response.data.error;
          }
        })
        .catch(error => {
          this.error = "Erreur durant le call AJAX";
        });
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

.picture {
  margin: 3rem auto;
  size: 2rem;
  height: 300px;
  cursor: pointer;
}
</style>

