<template>
  <div>
    <div class="container">
      <div class="row" v-for="project in projects" :key="project.id">
        <div class="container-left">
          <img :src="require(`@/assets/images/${project.image}`)" alt="facebook login" />
        </div>
        <div class="container-right">
          <h1 class="container-right title">{{ project.title }}</h1>
          <p class="container-right description">
            {{ project.description }}
          </p>
          <h2 class="container-right sub-title">Tool used:</h2>
          <ul class="container-right items" v-for="list in project.tools" :key="list.id">
            <li class="container-right list">{{ list }}</li>
          </ul>

          <div class="container-cta">
            <a :href="project.link" target="_blank">
              <button class="container-cta action-btn">Open Site</button></a>
            <a :href="project.code" target="_blank">
              <button class="container-cta action-btn">view code</button></a>
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
          title: "Full-Stack Nuxt AI Suite (SaaS)", // Highly improved Title
          description:
            "A full-stack Software as a Service (SaaS) platform built with Nuxt 4 and Nuxt UI, offering a versatile collection of AI-powered tools. Key features include background removal, object removal from images using the Cloudinary API, a Resume Reviewer, Article Writer, and a Blog Title Generator. The application utilizes the Gemini/OpenAI API for core AI functionalities, manages user subscriptions via Polar, and ensures data persistence with the Turso database and Drizzle ORM for type-safe operations. Zod is used for robust runtime validation. and Better-Auth for secure authentication",
          tools: ["Nuxt", "NuxtUI", "JavaScript", "Drizzle (ORM)", "Turso", "Polar (For Payment)", "Gemini/OpenAI API", "Cloudinary API", "Zod", "Better-Auth"],
          image: "nuxt-ai.png",
          link: "https://nuxt-ai-xi.vercel.app/",
          code: "https://github.com/Enthusiastic-yash/Nuxt-ai-sass"
        },
        {
          title: "Global Vue Weather Tracker",
          description:
            "Emphasizes real-time data, API integration, and the framework (Vue.js).",
          tools: ["Html", "css", "javascript", "Vue.js"],
          image: "weather.png",
          link: "https://global-weather-report.netlify.app/",
          code: "https://github.com/Enthusiastic-yash/weather-app"
        },
        {
          title: "Full-Stack Firebase Music Platform",
          description:
            "Highlights Full-Stack nature, user interaction (upload, listen, comment), and the key technologies (Vue.js, Tailwind, Firebase).",
          tools: ["Html", "scss", "Vue.js", "Firebase"],
          image: "music.png",
          link: "https://music-example-ruddy.vercel.app/",
          code: "https://github.com/Enthusiastic-yash/Music-app"
        },
        {
          title: "Real-Time Geo IP Tracker",
          description:
            "Focuses on real-time capability, location tracking, and map visualization.",
          tools: ["Html", "Tailwind css", "javascript", "Vue.js"],
          image: "location.png",
          link: "https://location-ip-tracker.netlify.app/",
          code: "https://github.com/Enthusiastic-yash/Ip-Tracker"
        },
        {
          title: "Responsive SCSS Hotel Landing Page",
          description:
            "Stresses responsive design and the use of SCSS for styling.",
          tools: ["Html", "scss"],
          image: "hotel.png",
          link: "https://yash-travel.netlify.app/",
          code: "#"
        },
        {
          title: "Animated SCSS/JS Tour Booking Page",
          description:
            "Highlights advanced, vanilla animation and the Tour Booking niche.",
          tools: ["Html", "scss", "javascript"],
          image: "nature.png",
          link: "https://yash-nature.netlify.app/",
          code: "#"
        },
        {
          title: "Modern Property Showcase Landing Page",
          description:
            "Simple, professional title, emphasizing a showcase purpose.",
          tools: ["Html", "scss", "javascript"],
          image: "property.png",
          link: "https://yash-property.netlify.app/",
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
