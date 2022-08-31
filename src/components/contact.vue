<template>
  <div>
    <div class="container">
      <div class="container-box">
        <h2>{{ title }}</h2>
      </div>
      <div class="container-contact">
        <ul class="container-contact-items">
          <li class="container-contact list">
            <a
              href="https://drive.google.com/file/d/1m34c-vjKkHz2nFwyFkBNKRf561LyB1QL/view?usp=sharing"
              target="_blank"
              >Resume</a
            >
          </li>
          <li class="container-contact list">
            <a href="https://github.com/yash10005" target="_blank">
              <img src="../assets/images/github.png" alt="github-icon"
            /></a>
          </li>
          <li class="container-contact list">
            <a href="https://www.linkedin.com/in/yash-kashyap/" target="_blank">
              <img src="../assets/images/linkedin.png" alt="linkedin-icon"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "appContact",

  data() {
    return {
      title: "Connect with me",
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  @include div-center;
  flex-direction: column;

  h2 {
    font-size: 7rem;

    @media (max-width: 450px) {
      font-size: 6rem;
    }
  }
}

.container-contact {
  width: 45%;
  margin-top: 4rem;
  text-align: center;
}

.container-contact-items {
  display: flex;
  justify-content: space-between;
  margin-right: 4rem;
  align-items: center;
  padding: 0 1rem;
  list-style: none;

  .list:hover {
    transition: 0.5s;
    transform: scale(1.2);
  }

  .list a {
    text-decoration: none;
    color: $white;
    font-size: 1.6em;
    font-weight: 600;
  }

  .list img {
    height: 3rem;
    filter: brightness(0) invert(1);
  }
}
</style>
