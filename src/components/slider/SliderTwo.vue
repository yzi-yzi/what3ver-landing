<template>
  <div class="slider-two">
    <div class="shane_tm_hero" id="home" data-style="three">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="30"
        shapeType="circle"
        :particleSize="6"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="180"
        :moveSpeed="6"
        :hoverEffect="true"
        hoverMode="repulse"
        :clickEffect="false"
        clickMode="push"
      >
      </vue-particles>
      <div class="background">
        <div
          class="image"
          :style="{ backgroundImage: 'url(' + sliderHero + ')' }"
        ></div>
      </div>
      <!-- End .background -->

      <div class="container">
        <div class="content">
          <div class="name_wrap">
            <h3>
              <span>N G Ơ</span> <br />Clothing<span
                class="overlay_effect"
              ></span>
            </h3>
          </div>
          <!-- End title -->

          <div class="job_wrap">
            <span class="job">
              Giản dị theo cách riêng
              <span class="overlay_effect"></span>
            </span>
          </div>
          <!-- End designation -->
          <Social />
        </div>
        <!-- End content -->

        <div class="shane_tm_down loaded">
          <div class="line_wrapper">
            <div class="line"></div>
          </div>
        </div>
      </div>
      <!-- End .container -->
    </div>
  </div>
</template>

<script>
import Social from "../SocialTwo.vue";
export default {
  components: {
    Social,
  },
  data() {
    return {
      sliderHero: require("../../assets/img/slider/1.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  @media screen and (max-width: 767px) {
    display: none;
  }
}
</style>
