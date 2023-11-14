<template>
  <div class="container-flex">
    <div class="menu">
      <p class="title-menu">Scheduler</p>
      <div>
        <table>
          <tr>
            <td>Week A</td>
            <td>Period 1</td>
            <td>Period 2</td>
            <td>Period 3</td>
            <td>Period 4</td>
            <td>Period 5</td>
            <td>Period 6</td>
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
