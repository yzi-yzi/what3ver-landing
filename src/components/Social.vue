<template>
  <div class="share">
    <span>Share:</span>
    <ul class="social">
      <li v-for="(social, i) in socialList" :key="i">
        <a :href="social.link" target="_blank" rel="noreferrer"
          ><img class="svg" :src="social.src" alt="social"
        /></a>
      </li>
    </ul>
    <!-- End. social -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialList: [
        {
          link: "https://shopee.vn/what3ver_boutique",
          src: require("../assets/img/svg/social/shopee.svg"),
        },
        {
          link: "https://www.facebook.com/what3verboutique",
          src: require("../assets/img/svg/social/facebook.svg"),
        },
        {
          link: "https://www.instagram.com/what3ver.boutique",
          src: require("../assets/img/svg/social/instagram.svg"),
        },
        {
          link: "https://www.tiktok.com/@serein0506",
          src: require("../assets/img/svg/social/tik-tok.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
