<template>
  <div>
    <div class="circle-box">
      <div class="circle"></div>
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { mapGetters } from "vuex";
export default {
  name: "appLoader",
  data() {
    return {};
  },
  methods: {
    callMe() {
      gsap.set(".circle", {
        translateY: -500,
        opacity: 1,
      });

      gsap.to(".circle", {
        duration: 1.5,
        translateY: 100,
        ease: "bounce",
        onComplete: function () {
          gsap.to(".circle", { duration: 2, scale: 100 });
        },
      });
    },
  },

  computed: {
    ...mapGetters(["isplay"]),
  },

  created() {
    setTimeout(() => {
      this.$store.dispatch("setPlay");
    }, 3000);
  },

  mounted() {
    window.addEventListener("load", () => this.callMe());
  },
};
</script>
<style lang="scss" scoped>
.circle-box {
  height: 100vh;
  background-color: $white;
  overflow: hidden;
  @include div-center;

  .circle {
    width: 100px;
    height: 100px;
    background-color: $black;
    border-radius: 50%;
  }
}
</style>
