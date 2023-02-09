<template>
  <div class="home">
    <appHeader></appHeader>
    <div class="hero-section">
      <div class="hero-section left">
        <div class="hero-section title">
          <h1>I create <span>user</span> experiences</h1>
        </div>
        <div class="hero-section job-title">
          <p>yash kashyap / Frontend Developer</p>
        </div>
      </div>
      <div class="hero-section right">
        <div class="hero-section img-box">
          <img src="../assets/images/laptop.png" alt="title-image" />
        </div>
      </div>
    </div>
    <div class="pointer">
      <button class="pointer scroll-button">Skills</button>
    </div>
    <appSkills></appSkills>
    <div class="pointer">
      <button class="pointer scroll-button">Projects</button>
    </div>

    <appProject></appProject>
    <appContact></appContact>
  </div>
</template>
<script>
import appHeader from "./header";
import appProject from "./projects";
import appContact from "./contact";
import appSkills from "./skills";

export default {
  name: "appHome",
  components: {
    appHeader,
    appProject,
    appContact,
    appSkills,
  },
  data() {
    return {
      title: "I create exper",
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  max-width: 90%;
  margin: 0 auto;

  @media (max-width: 450px) {
    max-width: 100%;
  }
}
.hero-section {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  @media (max-width: 950px) {
    margin-top: 15rem;
  }

  span {
    animation: changeColor 5s linear infinite;
  }

  .left {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .title {
    font-size: 5rem;
    animation: transitionleft 0.9s ease-in;

    @media (max-width: 1100px) {
      font-size: 4rem;
    }
  }

  .job-title {
    font-size: 2.2rem;
    flex: 1;
    margin-top: 6rem;
    font-weight: lighter;
    animation: transitionIn 1s ease-in;

    p {
      @media (max-width: 450px) {
        font-size: 1.9rem;
      }
    }
  }

  .img-box img {
    height: 24rem;
    animation: transitionright 1s ease-in;
  }
}
.pointer {
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-top: 3rem;
  position: relative;
  animation: transitionOut 1s ease-in;

  ::after {
    content: "⊿";
    position: absolute;
    top: 3rem;
    transform: rotateZ(45deg);
  }

  .scroll-button {
    content: "";
    border: none;
    outline: none;
    background: transparent;
    color: $white;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
  }
}

@media (max-width: 900px) {
  .hero-section .title {
    font-size: 4rem;
  }
}
@media (max-width: 750px) {
  .hero-section .title {
    // font-size: 3rem;
  }
}
@media (max-width: 650px) {
  .hero-section .title {
    font-size: 3.5rem;
  }
}
@media (max-width: 450px) {
  .hero-section .title {
    font-size: 2.5rem;
  }
}
</style>
