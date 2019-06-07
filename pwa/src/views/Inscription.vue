<template>
  <div>
    <div class="inscription">
      <form method="post" @submit="send">
        <div class="contenu pt-12">
          <span class="open-book">
            <p class="text-2xl leading-normal">Email</p>
            <input
              class="my-5"
              name="email"
              v-model="email"
              placeholder="email"
              type="email"
              required
            >
          </span>
          <span class="open-book">
            <p class="text-2xl leading-normal">Password</p>
            <input class="my-5" v-model="password" name="password" type="password" required>

            <span class="text-red" v-if="error">{{ error }}</span>
          </span>
        </div>
        <SubmitRound text="Connexion" white></SubmitRound>
      </form>
    </div>
  </div>
</template>

<script>
import SubmitRound from "@/components/inputs/SubmitRound.vue";

export default {
  name: "inscription",
  components: {
    SubmitRound
  },
  data() {
    return {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      error: null
    };
  },
  methods: {
    send(e) {
      e.preventDefault();
      this.axios
        .post("/api/auth/register", {
          email: this.email,
          password: this.password,
          first_name: this.first_name,
          last_name: this.last_name
        })
        .then(response => {
          if (response.status == 201) {
            this.$store.dispatch("storeUserId", {
              userID: response.data.id
            });

            this.axios
              .post("/api/auth/login", {
                email: this.email,
                password: this.password,
                remember_me: true
              })
              .then(response => {
                localStorage.setItem("token", response.data.access_token);

                this.axios.defaults.headers.common = {
                  "X-Requested-With": "XMLHttpRequest",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${response.data.access_token}`
                };

                this.$router.push("/");
              })
              .catch(error => {
                this.$router.push("/login");
              });
          }
        })
        .catch(errors => {
          this.error = "Email déjà utilisé ou mots de passes non identiques";
        });
    }
  }
};
</script>

<style scoped lang="scss">
.inscription {
  height: 100%;
  margin-top: 60px;

  .logo {
    position: fixed;
    top: -50px;
    left: -65px;
    width: 80%;
    opacity: 0.3;
  }
  .contenu {
    margin: 0 34px;
    text-align: left;
  }
}

.open-book {
  p:first-of-type {
    text-indent: 0;
  }

  p:first-of-type:first-letter {
    float: left;
    font: 700 3em/0.65 "sunshiney", sans-serif;
    padding: 0.15em 0.15em 0 0;
    text-transform: uppercase;
  }
}
</style>