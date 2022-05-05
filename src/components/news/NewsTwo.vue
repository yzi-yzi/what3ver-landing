<template>
  <div class="news_list">
    <ul>
      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 50 }">
          <div class="image">
            <img src="../../assets/img/placeholders/4-3.jpg" alt="thumb" />
            <div
              class="main"
              :style="{ backgroundImage: 'url(' + imgSrc + ')' }"
            ></div>
          </div>
          <!-- End image -->

          <div class="details">
            <h3 class="title">
              Áo sơ mi trắng hoa nhí, chiffon tay dài xinh xắn
            </h3>
            <p class="date">
              By <a href="#">What3ver Boutique</a> <span>hôm nay</span>
            </p>
          </div>
          <!-- End details -->
        </div>
      </li>
      <!-- End li -->

      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 100 }">
          <div class="image">
            <img src="../../assets/img/placeholders/4-3.jpg" alt="thumb" />
            <div
              class="main"
              :style="{ backgroundImage: 'url(' + imgSrc2 + ')' }"
            ></div>
          </div>
          <!-- End image -->

          <div class="details">
            <h3 class="title">
              Váy hoa nhí tay ngắn Minette Dress vải voan mềm mại
            </h3>
            <p class="date">
              By <a href="#">What3ver Boutique </a> <span>hôm nay</span>
            </p>
          </div>
          <!-- End details -->
        </div>
      </li>
      <!-- End li -->

      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 150 }">
          <div class="image">
            <img src="../../assets/img/placeholders/4-3.jpg" alt="thumb" />
            <div
              class="main"
              :style="{ backgroundImage: 'url(' + imgSrc3 + ')' }"
            ></div>
          </div>
          <!-- End image -->

          <div class="details">
            <h3 class="title">
              Váy babydoll hoa nhí Nalini Dress phong cách retro pháp
            </h3>
            <p class="date">
              By <a href="#">What3ver Boutique</a> <span>hôm nay</span>
            </p>
          </div>
          <!-- End details -->
        </div>
      </li>
      <!-- End li -->
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      date: new Date(),
      imgSrc: require("../../assets/img/news/13.jpg"),
      imgSrc2: require("../../assets/img/news/22.jpg"),
      imgSrc3: require("../../assets/img/news/26.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped></style>
