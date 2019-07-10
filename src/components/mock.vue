 <template >
  <div>
    <ul>
      <li v-for="item in list" :key="item.index">
        <div class="top">
          <img :src="item.img" alt />
        </div>
        <div class="cen">
          <div v-if="!item.isShow">{{item.text }}</div>
          <input @blur="item.isShow = !item.isShow" v-focus v-else v-model="item.text" />
        </div>
        <div class="bot">
          <button @click="del(item.id)">删除</button>
          <button @click="item.isShow = !item.isShow">编辑</button>
          <button @click="postImg(item.img)">查看大图</button>
        </div>
      </li>
    </ul>
    <div class="mask" v-if="bigImg" @click=" bigImg = '' ">
      <img @click.stop :src="bigImg" alt />
    </div>
  </div>
</template>
 <script>
import Mock from "mockjs";
var Random = Mock.Random;

export default {
  name: "Mock",

  data() {
    return {
      bigImg: "",
      list: [],
      
    };
  },
  directives: {
    focus: {
      inserted(el, binding) {
        el.focus();
      },
      binding() {}
    }
  },
  methods: {
    del(val) {
      var index = this.list.findIndex(ele => ele.id == val);
      this.list.splice(index, 1);
    },
    postImg(val) {
      this.bigImg = val;
    },
    init() {
      const _this = this;
      for (var i = 0; i < 5; i++) {
      var obj={
        id: Random.guid(),
        img: Random.dataImage("200x100"),
        text: Random.ctitle(),
        isShow: false
      }
        _this.list.push(obj);
      }
       
    }
  },
  created() {
    this.init();
  }
};
</script>
<style scoped>
.clearfix:after {
  /* 给浮动元素的父级元素加上class='clearfix' */
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.clearfix {
  zoom: 1; /* 在IE6/7中,利用zoom:1触发haslayout属性 */
}
ul {
  width: 900px;
  margin: 50px auto;
}
li {
  border: 1px solid red;
  width: 200px;
  float: left;
  margin: 20px;
}
li img {
  width: 100%;
}
.mask {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
}
.mask img {
  width: 80%;
  z-index: 99999;
}
</style>