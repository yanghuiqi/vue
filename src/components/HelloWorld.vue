<template>
  <div class="security-code-wrap">
    <input type="text" :value="currentValue" @change="handleChange" @keyup.up="handleUp" @keyup.down="handleDown">
  <button @click="handleDown" :disabled="currentValue <= min">-</button>
  <button @click="handleUp" :disabled="currentValue >= max">+</button>
  </div>
</template>



<script>
export default {
  name: "SecurityCode",
  // component properties
  props: {
    //props父元素传递过来 父-》子
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: Infinity
    },
    value: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    }
  },
  // variables
  data() {
    return {
      currentValue: this.value
    };
  },
  wtach: {
    //监听子组件currentVlaue是否改变
    //$emit 子——》父传递
    currentValue: function(val) {
      this.$emit("input", val); //指向当前实例
      //定义自定义函数进行通信
      this.$emit("on-change", val); //父组件  <input-component :on-change=""></input-component>
    },
    //监听父组件value改变
    value: function() {
      this.updateValue(val);
    }
  },
  methods: {
    updateValue: function(val) {
      if (val > this.max) {
        val = this.max;
      }
      if (val < this.min) {
        val = this.min;
      }
      this.currentValue = val;
    },
    handleDown: function() {
      this.currentValue -= this.step;
      if (this.currentValue <= this.min) {
        this.currentValue = this.min;
      }
    },
    handleUp: function() {
      this.currentValue += this.step;
      if (this.currentValue >= this.max) {
        this.currentValue = this.max;
      }
    }
  },
  mounted: function() {
    this.updateValue(this.value);
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.security-code-wrap {
  overflow: hidden;
}
.security-code-container {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
.security-code-container .field-wrap {
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: #fff;
  margin: 2px;
  color: #000;
}
.security-code-container .field-wrap .char-field {
  font-style: normal;
}
.input-code {
  position: absolute;
  left: -9999px;
  top: -99999px;
  width: 0;
  height: 0;
  opacity: 0;
  overflow: visible;
  z-index: -1;
}
</style>
