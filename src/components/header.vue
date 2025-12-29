<template>
  <div>
    <header>
      <nav class="home-nav">
        <div class="home-nav-logo">
          <a href="/"> <img src="../assets/images/y.png" alt="logo" /></a>
        </div>
        <ul class="home-nav-items">
          <li class="home-nav-items list">
            <a href="https://drive.google.com/file/d/1W5ojwOzpuFeYxnHT0J8shQ9cXQCBWwN4/view?usp=sharing"
              target="_blank">Resume</a>
          </li>
          <li class="home-nav-items list">
            <a href="https://github.com/Enthusiastic-yash" target="_blank">
              <img src="../assets/images/github.png" alt="github-icon" /></a>
          </li>
          <li class="home-nav-items list">
            <a href="https://www.linkedin.com/in/yash-kashyap/" target="_blank">
              <img src="../assets/images/linkedin.png" alt="linkedin-icon" /></a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: "appHeader",
};
</script>
<style lang="scss" scoped>
.home-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $black;
  margin-top: 4rem;

  .home-nav-logo img {
    height: 5rem;
    filter: brightness(0) invert(1);
  }
}

.home-nav-items {
  display: flex;
  justify-content: space-between;
  margin-right: 4rem;
  align-items: center;
  padding: 0 1rem;
  animation: transitionIn 0.5s;

  .list a {
    text-decoration: none;
    color: $white;
    font-size: 1.6em;
    font-weight: 600;

    @media (max-width: 750px) {
      font-size: 2rem;
    }

    &:hover {
      transition: 0.5s;
      transform: scale(1.2);
    }
  }

  .list img {
    height: 3rem;
    filter: brightness(0) invert(1);
  }
}
</style>
