<template>
  <div class="container">
    <div
      class="positon-relative"
      v-scroll-reveal="{ delay: 50, distance: '20px' }"
    >
      <div class="shane_tm_title">
        <div class="title_flex">
          <div class="left">
            <span>Sản Phẩm</span>
            <h3>Nổi Bật</h3>
          </div>
        </div>
      </div>
      <!-- End shane_tm_title -->
      <div class="portfolio_filter">
        <ul>
          <li>
            <a
              v-on:click="activetab = 1"
              :class="[activetab === 1 ? 'active' : '']"
              >Tất Cả</a
            >
          </li>
          <!-- End All for tabcontent 1 -->
          <li>
            <a
              v-on:click="activetab = 2"
              :class="[activetab === 2 ? 'active' : '']"
              >Váy</a
            >
          </li>
          <!-- End Vimeo tabcontent 2 -->
          <li>
            <a
              v-on:click="activetab = 3"
              :class="[activetab === 3 ? 'active' : '']"
              >Áo Sơ Mi</a
            >
          </li>
          <!-- End .Youtube tabcontent 3 -->
          <li>
            <a
              v-on:click="activetab = 4"
              :class="[activetab === 4 ? 'active' : '']"
              >Phụ Kiện</a
            >
          </li>
          <!-- End Mix tabcontent 4 -->
        </ul>
      </div>
      <!-- End .portfolio-filter -->
    </div>

    <div v-if="activetab === 1" class="tabcontent">
      <div class="portfolio_list">
        <ul class="gallery_zoom">
          <CoolLightBox :items="allItems" :index="index" @close="index = null">
          </CoolLightBox>
          <li v-for="(image, imageIndex) in allItems" :key="imageIndex">
            <div class="inner" @click="index = imageIndex">
              <div class="entry shane_tm_portfolio_animation_wrap">
                <img class="image" :src="image.thumb" alt="Portfolio" />
              </div>
              <!-- End .entry -->
              <div class="mobile_title">
                <h3>Xem Sản Phẩm</h3>
                <span>{{ image.portfolioType }}</span>
              </div>
            </div>
          </li>
          <!-- End li -->
        </ul>
      </div>

      <!-- End .portfolio_list -->
    </div>
    <!-- End .tabcontent 1 -->

    <div v-if="activetab === 2" class="tabcontent">
      <div class="portfolio_list">
        <ul>
          <CoolLightBox :items="vayItems" :index="index" @close="index = null">
          </CoolLightBox>
          <li v-for="(image, imageIndex) in vayItems" :key="imageIndex">
            <div class="inner" @click="index = imageIndex">
              <div class="entry tokyo_tm_portfolio_animation_wrap">
                <img class="image" :src="image.thumb" alt="Portfolio" />
              </div>
              <!-- End .entry -->
              <div class="mobile_title">
                <h3>Xem Sản Phẩm</h3>
                <span>{{ image.portfolioType }}</span>
              </div>
            </div>
          </li>
          <!-- End li -->
        </ul>
        <!-- End .portfolio_list -->
      </div>
    </div>
    <!-- End .tabcontent 2 -->

    <div v-if="activetab === 3" class="tabcontent">
      <div class="portfolio_list">
        <ul>
          <CoolLightBox
            :items="aosomiItems"
            :index="index"
            @close="index = null"
          >
          </CoolLightBox>
          <li v-for="(image, imageIndex) in aosomiItems" :key="imageIndex">
            <div class="inner" @click="index = imageIndex">
              <div class="entry tokyo_tm_portfolio_animation_wrap">
                <img class="image" :src="image.thumb" alt="Portfolio" />
              </div>
              <!-- End .entry -->
              <div class="mobile_title">
                <h3>Xem Sản Phẩm</h3>
                <span>{{ image.portfolioType }}</span>
              </div>
            </div>
          </li>
          <!-- End li -->
        </ul>
        <!-- End .portfolio_list -->
      </div>
    </div>
    <!-- End .tabcontent 3 -->

    <div v-if="activetab === 4" class="tabcontent">
      <div class="portfolio_list">
        <ul>
          <CoolLightBox
            :items="phukienItems"
            :index="index"
            @close="index = null"
          >
          </CoolLightBox>

          <li v-for="(image, imageIndex) in phukienItems" :key="imageIndex">
            <div class="inner" @click="index = imageIndex">
              <div class="entry tokyo_tm_portfolio_animation_wrap">
                <img class="image" :src="image.thumb" alt="Portfolio" />
              </div>
              <!-- End .entry -->
              <div class="mobile_title">
                <h3>Xem Sản Phẩm</h3>
                <span>{{ image.portfolioType }}</span>
              </div>
            </div>
          </li>
          <!-- End li -->
        </ul>
        <!-- End .portfolio_list -->
      </div>
    </div>
    <!-- End .tabcontent 4 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activetab: 1,
      allItems: [
        {
          src: "https://vimeo.com/43338103",
          thumb: require("../../assets/img/portfolio/23.jpg"),
          portfolioName: "My Song",
          portfolioType: "Váy",
        },
        {
          src: require("../../assets/img/portfolio/2.jpg"),
          thumb: require("../../assets/img/portfolio/2.jpg"),
          portfolioName: "Fashion Memory",
          portfolioType: "Áo Sơ Mi",
        },
        {
          src: require("../..//assets/img/portfolio/3.jpg"),
          thumb: require("../../assets/img/portfolio/3.jpg"),
          portfolioName: "Childhood Memory",
          portfolioType: "Áo Sơ Mi",
        },
        {
          src: "https://youtu.be/ZOoVOfieAF8",
          thumb: require("../../assets/img/portfolio/31.jpg"),
          portfolioName: "Túi vải canvas",
          portfolioType: "Túi Canvas",
        },
        {
          src: "https://youtu.be/ZOoVOfieAF8",
          thumb: require("../..//assets/img/portfolio/5.jpg"),
          portfolioName: "University Life",
          portfolioType: "Áo Sơ Mi",
        },
        {
          src: require("../..//assets/img/portfolio/6.jpg"),
          thumb: require("../..//assets/img/portfolio/6.jpg"),
          portfolioName: "Beautiful Memory",
          portfolioType: "Áo Sơ Mi",
        },
      ],
      vayItems: [
        {
          src: "https://vimeo.com/43338103",
          thumb: require("../../assets/img/portfolio/21.jpg"),
          portfolioName: "My Sound",
          portfolioType: "Váy",
        },
        {
          src: "https://vimeo.com/176916362",
          thumb: require("../../assets/img/portfolio/22.jpg"),
          portfolioName: "Old is Gold",
          portfolioType: "Váy",
        },
        {
          src: "https://vimeo.com/176916362",
          thumb: require("../../assets/img/portfolio/23.jpg"),
          portfolioName: "Old is Gold",
          portfolioType: "Váy",
        },
        {
          src: "https://vimeo.com/176916362",
          thumb: require("../../assets/img/portfolio/28.jpg"),
          portfolioName: "Old is Gold",
          portfolioType: "Váy",
        },
        {
          src: "https://vimeo.com/176916362",
          thumb: require("../../assets/img/portfolio/25.jpg"),
          portfolioName: "Old is Gold",
          portfolioType: "Váy",
        },
        {
          src: "https://vimeo.com/176916362",
          thumb: require("../../assets/img/portfolio/26.jpg"),
          portfolioName: "Old is Gold",
          portfolioType: "Váy",
        },
      ],
      aosomiItems: [
        {
          src: "https://youtu.be/YlBTaj0cXQY",
          thumb: require("../../assets/img/portfolio/1.jpg"),
          portfolioName: "Behance Design",
          portfolioType: "Áo Sơ Mi",
        },
        {
          src: "https://youtu.be/ZOoVOfieAF8",
          thumb: require("../../assets/img/portfolio/4.jpg"),
          portfolioName: "Themeforest Design",
          portfolioType: "Áo Sơ Mi",
        },
        {
          src: "https://youtu.be/YlBTaj0cXQY",
          thumb: require("../../assets/img/portfolio/7.jpg"),
          portfolioName: "Behance Design",
          portfolioType: "Áo Sơ Mi",
        },
        {
          src: "https://youtu.be/ZOoVOfieAF8",
          thumb: require("../../assets/img/portfolio/8.jpg"),
          portfolioName: "Themeforest Design",
          portfolioType: "Áo Sơ Mi",
        },
        {
          src: "https://youtu.be/YlBTaj0cXQY",
          thumb: require("../../assets/img/portfolio/11.jpg"),
          portfolioName: "Behance Design",
          portfolioType: "Áo Sơ Mi",
        },
        {
          src: "https://youtu.be/ZOoVOfieAF8",
          thumb: require("../../assets/img/portfolio/12.jpg"),
          portfolioName: "Themeforest Design",
          portfolioType: "Áo Sơ Mi",
        },
      ],
      phukienItems: [
        {
          src: require("../../assets/img/portfolio/31.jpg"),
          thumb: require("../../assets/img/portfolio/31.jpg"),
          portfolioName: "Beautiful Memory",
          portfolioType: "Túi Canvas",
        },
        {
          src: require("../../assets/img/portfolio/32.jpg"),
          thumb: require("../../assets/img/portfolio/32.jpg"),
          portfolioName: "Childhood Memory",
          portfolioType: "Dây Cột Tóc",
        },
      ],
      index: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
