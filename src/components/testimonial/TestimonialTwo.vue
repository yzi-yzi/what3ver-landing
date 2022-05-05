<template>
  <hooper :settings="hooperSettings">
    <slide v-for="(tesimonial, i) in testimonialContent" :key="i">
      <ul>
        <li class="item">
          <div class="texts">
            <p>
              {{ tesimonial.desc }}
            </p>
            <div class="author">
              <div class="image">
                <div
                  class="main"
                  :style="{ backgroundImage: 'url(' + tesimonial.imgSrc + ')' }"
                ></div>
              </div>
              <div class="short">
                <h3 class="author">
                  <span>{{ tesimonial.name }}</span>
                </h3>
                <h3 class="job">
                  <span>{{ tesimonial.designation }}</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      testimonialContent: [
        {
          name: "hongvan",
          designation: "Người mua hàng",
          imgSrc: require("../../assets/img/feedback/1.jpg"),
          desc: `Váy xinh lắm lắm luôn, tặng kèm scrunchies cũng xinh xẻo nữa.
            Thấy chưa nhiều lượt đánh giá nên ban đầu cũng lo lắng,
            đến khi nhận hàng về thì đẹp bất ngờ, vừa rẻ vừa đẹp thướt tha ý.
            Sẽ ủng hộ shop nhiều nhiều ạaa 😍😍`,
        },
        {
          name: "buithinhan",
          designation: "Người mua hàng",
          imgSrc: require("../../assets/img/feedback/2.jpg"),
          desc: `Váy xinh thực sự, chất mềm mát và thơm lắm luôn. Mình order nhầm hoả tốc mà 10h30 đêm rồi shop vẫn tìm shipper giúp mình. Cảm ơn shop nhiều nhé`,
        },
        {
          name: "truongthitam",
          designation: "Người mua hàng",
          imgSrc: require("../../assets/img/feedback/3.jpg"),
          desc: `Túi xinh xắn cute đáng iu ghê, màu nào cũng xinh :< Cô chủ đáng iu, nhiệt tình tư vấn, rất là hài lòng luônnnn. Toẹt vờiiii`,
        },
      ],
      hooperSettings: {
        infiniteScroll: true,
        wheelControl: false,
        autoPlay: true,
        mouseDrag: false,
        transition: 600,
        playSpeed: 5000,
        itemsToShow: 1,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
