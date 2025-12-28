<template>
  <div>
    <div class="container">
      <div class="skill-box">
        <ul class="skillbox">
          <div class="skillbox-first">
            <li>
              <img src="icons/html.png" alt="html" />
              <span>HTML</span>
            </li>
            <li>
              <img src="icons/css.png" alt="css" />
              <span>Css</span>
            </li>
            <li>
              <img src="icons/javascript.png" alt="javascript" />
              <span>Java script</span>
            </li>
            <li>
              <img src="icons/nuxt.png" alt="nuxt" />
              <span>Nuxt Js</span>
            </li>
          </div>
          <div class="skillbox-second">
            <li>
              <img src="icons/github.png" alt="github" />
              <span>Git hub</span>
            </li>
            <li>
              <img src="icons/sass.png" alt="sass" />
              <span>Sass</span>
            </li>
            <li>
              <img src="icons/tailwind.png" alt="tailwind" />
              <span>Tailwind</span>
            </li>
          </div>
          <div class="skillbox-third">
            <li>
              <img src="icons/vue.png" alt="vue" />
              <span>Vue js </span>
            </li>
            <li>
              <img src="icons/bootstrap.png" alt="bootstrap" />
              <span>Bootstrap</span>
            </li>
            <li>
              <img src="icons/firebase.png" alt="firebase" />
              <span>Firebase</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "appSkills",
};
</script>
<style lang="scss" scoped>
.container {
  @include div-center;
  flex-direction: column;
  margin-top: 5rem;

  h2 {
    font-size: 7rem;

    @media (max-width: 450px) {
      font-size: 6rem;
    }
  }
}

.skillbox {
  margin-top: 5rem;
  width: 78vw;
  display: flex;
  justify-content: space-around;

  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 4rem;

    span {
      margin-top: 1rem;
      font-size: 2em;
      text-align: start;
    }
  }

  img {
    width: 20px;
    cursor: pointer;
    margin-left: 0.6rem;

    @media (min-width: 650px) {
      width: 50px;
    }
  }
}
</style>
