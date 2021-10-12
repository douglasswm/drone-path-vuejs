<script>
import { h } from 'vue'
import { reactive } from 'vue';
export default {
  data() {
    return {
      row: [['UA','UA'],['UA','UA']],
      visible: false,
      instructions: [],
      position: {
        x: 0,
        y: 0
      },
      order: {
        dist: 50,
        angle: 0
      }
    }
  },
  methods: {
    selectBox(x, y) {
      this.visible = true;
      console.log(x,y)
      this.position.x = x
      this.position.y = y
    },
    addColumn(value){
      console.log(value)
      // this.row[value].push("#ffffff")
      this.row.forEach(function (item, index) {
        console.log(item,index)
        item.push("UA")
      })
    },
    removeColumn(value) {
      console.log(value)
      this.row.forEach(function (item, index) {
        console.log(item,index)
        item.pop()
      })
    },
    addRow(){
      console.log(this.row[0].length)
      let loop = this.row[0].length
      let arr = []
      for (var i = 0; i < loop; i++) {
        arr.push("UA")
      }
      console.log(arr)
      this.row.push(arr)
    },
    removeRow() {
      this.row.pop()
    },
    setInstruction() {
      let temp = {
        dist: this.order.dist,
        angle: this.order.angle
      }
      this.instructions.push(temp)
      this.row[this.position.x][this.position.y] = 'A'
      this.visible = false
    },
    white() {
      return {
        "background": 'white',
      };
    },
    red() {
      return {
        "background": 'red',
      };
    }
  }
}
</script>
<template>
  <a-modal v-model:visible="visible" title="Set Instructions" @ok="setInstruction">
    <p>X: {{ position.x }}</p>
    <p>Y: {{ position.y }}</p>
    <div>
      <p>Distance(cm):</p>
      <a-input-number v-model:value="order.dist" placeholder="Enter Distance" />
    </div>
    <div style="margin-top: 16px;">
      <p>Direction:</p>
      <a-radio-group v-model:value="order.angle" button-style="solid">
        <a-radio-button value="270">Left</a-radio-button>
        <a-radio-button value="90">Right</a-radio-button>
        <a-radio-button value="0">Front</a-radio-button>
        <a-radio-button value="180">Back</a-radio-button>
      </a-radio-group>
    </div>
  </a-modal>
  <div>
    <div class="inline" v-for="value, index in row">
      <div class="box" v-for="value,idx in row[index]" @click="selectBox(index, idx)" >{{value}}</div>
    </div>
  </div>
  <div class="margin">
    <div>
      <h4>Column: {{ row[0].length }}</h4>
      <a-button @click="removeColumn(index)">-</a-button><a-button @click="addColumn(index)">+</a-button>
    </div>
    <div>
      <h4>Rows: {{row.length}}</h4><a-button @click="removeRow">-</a-button><a-button @click="addRow">+</a-button>
    </div>
  </div>
  <h4>{{ instructions }}</h4>
  <h4>{{ order.angle }}</h4>
</template>
<style scoped>
.box {
  width: 50px; 
  height: 50px; 
  border: 1px solid black;
  display: inline-block;
}
.inline {
  height: 50px;
}
.margin{
  margin-top: 16px;
}
</style>
