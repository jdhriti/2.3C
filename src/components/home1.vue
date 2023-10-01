<script setup>
import { ref, watch, computed } from 'vue';
import {RouterLink} from  'vue-router';

// Data
const greeting = ref('Hola! Professor');
const rawHtml = '<em>Raw HTML</em>';
const dynamicId = 'dynamic-element';
const isActive = ref(true);
const textColor = ref('orange');
const objectData = { a: 1, b: 2, c: 3 };
const listData = [
  { id: 1, name: 'Thing A' },
  { id: 2, name: 'Thing B' }
];
const listDataWithCondition = [
  { id: 1, name: 'Active', active: true },
  { id: 2, name: 'Inactive', active: false }
];
const textInput = ref('');
const checkboxValue = ref(false);
const radioValue = ref('Option 1');
const selectedOption = ref('Option 2');
const textareaValue = ref('');
const lazyInput = ref('');
const numericInput = ref(0);
const trimmedInput = ref('');
const watchedValue = ref('');

// Methods
const greet = () => {
  alert('Hola!');
};

// Computed Properties
const computedProperty = computed(() => {
  return count.value * 3;
});

// Event Handling
const handleClick = () => {
  alert('Inline Click Handler');
};
const handleClickMethod = () => {
  alert('Method Click Handler');
};

// Watchers
watch(textInput, (newValue) => {
  watchedValue.value = `Input Text: ${newValue}`;
});

// Reactivity Fundamentals
const count = ref(1);
const reactiveData = computed(() => {
  return 'Reactivity Fundamentals: ' + count.value;
});

// Custom Component Data
const customComponentData = { message: 'Custom Component Data' };
</script>

<template>
    <div>
      <!-- 1. Template Syntax -->
      <h1>{{ greeting }}</h1> <!-- a. Text Interpolation -->
  
      <!-- b. Raw HTML [v-html] -->
      <p v-html="rawHtml"></p>
  
      <!-- c. Attribute Bindings [v-bind:id] -->
      <div :id="dynamicId"></div>
  
      <!-- d. JavaScript expressions inside syntax i.e.{{ }} -->
      <p>{{ '24 + 22 = ' + (24 + 22) }}</p>
  
      <!-- 2. Methods -->
      <button @click="greet">Greet</button>
  
      <!-- 3. Reactivity Fundamentals -->
      <p>{{ reactiveData }}</p>
  
      <!-- 4. Computed Properties -->
      <p>Computed Property: {{ computedProperty }}</p>
  
      <!-- 5. Class and Style Bindings -->
      <div :class="{'active': isActive}" :style="{ color: textColor }">Class and Style Bindings</div>
  
      <!-- 6. List Rendering -->
      <ul>
        <!-- a. v-for with an Object -->
        <li v-for="(value, key) in objectData" :key="key">{{ key }}: {{ value }}</li>
  
        <!-- b. v-for with a Range -->
        <li v-for="n in 5" :key="n">{{ n }}</li>
  
        <!-- c. v-for on <template> -->
        <template v-for="item in listData" :key="item.id">
          <li>{{ item.name }}</li>
        </template>
  
        <!-- d. v-for with v-if -->
        <template v-for="item in listDataWithCondition" :key="item.id">
          <li v-if="!item.active">{{ item.name }}</li>
        </template>
  
        <!-- e. v-for with a Component -->
        <li v-for="item in listData" :key="item.id">
          <custom-component :data="item">{{ customComponentData.message }}</custom-component>
        </li>
      </ul>
  
      <!-- 7. Event Handling -->
      <button @click="handleClick">Click Me</button> <!-- a. Inline Handlers -->
      <button @click="handleClickMethod">Click Me (Method)</button> <!-- b. Method Handlers -->
  
      <!-- 8. Form Input Bindings -->
      <input type="text" v-model="textInput" placeholder="Text Input">
      <input type="checkbox" v-model="checkboxValue" id="chk">
      <label for="chk">Not a Robot?</label>
      <input type="radio" v-model="radioValue" value="option1" id="radioOption1">
      <label for="radioOption1">Man</label>
      <input type="radio" v-model="radioValue" value="option2" id="radioOption2">
      <label for="radioOption2">Woman</label>

      <select v-model="selectedOption">
        <option value="option1">SIT182</option>
        <option value="option2">SIT120</option>
      </select>
      <textarea v-model="textareaValue" placeholder="Textarea">Text Area</textarea>
  
      <!-- 8b. v-model modifiers [.lazy , .number, .trim] -->
      <input type="text" v-model.lazy="lazyInput" placeholder="Lazy Input">
      <input type="text" v-model.number="numericInput" placeholder="Numeric Input">
      <input type="text" v-model.trim="trimmedInput" placeholder="Trimmed Input">
  
      <!-- 9. Watchers -->
      <p>{{ watchedValue }}</p>
  
      <!-- 10. Components -->
      <custom-component :data="customComponentData"></custom-component>
  
      <!-- 11. Router -->
      <RouterLink to="../About">About Page</RouterLink>
      
    </div>
  </template>
  

<style scoped>

body {
  font-family: Arial, sans-serif;
  background-color: #eae9e9;
  
}


h1 {
  font-size: 2.6rem;
  color: #a92e3e;
}

h2 {
  font-size: 1.5rem;
  color: #333;
  margin-top: 22px;
}


button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #34b072;
  color: #fff;
  border: none;
  cursor: pointer;

}


input[type="text"],
input[type="checkbox"],
input[type="radio"],
select,
textarea {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

/* List styles */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}

.custom-component {
  border: 1px solid #e3dcdc;
  padding: 10px;
  background-color: #dedddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Responsive styles for larger screens */
@media (min-width: 768px) {
  .container {
    padding: 40px;
  }
}


button:hover {
  background-color: #0c4d21;
}

</style>