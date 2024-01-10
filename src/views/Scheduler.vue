<template>
  <div class="container-flex">
    <div class="menu">
      <p class="title-menu">Scheduler</p>
      <div style="display: flex">
        <div
          v-for="(obj, index) in newData"
          :key="obj.name"
          class="menu-button"
          :class="{ active: option === index }"
          @click="(option = index), router.push('/scheduler?page=' + obj.name)"
        >
          {{ obj.name }}
        </div>
        <div v-if="settings" class="menu-button">+</div>
        <icons
          icon="settings"
          size="18"
          class="menu-button-settings"
          :class="{ active: settings }"
          @click="settings = !settings"
        />
      </div>
      <div class="table">
        <div
          v-for="(row, index) in newData[option].rows"
          :key="row"
          class="table-row"
        >
          <div
            v-for="(column, index1) in row"
            :key="column"
            :class="column === null ? 'table-box-spacer' : 'table-box'"
            :style="{
              backgroundColor:
                typeof column === 'number'
                  ? '#' + newData[option].classes[column][1]
                  : '',
              flex:
                'calc(100% / ' +
                newData[option].widths[index][index1] +
                ' - 14px) 0 0'
            }"
          >
            {{
              typeof column === "number"
                ? newData[option].classes[column][0]
                : column
            }}
          </div>
          <div v-if="settings" class="table-add">+</div>
        </div>
        <div v-if="settings" class="table-add">+</div>
      </div>
      <div
        v-for="(obj, index) in newData[option].classes"
        :key="obj"
        class="class-input"
      >
        <p class="medium">Class{{ index + 1 }}:</p>
        <input v-model="newData[option].classes[index][0]" />
        <p class="medium">Colour:</p>
        <input
          v-model="newData[option].classes[index][1]"
          :style="{ border: '1px solid #' + newData[option].classes[index][1] }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "../assets/data.json"
import { ref } from "vue"
import Icons from "../components/Icons.vue"
import { useRoute, useRouter } from "vue-router"

const router = useRouter()
const route = useRoute()
const newData = ref(data)
const option = ref(0)
const settings = ref(false)

option.value = newData.value.indexOf(
  newData.value.find((item) => item.name === route.query.page)
)
if (option.value === -1) option.value = 0
</script>
