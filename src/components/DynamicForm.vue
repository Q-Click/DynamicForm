<template>
  <div class="form-container">
    <input
      v-model="searchText"
      :class="{ highlight: searchMatch && searchText }"
      class="search-input"
      placeholder="Search..."
      @input="highlightMatchingFields"
    />
    <div v-for="(field, index) in fields" :key="field.id" class="field-container">
      <input
        v-model="field.value"
        :class="{ highlight: field.match && field.value }"
        class="text-input"
        @input="updateVowelCount(index)"
      />
      <span class="vowel-count">Vowels: {{ field.vowelCount }}</span>
      <button v-if="fields.length > 1" class="remove-button" @click="removeField(index)">
        Remove
      </button>
    </div>
    <button
      :disabled="disabled"
      :class="{ '-disabled': disabled }"
      class="add-button"
      @click="addField"
    >
      Add Field
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

interface Field {
  id: number
  value: string
  vowelCount: number
  match: boolean
}

const fields = ref<Field[]>([
  { id: 1, value: '', vowelCount: 0, match: false },
  { id: 2, value: '', vowelCount: 0, match: false },
  { id: 3, value: '', vowelCount: 0, match: false }
])
const searchText = ref<string>('')
const searchMatch = ref<boolean>(false)

const addField = () => {
  fields.value.push({
    id: fields.value.length + 1,
    value: '',
    vowelCount: 0,
    match: false
  })
}

const removeField = (index: number) => {
  fields.value.splice(index, 1)
  highlightMatchingFields()
}

const updateVowelCount = (index: number) => {
  const count = fields.value[index].value.match(/[aeiou]/gi)?.length || 0
  fields.value[index].vowelCount = count
  highlightMatchingFields()
}

const highlightMatchingFields = () => {
  searchMatch.value = false
  fields.value.forEach((field) => {
    field.match =
      field.value.includes(searchText.value) && field.value !== '' && searchText.value !== ''
    if (field.match) searchMatch.value = true
  })
}

const disabled = computed(() => fields.value.length >= 10)
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 10px;
  padding: 20px;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.search-input,
.text-input {
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.search-input:focus,
.text-input:focus {
  outline: none;
  border-color: var(--color-border-hover);
}

.highlight {
  background-color: lightgreen;
}

.field-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.vowel-count {
  font-weight: bold;
  color: var(--color-text);
}

.add-button,
.remove-button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.add-button {
  background-color: var(--color-text);
  color: var(--color-background);
}
.-disabled {
  cursor: default;
  background-color: var(--color-border-hover);
}
.add-button:hover {
  background-color: var(--color-border-hover);
}

.remove-button {
  background-color: var(--color-border);
  color: var(--color-text);
}

.remove-button:hover {
  background-color: var(--color-border-hover);
}
</style>
