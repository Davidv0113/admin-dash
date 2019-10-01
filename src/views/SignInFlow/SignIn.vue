<template>
  <div
    class="container"
    :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
  >
    <RequestAccount />
    <div class="bounceInLeft">
      <div class="login">
        <img src="@/assets/white-logo.svg" v-show="isDarkMode" />
        <img src="@/assets/dark-logo.svg" v-show="!isDarkMode" />
        <h4
          :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
        >Sign Into Your Admin View</h4>

        <input
          type="email"
          placeholder="Email"
          :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
        />
        <input
          type="password"
          placeholder="Password"
          :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
        />

        <button>Sign In</button>
        <router-link
          to="/recover"
          :class="{'light-link': isDarkMode, 'dark-link' : !isDarkMode}"
        >Forgot your password?</router-link>
        <ThemeSwitch />
      </div>
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 400px;
  text-align: center;
}

.bounce {
  animation-duration: 5s;
  animation-delay: 0s;
}
</style>
