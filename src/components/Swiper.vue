<template>
  <!-- <div class="banner"> -->
    <swiper :options="swiperOption"   class="banner">
      <swiper-slide>
        <img src="../assets/img/banner.png">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/banner1.jpg">
      </swiper-slide>
      <!-- <swiper-slide>
        <img src="../assets/l3.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/l6.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/l7.jpg">
      </swiper-slide> -->
    <div class="swiper-scrollbar"  slot="scrollbar"></div>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-next" slot="button-next" ></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    </swiper>
    <!--以下看需要添加-->
   
  <!-- </div> -->
</template>
<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        speed: 1000,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
// scoped 只会作用于这个组件、这个页面，不会污染。
<style scoped>
.banner{
  width: 100%;
  height: 4.293333rem
}
</style>






// vue3.0用vue-awesome-swiper
// 使用新版vue-awesome-swiper出现了一些bug

// vue-awesome-swiper组件pagination小圆点不显示问题

// 不会自动播放

// swiper没有css

// 参考如下配置

// 基本使用方法
// 1.安装

// cnpm install vue-awesome-swiper --save

 

// 2.引用

// 复制代码
// /*全局引入*/
//     import VueAwesomeSwiper from 'vue-awesome-swiper'
//     import 'swiper/dist/css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。
//     Vue.use(VueAwesomeSwiper, /* { default global options } */)


//  /*组件方式引用*/
//     import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
//     import { swiper, swiperSlide } from 'vue-awesome-swiper'
//     export default {
//     components: {
//       swiper,
//       swiperSlide
//     }
// 复制代码
 

// 3.使用
// data() {
//     return {
//       swiperOption: {  
//         notNextTick: true, // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
//         autoplay: {
//           delay: 1000, //自动切换的时间间隔，单位ms
//           stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
//           stopOnLastSlide: true, //如果设置为true，当切换到最后一个slide时停止自动切换。
//           disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。
//           reverseDirection: false, //开启反向自动轮播。
//           waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
//         },
//         loop: true,
//         direction: 'horizontal',
//         grabCursor: true,
//         setWrapperSize: true,
//         autoHeight: true,
//         pagination: {
//           el: '.swiper-pagination'
//         },
//         centeredSlides: true,
//         paginationClickable: true,
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev'
//         },
//         keyboard: true,
//         mousewheelControl: true,
//         observeParents: true, // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
//         debugger: true  
//       } 
//     }
//   },
// 复制代码
 

// 4.可选参数

// 复制代码
// fadeEffect: {
//     crossFade: false,
//   }

// cubeEffect: {
//     slideShadows: true, //开启slide阴影。默认 true。
//     shadow: true, //开启投影。默认 true。
//     shadowOffset: 100, //投影距离。默认 20，单位px。
//     shadowScale: 0.6 //投影缩放比例。默认0.94。
//   },
// coverflowEffect: {
//     rotate: 30, //slide做3d旋转时Y轴的旋转角度。默认50。
//     stretch: 10, //每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
//     depth: 60, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
//     modifier: 2, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
//     slideShadows : true //开启slide阴影。默认 true。
//   },
// flipEffect: {
//     slideShadows : true, //slides的阴影。默认true。
//     limitRotation : true, //限制最大旋转角度为180度，默认true。
//   }
// zoom: {
//      maxRatio: 5, //最大倍数
//      minRatio: 2, //最小倍数
//      toggle: false, //不允许双击缩放，只允许手机端触摸缩放。
//      containerClass: 'my-zoom-container', //zoom container 类名
//    },
// navigation: {
//     nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
//     prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
//     hideOnClick: true, //点击slide时显示/隐藏按钮
//     disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
//     hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
//    },

// pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     //type: 'fraction',
//     //type : 'progressbar',
//     //type : 'custom',
//     progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
//     bulletElement : 'li', //设定分页器指示器（小点）的HTML标签。
//     dynamicBullets: true,  //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
//     dynamicMainBullets: 2, //动态分页器的主指示点的数量
//     hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
//     clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。

//   },
// scrollbar: {
//      el: '.swiper-scrollbar',
//      hide: true, //滚动条是否自动隐藏。默认：false，不会自动隐藏。
//      draggable: true, //该参数设置为true时允许拖动滚动条。
//      snapOnRelease: true, //如果设置为false，释放滚动条时slide不会自动贴合。
//      dragSize: 30, //设置滚动条指示的尺寸。默认'auto': 自动，或者设置num(px)。
//    },
