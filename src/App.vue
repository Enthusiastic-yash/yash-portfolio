<template>
  <div id="app">
    <appLoader :class="{ active: isplay }"></appLoader>
    <div class="content" :class="{ active: !isplay }">
      <app-home></app-home>
    </div>
  </div>
</template>

<script>
import appHome from "./components/home.vue";
import appLoader from "./components/preloader.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    appHome,
    appLoader,
  },

  computed: {
    ...mapGetters(["isplay"]),
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  max-width: 75vw;
  margin: 0 auto;
  overflow: hidden;
}

html {
  font-size: 62.5%;

  @media (max-width: 1150px) {
    font-size: 54.5%;
  }
  @media (max-width: 900px) {
    font-size: 45.5%;
  }
  @media (max-width: 750px) {
    font-size: 40%;
  }
  @media (max-width: 650px) {
    font-size: 34%;
  }
}

body {
  font-family: "Roboto", sans-serif;
  background-color: $black;
  color: $white;
}

.active {
  display: none;
  opacity: 0;
}

@keyframes transitionIn {
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes transitionOut {
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes transitionleft {
  from {
    transform: translateX(-10%);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes transitionright {
  from {
    transform: translateX(10%);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes changeColor {
  0% {
    color: #fc466b;
  }
  20% {
    color: #fdbb2d;
  }
  40% {
    color: #833ab4;
  }
  60% {
    color: #22c1c3;
  }
  80% {
    color: #4158d0;
  }
  100% {
    color: #623aa2;
  }
}
</style>
