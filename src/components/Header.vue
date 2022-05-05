<template>
  <div>
    <scroll-fixed-header :fixed.sync="fixed" :threshold="56">
      <div class="shane_tm_topbar">
        <div class="topbar_inner">
          <div class="logo">
            <router-link to="/">
              <img src="../assets/img/logo/logo.png" alt="partners brand" />
            </router-link>
          </div>
          <!-- End logo -->
          <div class="menu">
            <scrollactive
              class="anchor_nav"
              bezier-easing-value=".5,0,.35,1"
              :offset="95"
              :duration="100"
              :alwaysTrack="true"
            >
              <a href="#home" class="scrollactive-item">Trang Chủ</a>
              <a href="#about" class="scrollactive-item">Giới Thiệu</a>
              <a href="#portfolio" class="scrollactive-item">Sản Phẩm</a>
              <a href="#news" class="scrollactive-item">Best Seller</a>
              <a href="#contact" class="scrollactive-item">Liên Hệ</a>
              <a
                class="white-fill-bg btn-outline btn_sm"
                target="_blank"
                rel="noreferrer"
                href="https://shopee.vn/what3ver_boutique"
              >
                Shop Now
              </a>
            </scrollactive>
          </div>
          <!-- End menu -->
        </div>
      </div>
      <!--  End shane_tm_topbar -->
    </scroll-fixed-header>

    <!-- Start shane mobile menu -->
    <div class="shane_tm_mobile_menu">
      <div class="topbar_inner">
        <div class="container bigger">
          <div class="topbar_in">
            <div class="logo">
              <router-link to="/">
                <img src="../assets/img/logo/logo.png" alt="partners brand" />
              </router-link>
            </div>
            <!-- End logo -->
            <div class="my_trigger">
              <div
                class="hamburger hamburger--collapse-r"
                :class="{ 'is-active': active }"
              >
                <div
                  class="hamburger-box"
                  @click="active = !active"
                  :aria-pressed="active ? 'true' : 'false'"
                >
                  <div class="hamburger-inner"></div>
                </div>
              </div>
              <!-- End hamburger menu -->
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown" :class="{ active: active }">
        <div class="container">
          <span
            class="close_menu"
            @click="active = !active"
            :aria-pressed="active ? 'true' : 'false'"
          >
            đóng
          </span>
          <div class="dropdown_inner">
            <ul class="anchor_nav">
              <li class="current">
                <a href="#home" @click="active = !active"> Trang Chủ </a>
              </li>
              <li>
                <a href="#about" @click="active = !active"> Giới Thiệu </a>
              </li>
              <li>
                <a href="#portfolio" @click="active = !active"> Danh Mục </a>
              </li>
              <li>
                <a href="#news" @click="active = !active"> Sản Phẩm </a>
              </li>
              <li>
                <a href="#contact" @click="active = !active"> Liên Hệ </a>
              </li>
              <li>
                <a
                  class="white-fill-bg btn-outline btn_sm"
                  target="_blank"
                  rel="noreferrer"
                  href="https://themeforest.net/"
                >
                  Shop Now
                </a>
              </li>
            </ul>
            <div class="social-menu">
              <Social />
            </div>
            <!-- End social share -->
          </div>
        </div>
        <!-- End container -->
      </div>
    </div>
    <!-- End shane mobile menu -->
  </div>
</template>

<script>
import Social from "../components/SocialTwo.vue";
export default {
  components: {
    Social,
  },
  data() {
    return {
      active: false,
      fixed: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo a img {
  height: 44px;
}
</style>
