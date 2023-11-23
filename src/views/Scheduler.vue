<template>
  <div class="container-flex">
    <div class="menu">
      <p class="title-menu">Scheduler</p>
      <div>
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
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
          </tr>
          <tr>
            <td>Week B</td>
          </tr>
          <tr>
            <td>1</td>
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
          </tr>
        </table>
        <table v-else-if="option === '2024'">
          <tr>
            <td style="width: 56px">Day</td>
            <td style="width: 10vw">Period 1</td>
            <td style="width: 10vw">Period 2</td>
            <td style="width: 10vw">Period 3</td>
            <td style="width: 10vw">Period 4</td>
            <td style="width: 10vw">Period 5</td>
            <td style="width: 10vw">Period 6</td>
          </tr>
          <tr>
            <td>1</td>
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class2Colour }">
              {{ class2 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class3Colour }">
              {{ class3 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
            <td :style="{ backgroundColor: '#' + class1Colour }">
              {{ class1 }}
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class6Colour }">
              {{ class6 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class4Colour }">
              {{ class4 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
            <td :style="{ backgroundColor: '#' + class5Colour }">
              {{ class5 }}
            </td>
          </tr>
        </table>
        <div class="class-input">
          <p class="medium">Class1:</p>
          <input v-model="class1" />
          <p class="medium">Colour:</p>
          <input
            v-model="class1Colour"
            :style="{ border: '1px solid #' + class1Colour }"
          />
        </div>
        <div class="class-input">
          <p class="medium">Class2:</p>
          <input v-model="class2" />
          <p class="medium">Colour:</p>
          <input
            v-model="class2Colour"
            :style="{ border: '1px solid #' + class2Colour }"
          />
        </div>
        <div class="class-input">
          <p class="medium">Class3:</p>
          <input v-model="class3" />
          <p class="medium">Colour:</p>
          <input
            v-model="class3Colour"
            :style="{ border: '1px solid #' + class3Colour }"
          />
        </div>
        <div class="class-input">
          <p class="medium">Class4:</p>
          <input v-model="class4" />
          <p class="medium">Colour:</p>
          <input
            v-model="class4Colour"
            :style="{ border: '1px solid #' + class4Colour }"
          />
        </div>
        <div class="class-input">
          <p class="medium">Class6:</p>
          <input v-model="class5" />
          <p class="medium">Colour:</p>
          <input
            v-model="class5Colour"
            :style="{ border: '1px solid #' + class5Colour }"
          />
        </div>
        <div class="class-input">
          <p class="medium">Class6:</p>
          <input v-model="class6" />
          <p class="medium">Colour:</p>
          <input
            v-model="class6Colour"
            :style="{ border: '1px solid #' + class6Colour }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

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
</script>
