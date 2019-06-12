<template>
  <div class="login">
    <form method="post" @submit="send" class="indexUp">
      <div class="contenu pt-12">
        <p class="text-2xl leading-tight">Login</p>
        <input class="my-5 w-1/3" v-model="email" name="email" type="text" required>
        <p class="text-2xl leading-tight">Password</p>
        <input class="my-5 w-1/3" v-model="password" name="password" type="password" required>
      </div>
      <span class="text-red" v-if="error">{{ error }}</span>
      <div class="groupBouton mt-10">
        <SubmitRound text="Connexion" white></SubmitRound>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import SubmitRound from "@/components/inputs/SubmitRound.vue";

export default {
  name: "home",
  components: {
    SubmitRound
  },
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
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
  },
  methods: {
    send(e) {
      e.preventDefault();

      this.axios
        .post("/api/auth/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          if (response.data.error == null) {
            localStorage.setItem("token", response.data.data.token);
            this.$store.dispatch("storeUser", {
              user: response.data.data.user
            });

            this.axios.defaults.headers.common = {
              "X-Requested-With": "XMLHttpRequest",
              "Content-Type": "application/json",
              Authorization: `Bearer ${response.data.token}`
            };

            this.$router.push("/");
          } else {
            this.error = response.data.error;
          }
        })
        .catch(error => {
          this.$router.push("/login");
        });
    }
  }
};
</script>
