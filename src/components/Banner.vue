<template>
  <div class="banner">
    <img :src="require('@/assets/images/logo.png')" class="logo-image" />
    <!-- <img :src="require('@/assets/images/background-1.jpg')" class="hero-image" /> -->
    <!-- <img :src="require('@/assets/images/background-1.jpg')" class="banner_image" /> -->
    <div class="slider">
      <div class="background-shape"></div>
      <agile ref="main" :options="options1" :as-nav-for="asNavFor1" class="main">
        <div v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`" class="slide">
          <div class="d">
            <img class="r-img" :src="slide.img" />
            <p class="r-name">{{ slide.name }}</p>
          </div>
          <br />
          <p class="r-price">{{ slide.price }}</p>
        </div>
        <div class="slide"></div>
      </agile>
      <agile ref="thumbnails" :options="options2" :as-nav-for="asNavFor2" class="thumbnails">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="`slide--${index}`"
          @click="$refs.thumbnails.goTo(index)"
          class="slide slide--thumbniail"
        >
          <img :src="slide.img" />
        </div>
      </agile>
    </div>
    <template slot="prevButton">
      <i class="fas fa-chevron-left"></i>
    </template>
    <template slot="nextButton">
      <i class="fas fa-chevron-right"></i>
    </template>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  name: "banner",
  data() {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false
      },
      options2: {
        autoplay: true,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 1000,
            settings: {
              navButtons: true
            }
          }
        ]
      },
      slides: [
        {
          img: require("@/assets/images/pic-1.png"),
          name: "Chicken Shish Kebab",
          price: "22$"
        },
        {
          img: require("@/assets/images/pic-2.png"),
          name: "Chicken with Greek Salad",
          price: "21$"
        },
        {
          img: require("@/assets/images/pic-3.png"),
          name: "Hummus with Fattoosh",
          price: "15$"
        },
        {
          img: require("@/assets/images/pic-4.png"),
          name: "Chicken Pasta",
          price: "10$"
        },
        {
          img: require("@/assets/images/pic-5.png"),
          name: "Grilled Salmon",
          price: "25$"
        }
      ]
    };
  },
  components: {
    agile: VueAgile
  },
  mounted() {
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

body,
html {
  font-family: "Roboto", sans-serif;
  height: 100%;
  margin: 0;
}
.banner {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/images/background-2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
.logo-image {
  position: absolute;
  top: 30%;
  left: 10%;
  height: 10rem;
}
.slider {
  position: relative;
  top: 30%;
  left: 49%;
  width: 37%;
  height: 30%;
}
.r-name {
  padding-left: 10px;
}
.r-price {
  font-size: 30px;
  padding: 20px;
}
.background-shape {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  width: 92%;
  height: 200px;
  -ms-transform: skewY(0deg);
  -webkit-transform: skewY(0deg);
  transform: skewY(0deg);
  border-radius: 30px;
  position: absolute;
  top: -27px;
  left: 50px;
}
.main {
  margin-bottom: 30px;
  /* padding: 0 30%; */
  width: 100%;
}

.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}

.thumbnails .agile__nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.thumbnails .agile__nav-button--prev {
  left: -45px;
}

.thumbnails .agile__nav-button--next {
  right: -45px;
}

.agile__nav-button:hover {
  color: #888;
}

.agile__dot {
  margin: 0 10px;
}

.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}

.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
}
.thumbnails .agile__slide--active {
  background-color: #888;
  border-radius: 10px;
  padding: 10px;
}
.slide {
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  justify-content: center;
  display: flex;
  flex-direction: row;
  width: 333px;
}
.d {
  display: flex;
  width: 100%;
  align-items: center;
}
.d img {
  width: 155px;
}

.slide--thumbniail {
  cursor: pointer;
  height: 100px;
  padding: 0 5px;
  transition: opacity 0.3s;
}

.slide--thumbniail:hover {
  opacity: 0.75;
}

.slide img {
  object-fit: cover;
  object-position: center;
  width: 100%;
}

/* .slide .banner {
  position: relative;
} */

.slide .banner_image {
  position: relative;
  width: 22px;
}

.hero-image {
  /* background-size: cover; */
  /* width: 22px; */
  opacity: 0.5;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  /* display: flex;
  height: 450px;
  justify-content: center; */
}
</style>