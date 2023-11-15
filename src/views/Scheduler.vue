<template>
  <div class="container-flex">
    <div class="menu">
      <p class="title-menu">Scheduler</p>
      <div>
        <div
          v-if="test"
          style="
            position: fixed;
            rotate: 30deg;
            bottom: -800px;
            animation: moveUpAnimation 15s forwards;
          "
        >
          <div
            style="
              padding: 30px;
              border-radius: 100px;
              background-color: white;
              color: black;
              font-size: 30px;
            "
          >
            Nice shoes
          </div>
          <img
            src="https://i.electrics01.com/i/904a8667e883.png"
            alt=""
            width="200"
          />
        </div>
        <div style="display: flex">
          <div
            class="menu-button"
            :class="{ active: option === '2023' }"
            @click="option = '2023'"
          >
            2023
          </div>
          <div
            class="menu-button"
            :class="{ active: option === '2024' }"
            @click="option = '2024'"
          >
            2024
          </div>
        </div>
        <table v-if="option === '2023'">
          <tr>
            <td style="width: 56px">Week A</td>
            <td style="width: 10vw">Period 1</td>
            <td style="width: 10vw">Period 2</td>
            <td style="width: 10vw">Period 3</td>
            <td style="width: 10vw">Period 4</td>
            <td style="width: 10vw">Period 5</td>
            <td style="width: 10vw">Period 6</td>
          </tr>
          <tr>
            <td>1</td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
          </tr>
          <tr>
            <td>Week B</td>
          </tr>
          <tr>
            <td>1</td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
          </tr>
        </table>
        <table v-else-if="option === '2024'">
          <tr>
            <td style="width: 56px">Week</td>
            <td style="width: 10vw">Period 1</td>
            <td style="width: 10vw">Period 2</td>
            <td style="width: 10vw">Period 3</td>
            <td style="width: 10vw">Period 4</td>
            <td style="width: 10vw">Period 5</td>
            <td style="width: 10vw">Period 6</td>
          </tr>
          <tr>
            <td>1</td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour + '80' }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour + '80' }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour + '80' }">
              {{ class1 }}
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour + '80' }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour + '80' }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour + '80' }">
              {{ class5 }}
            </td>
          </tr>
        </table>
        <div class="class-input">
          <p class="medium">Class1:</p>
          <input v-model="class1" />
          <p class="medium">Colour:</p>
          <input v-model="class1Colour" />
        </div>
        <div class="class-input">
          <p class="medium">Class2:</p>
          <input v-model="class2" />
          <p class="medium">Colour:</p>
          <input v-model="class2Colour" />
        </div>
        <div class="class-input">
          <p class="medium">Class3:</p>
          <input v-model="class3" />
          <p class="medium">Colour:</p>
          <input v-model="class3Colour" />
        </div>
        <div class="class-input">
          <p class="medium">Class4:</p>
          <input v-model="class4" />
          <p class="medium">Colour:</p>
          <input v-model="class4Colour" />
        </div>
        <div class="class-input">
          <p class="medium">Class6:</p>
          <input v-model="class5" />
          <p class="medium">Colour:</p>
          <input v-model="class5Colour" />
        </div>
        <div class="class-input">
          <p class="medium">Class6:</p>
          <input v-model="class6" />
          <p class="medium">Colour:</p>
          <input v-model="class6Colour" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const test = ref(false)
const option = ref("2023")
const class1 = ref("Freea")
const class2 = ref("Englishd")
const class3 = ref("Physicsa")
const class4 = ref("Freeb")
const class5 = ref("SoftwareDeva")
const class6 = ref("MathsMethodsa")
const class1Colour = ref("880000")
const class2Colour = ref("808000")
const class3Colour = ref("008080")
const class4Colour = ref("800080")
const class5Colour = ref("000080")
const class6Colour = ref("000000")

setTimeout(() => {
  test.value = true
}, 10000 + Math.random() * 20000)
</script>
