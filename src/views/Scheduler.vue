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
          @click="option = index"
        >
          {{ obj.name }}
        </div>
        <div class="menu-button" v-if="settings">+</div>
        <icons
          icon="settings"
          size="18"
          class="menu-button-settings"
          :class="{ active: settings }"
          @click="settings = !settings"
        />
      </div>
      <div class="table">
        <div v-for="row in newData[option].rows" :key="row" class="table-row">
          <div
            v-for="column in row"
            :key="column"
            :class="column === null ? 'table-box-spacer' : 'table-box'"
            :style="{
              backgroundColor:
                typeof column === 'number'
                  ? '#' + newData[option].colours[column]
                  : ''
            }"
          >
            {{
              typeof column === "number" ? newData[0].classes[column] : column
            }}
          </div>
          <div class="table-add" v-if="settings">+</div>
        </div>
        <div class="table-add" v-if="settings">+</div>
      </div>
      <div
        v-for="(obj, index) in newData[option].classes"
        :key="obj"
        class="class-input"
      >
        <p class="medium">Class{{ index + 1 }}:</p>
        <input v-model="newData[option].classes[index]" />
        <p class="medium">Colour:</p>
        <input
          v-model="newData[option].colours[index]"
          :style="{ border: '1px solid #' + newData[option].colours[index] }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "../assets/data.json"
import { ref } from "vue"
import Icons from "../components/Icons.vue"

const newData = ref(data)
const option = ref(0)
const settings = ref(false)
</script>
