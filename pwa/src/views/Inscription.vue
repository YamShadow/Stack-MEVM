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
          </span>
          <span class="open-book">
            <p class="text-2xl leading-normal">Prénom</p>
            <input
              class="my-5"
              name="first_name"
              v-model="first_name"
              placeholder="Prénom"
              type="text"
              required
            >
          </span>
          <span class="open-book">
            <p class="text-2xl leading-normal">Nom</p>
            <input
              class="my-5"
              name="last_name"
              v-model="last_name"
              placeholder="Nom"
              type="text"
              required
            >
          </span>
          <span class="text-red" v-if="error">{{ error }}</span>
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
          if (response.data.error == null) {
            if (response.status == 200) {
              //Normalement cela devrait être une 201

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
                    this.$router.push("/login");
                  }
                })
                .catch(error => {
                  this.$router.push("/login");
                });
            }
          } else {
            this.error = responsa.data.error;
          }
        })
        .catch(errors => {
          this.error = "Email déjà utilisé";
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