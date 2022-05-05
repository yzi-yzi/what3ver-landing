<template>
  <div class="about_inner">
    <div class="left">
      <div class="image">
        <img src="../../assets/img/placeholders/1-1.jpg" alt="placeholder" />
        <div
          class="main"
          v-scroll-reveal="{ delay: 20 }"
          :style="{ backgroundImage: 'url(' + aboutImg + ')' }"
        ></div>
      </div>
      <!-- End image  -->
    </div>
    <!-- End left -->

    <div class="right">
      <div class="shane_tm_title">
        <span v-scroll-reveal="{ delay: 20 }">Giới Thiệu</span>
        <h3 v-scroll-reveal="{ delay: 40 }">
          HÃY ĐỂ WHAT3VER GIÚP BẠN TRỞ NÊN ĐẶC BIỆT
        </h3>
      </div>
      <div class="text" v-scroll-reveal="{ delay: 60 }">
        <p>
          What3ver là tổng hợp những items mà chúng mình tâm đắc nhất, từ VÁY
          ĐẦM, ÁO SƠ MI, CHÂN VÁY, CROPTOP, ÁO KIỂU NỮ thời trang được update
          mới nhất, được nghiên cứu chọn lọc một cách kỹ lưỡng, thiết kế độc đáo
          giúp các bạn nữ che đi khuyết điểm và tôn lên vẻ đẹp của bản thân.
        </p>
      </div>
      <div class="shane_tm_button" v-scroll-reveal="{ delay: 80 }">
        <a href="https://shopee.vn/what3ver_boutique" target="_blank">
          XEM THÊM
        </a>
      </div>
    </div>
    <!-- End right -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutImg: require("../../assets/img/about/2.jpg"),
    };
  },
};
</script>
