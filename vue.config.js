module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/_size.scss"; 
        @import "@/assets/scss/_variable.scss";
         @import "@/assets/scss/_mixins.scss";`,
      },
    },
  },
};
