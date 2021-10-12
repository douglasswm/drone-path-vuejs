<script>
import { h } from 'vue'
import { reactive } from 'vue';
export default {
  data() {
    return {
      row: [
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false],
        [false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false]
      ],
      visible: false,
      scaleVisible: false,
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
    getBatteryInfo() {
      const api = 'http://localhost:5000/batt'
      this.axios.get(api).then((response) => {
        console.log(response.data)
        alert(response.data)
      })
    },
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
        item.push(false)
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
        arr.push(false)
      }
      console.log(arr)
      this.row.push(arr)
    },
    removeRow() {
      this.row.pop()
    },
    setInstruction() {
      if ( this.instructions.length < 1 ) {
        let temp = {
          dist: 0,
          angle: 0
        }
        this.instructions.push(temp)
        this.row[this.position.x][this.position.y] = true
        this.visible = false
      } else {
        let temp = {
          dist: this.order.dist,
          angle: this.order.angle
        }
        this.instructions.push(temp)
        this.row[this.position.x][this.position.y] = true
        this.visible = false
      }
    },
    openSetScale() {
      this.scaleVisible = true
    },
    setScale() {
      this.scaleVisible = false
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
      <a-input-number v-model:value="order.dist" disabled/>
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
  <a-modal v-model:visible="scaleVisible" title="Set Map Scale" @ok="setScale">
    <div>
      <p>Grid : Distance(cm) Ratio</p>
      <a-input-number v-model:value="order.dist" placeholder="Enter Distance" />
    </div>
  </a-modal>
  <div class="bg">
    <div class="inline" v-for="value, index in row">
      <div :class="{touched: value, box: true}" v-for="value,idx in row[index]" @click="selectBox(index, idx)" ></div>
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
  <a-button class="margin" @click="openSetScale">Set Scale</a-button>
  <a-button class="margin" @click="getBatteryInfo">Check Drone Battery</a-button>
  <p class="margin">Scale = 1 Grid : {{ order.dist }}cm</p>
  <p class="margin">Command: </p>
  <p class="margin">{{ instructions }}</p>
</template>
<style scoped>
.box {
  width: 20px; 
  height: 20px; 
  border: 1px solid black;
  display: inline-block;
}
.inline {
  height: 20px;
}
.margin{
  margin-top: 16px;
}
.touched {
  background: green;
}
.bg {
  background-image: url("../assets/bg.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
  height: 500px;
}
</style>
