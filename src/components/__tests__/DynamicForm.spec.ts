import { mount } from '@vue/test-utils'
import DynamicForm from '@/components/DynamicForm.vue'
import { describe, it, expect } from 'vitest'

describe('DynamicForm.vue', () => {
  it('initially renders three input fields', () => {
    const wrapper = mount(DynamicForm)
    const inputFields = wrapper.findAll('.text-input')
    expect(inputFields.length).toBe(3)
  })

  it('adds a new field when "Add Field" button is clicked', async () => {
    const wrapper = mount(DynamicForm)
    const addButton = wrapper.find('.add-button')
    await addButton.trigger('click')
    const inputFields = wrapper.findAll('.text-input')
    expect(inputFields.length).toBe(4)
  })

  it('removes a field when "Remove" button is clicked', async () => {
    const wrapper = mount(DynamicForm)
    const removeButton = wrapper.find('.remove-button')
    await removeButton.trigger('click')
    const inputFields = wrapper.findAll('.text-input')
    expect(inputFields.length).toBe(2)
  })

  it('updates the vowel count correctly', async () => {
    const wrapper = mount(DynamicForm)
    const inputFields = wrapper.findAll('.text-input')
    await inputFields[0].setValue('hello')
    const vowelCount = wrapper.find('.vowel-count').text()
    expect(vowelCount).toContain('Vowels: 2')
  })

  it('highlights matching fields based on search input', async () => {
    const wrapper = mount(DynamicForm)
    const searchInput = wrapper.find('.search-input')
    const inputFields = wrapper.findAll('.text-input')
    await inputFields[0].setValue('hello')
    await searchInput.setValue('hello')
    expect(inputFields[0].classes()).toContain('highlight')
  })

  it('does not highlight non-matching fields based on search input', async () => {
    const wrapper = mount(DynamicForm)
    const searchInput = wrapper.find('.search-input')
    const inputFields = wrapper.findAll('.text-input')
    await inputFields[0].setValue('hello')
    await searchInput.setValue('world')
    expect(inputFields[0].classes()).not.toContain('highlight')
  })

  it('disables the "Add Field" button when the limit is reached', async () => {
    const wrapper = mount(DynamicForm)
    const addButton = wrapper.find('.add-button')
    for (let i = 0; i < 7; i++) {
      await addButton.trigger('click')
    }
    expect(wrapper.find('.add-button').attributes().disabled).toBe('')
  })
})
