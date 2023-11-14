<template>
  <div class="container-flex">
    <div class="map-container">
      <div>
        <table
          style="
            table-layout: fixed;
            width: 800px;
            border: 1px solid red;
            height: 300px;
          "
        >
          <tr>
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
          <tr>break</tr>
          <tr>
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
        <div style="display: flex">
          <input v-model="class1" />
          <input v-model="class1Colour" />
        </div>
        <div style="display: flex">
          <input v-model="class2" />
          <input v-model="class2Colour" />
        </div>
        <div style="display: flex">
          <input v-model="class3" />
          <input v-model="class3Colour" />
        </div>
        <div style="display: flex">
          <input v-model="class4" />
          <input v-model="class4Colour" />
        </div>
        <div style="display: flex">
          <input v-model="class5" />
          <input v-model="class5Colour" />
        </div>
        <div style="display: flex">
          <input v-model="class6" />
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
