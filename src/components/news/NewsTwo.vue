<template>
  <div class="news_list">
    <ul>
      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 50 }">
          <a class="image" :href="link1" target="_blank">
            <img src="../../assets/img/placeholders/4-3.jpg" alt="thumb" />
            <div
              class="main"
              :style="{ backgroundImage: 'url(' + imgSrc + ')' }"
            ></div>
          </a>
          <!-- End image -->

          <div class="details">
            <h3 class="title">
              <a :href="link1" target="_blank"
                >Áo sơ mi trắng hoa nhí, chiffon tay dài xinh xắn</a
              >
            </h3>
            <p class="date">
              Ưu đãi
              <a target="_blank" href="https://shopee.vn/what3ver_boutique"
                >Shopee</a
              >
              <span>giá 219.000₫</span>
            </p>
          </div>
          <!-- End details -->
        </div>
      </li>
      <!-- End li -->

      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 100 }">
          <a class="image" :href="link2" target="_blank">
            <img src="../../assets/img/placeholders/4-3.jpg" alt="thumb" />
            <div
              class="main"
              :style="{ backgroundImage: 'url(' + imgSrc2 + ')' }"
            ></div>
          </a>
          <!-- End image -->

          <div class="details">
            <h3 class="title">
              <a :href="link2" target="_blank"
                >Váy hoa nhí tay ngắn Minette Dress vải voan mềm mại</a
              >
            </h3>
            <p class="date">
              Ưu đãi
              <a href="https://shopee.vn/what3ver_boutique">Shopee </a>
              <span>giá 299.000₫</span>
            </p>
          </div>
          <!-- End details -->
        </div>
      </li>
      <!-- End li -->

      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 150 }">
          <a class="image" :href="link3" target="_blank">
            <img src="../../assets/img/placeholders/4-3.jpg" alt="thumb" />
            <div
              class="main"
              :style="{ backgroundImage: 'url(' + imgSrc3 + ')' }"
            ></div>
          </a>
          <!-- End image -->

          <div class="details">
            <h3 class="title">
              <a :href="link3" target="_blank"
                >Váy babydoll hoa nhí Nalini Dress phong cách retro pháp</a
              >
            </h3>
            <p class="date">
              Ưu đãi
              <a target="_blank" href="https://shopee.vn/what3ver_boutique"
                >Shopee</a
              >
              <span>giá 315.000₫</span>
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
      link1:
        "https://shopee.vn/%C3%81o-s%C6%A1-mi-tr%E1%BA%AFng-hoa-nh%C3%AD-%C3%A1o-chiffon-tay-d%C3%A0i-ho%E1%BA%A1-ti%E1%BA%BFt-hoa-th%E1%BB%9Di-trang-xinh-x%E1%BA%AFn-cho-n%E1%BB%AF-i.735128598.15979794105?sp_atk=68f93532-b347-4fd7-b8a0-07a62af7e3df&xptdk=68f93532-b347-4fd7-b8a0-07a62af7e3df",
      link2:
        "https://shopee.vn/V%C3%A1y-hoa-nh%C3%AD-tay-ng%E1%BA%AFn-Minette-Dress-v%E1%BA%A3i-voan-m%E1%BB%81m-m%E1%BA%A1i-tho%C3%A1ng-m%C3%A1t-m%E1%BA%B7c-t%C3%B4n-d%C3%A1ng-tr%E1%BA%AFng-b%C3%B4ng-%C4%91en-vintage-i.735128598.10591895786?sp_atk=75eebdb8-1e04-4106-8181-4f10db8c3ff6",
      link3:
        "https://shopee.vn/V%C3%A1y-babydoll-hoa-nh%C3%AD-Nalini-Dress-V%C3%A1y-hoa-nh%C3%AD-tay-ph%E1%BB%93ng-c%E1%BB%95-vu%C3%B4ng-phong-c%C3%A1ch-retro-ph%C3%A1p-th%E1%BB%9Di-trang-xinh-x%E1%BA%AFn-i.735128598.16637240041",
    };
  },
};
</script>

<style lang="scss" scoped>
.image {
  display: block;
}
.title a {
  color: #000;
  text-decoration: none;
  &:hover {
    color: #000 !important;
  }
}
</style>
