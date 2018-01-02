<template>
  <div class="vue-swiper" id="vue-swiper">
    <div :style="{height: height}" class="img-item">
      <!--<img :src="imgList[index]" v-for="(img, index) in imgList" :key="index" 
                :style="{ left: 0 + 'px', top: 0 + 'px', transform: 'translateX(' + index * 100 + '%) scale(1)' }">-->
      <img :src="imgList[index]" v-for="(img, index) in imgList" :key="index" :style="{transform: 'translateX(' + transformXList[index] + '%) scale(1)'}" class="swiper-img-item" :class="activeIndex === index ? 'active': ''">
      <button type="button" class="arrow arrow-left" @click="prev">
        <i class="fa fa-angle-left fa-lg"></i>
      </button>
      <button type="button" class="arrow arrow-right" @click="next">
        <i class="fa fa-angle-right fa-lg"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: [String, Number],
      default: '300px',
    },
    imgList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      transformXList: [],
      activeIndex: 0,
    };
  },
  mounted() {
    for (let i = 0; i < this.imgList.length; i++) {
      this.transformXList.push((i - 1) * 100);
    }
  },
  methods: {
    next() {
      const imgLength = this.imgList.length;
      if (imgLength > 1) {
        for (let i = 0; i < this.transformXList.length; i++) {
          if (this.transformXList[i] === -100) {
            this.$set(this.transformXList, i, (imgLength - 2) * 100);
          } else {
            if (this.transformXList[i] === 100) {
              this.activeIndex = i;
            }
            this.$set(this.transformXList, i, this.transformXList[i] - 100);
          }
        }
      }
    },

    prev() {
      const imgLength = this.imgList.length;
      if (imgLength > 1) {
        for (let i = 0; i < this.transformXList.length; i++) {
          if (this.transformXList[i] === (imgLength - 2) * 100) {
            this.$set(this.transformXList, i, -100);
          } else {
            if (this.transformXList[i] === -100) {
              this.activeIndex = i;
            }
            this.$set(this.transformXList, i, this.transformXList[i] + 100);
          }
        }
      }
    },
  },
};
</script>

<style>
.vue-swiper .img-item {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.vue-swiper .img-item img {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 0px;
  /*transition: transform .4s ease-in-out;*/
}

.vue-swiper .img-item img.active {
  transition: transform .4s ease-in-out;
}

.vue-swiper .img-item .arrow {
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(31, 45, 61, .4);
  cursor: pointer;
}

.vue-swiper .img-item .arrow-left {
  left: 16px;
}

.vue-swiper .img-item .arrow-right {
  right: 16px;
}

.vue-swiper .img-item .arrow i {
  color: #fff;
}
</style>


