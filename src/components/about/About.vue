<template>
  <div class="about_inner">
    <div class="left">
      <div class="image">
        <img src="../../assets/img/placeholders/1-1.jpg" alt="placeholder" />
        <div
          class="main"
          :style="{ backgroundImage: 'url(' + aboutImg + ')' }"
        ></div>
      </div>
      <!-- End image  -->
    </div>
    <!-- End left -->

    <div class="right">
      <div class="shane_tm_title">
        <span>About Us</span>
        <h3>Creative Independent Web Developer based in Australia</h3>
      </div>
      <div class="text">
        <p>
          I'm Creative Independent Web Developer, and I'm very passionate and
          dedicated to my work. With 20 years experience as a professional web
          developer, I have acquired the skills and knowledge necessary to make
          your project a success. I enjoy every step of the design process, from
          discussion and collaboration.
        </p>
      </div>
      <div class="shane_tm_button">
        <a :href="cv" download> Download CV </a>
      </div>
    </div>
    <!-- End right -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutImg: require("../../assets/img/about/4.jpg"),
      cv: require("../../assets/img/resume/resume.jpg"),
    };
  },
};
</script>
