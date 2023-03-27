<template>
  <div>
    <div class="container">
      <div class="row" v-for="project in projects" :key="project.id">
        <div class="container-left">
          <img
            :src="require(`@/assets/images/${project.image}`)"
            alt="facebook login"
          />
        </div>
        <div class="container-right">
          <h1 class="container-right title">{{ project.title }}</h1>
          <p class="container-right description">
            {{ project.description }}
          </p>
          <h2 class="container-right sub-title">Tool used:</h2>
          <ul
            class="container-right items"
            v-for="list in project.tools"
            :key="list.id"
          >
            <li class="container-right list">{{ list }}</li>
          </ul>

          <div class="container-cta">
            <a :href="project.link" target="_blank">
              <button class="container-cta action-btn">Open Site</button></a
            >
            <a :href="project.code" target="_blank">
              <button class="container-cta action-btn">view code</button></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "appProject",
  data() {
    return {
      projects: [
        {
          title: "weather app",
          description:
            "I created this website with the help of vue.js to get the weather of any city around the world. I have used open weather API to get information on real-time weather data",
          tools: ["Html", "css", "javascript", "Vue.js"],
          image: "weather.png",
          link: "https://global-weather-report.netlify.app/",
          code: "https://github.com/Enthusiastic-yash/weather-app"
        },
        {
          title: "Invoice app",
          description:
            "This web app is used for taking the record of the invoice we can create update and delete the invoice data",
          tools: [
            "HTML",
            "Tailwind css",
            "javascript",
            "vue-router",
            "vue js ",
            "firebase",
          ],
          image: "invoice.png",
          link: "https://invoice-recode.netlify.app/",
          code: "https://github.com/Enthusiastic-yash/Invoice-app"
        },
        {
          title: "Music player",
          description:
            "I Made this application with Vue.js and Tailwind CSS, and I used firebase as the backend, User can upload their music and other users can listen as well and also they can comment on them ",
          tools: ["Html", "scss", "Vue.js", "Firebase"],
          image: "music.png",
          link: "https://music-example-ruddy.vercel.app/",
          code: "https://github.com/Enthusiastic-yash/Music-app"
        },
        {
          title: "hotel traveling",
          description:
            "I created this beautiful Hotel website landing page with Html, and SCSS, with a fully responsive design",
          tools: ["Html", "scss"],
          image: "hotel.png",
          link: "https://yash-travel.netlify.app/",
          code: "#"
        },
        {
          title: "outdoor travel",
          description:
            "This one is another Tour booking website landing page with lots of animation without any library ",
          tools: ["Html", "scss", "javascript"],
          image: "nature.png",
          link: "https://yash-nature.netlify.app/",
          code : "#"
        },
        {
          title: "property landing",
          description:
            "Another Property website landing page created with Html, SCSS",
          tools: ["Html", "scss", "javascript"],
          image: "property.png",
          link: "https://yash-property.netlify.app/",
          code: "#"
        },
        {
          title: "facebook login",
          description:
            "I created this Facebook login landing page with HTML, CSS, and javascript  Open in Incognito mode",
          tools: ["Html", "css", "javascript"],
          image: "facebook.png",
          link: "https://enthusiastic-yash.github.io/facebook-landing/",
          code: "#"
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.row {
  width: 100%;
  margin: 30rem auto;
  display: flex;
  justify-content: center;

  @media (max-width: 950px) {
    flex-direction: column;
    text-align: center;
  }
}
.container-left {
  margin-right: 5rem;

  @media (max-width: 950px) {
    margin-right: 0;
  }
}

.container {
  margin-top: 15rem;

  img {
    // height: 40rem;
    width: 60rem;
    border-radius: 1rem;
    box-shadow: 1px 1px 10px #fff;
    margin-bottom: 5rem;

    @media (max-width: 1280px) {
      width: 40rem;
    }

    @media (max-width: 950px) {
      width: 60rem;
    }
    @media (max-width: 450px) {
      width: 50rem;
    }
    @media (max-width: 350px) {
      width: 40rem;
    }
  }
}
.container-right {
  width: 300px;

  @media (max-width: 950px) {
    margin: 0 auto;
  }

  @media (max-width: 450px) {
    width: 250px;
  }
  @media (max-width: 350px) {
    width: 200px;
  }

  .title,
  .sub-title {
    font-size: 2rem;
    font-weight: 600;
    color: $white;
    text-transform: capitalize;
    margin: 1.5rem 0;
    text-align: start;
  }
  .description {
    font-size: 1.6rem;
    text-align: start;
    color: $white;
    line-height: 2.5rem;

    @media (max-width: 650px) {
      font-size: 2.2rem;
      line-height: 3.2rem;
    }
  }

  .items {
    font-size: 1.3rem;
    margin-left: 1.2rem;
  }
  .list {
    text-align: start;
    font-size: 1.3rem;

    @media (max-width: 650px) {
      font-size: 2.2rem;
      line-height: 3.2rem;
    }
  }
}

.container-cta {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 2rem;

  :last-child {
    margin-left: 1rem;
  }

  @media (max-width: 950px) {
    justify-content: flex-start;
  }

  a {
    text-decoration: none;
    color: $black;
    font-size: 1.2rem;
  }

  .action-btn {
    padding: 1rem;
    background-color: $white;
    font-size: 1.6rem;
    border-radius: 1.2rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      transition: 0.5s;
      transform: scale(1.1);
    }
  }
}
</style>
