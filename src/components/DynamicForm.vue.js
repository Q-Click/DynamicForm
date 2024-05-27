import { computed, ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const fields = ref([
    { id: 1, value: '', vowelCount: 0, match: false },
    { id: 2, value: '', vowelCount: 0, match: false },
    { id: 3, value: '', vowelCount: 0, match: false }
]);
const searchText = ref('');
const searchMatch = ref(false);
const addField = () => {
    fields.value.push({
        id: fields.value.length + 1,
        value: '',
        vowelCount: 0,
        match: false
    });
};
const removeField = (index) => {
    fields.value.splice(index, 1);
    highlightMatchingFields();
};
const updateVowelCount = (index) => {
    const count = fields.value[index].value.match(/[aeiou]/gi)?.length || 0;
    fields.value[index].vowelCount = count;
    highlightMatchingFields();
};
const highlightMatchingFields = () => {
    searchMatch.value = false;
    fields.value.forEach((field) => {
        field.match =
            field.value.includes(searchText.value) && field.value !== '' && searchText.value !== '';
        if (field.match)
            searchMatch.value = true;
    });
};
const disabled = computed(() => fields.value.length >= 10);
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
let __VLS_modelEmitsType;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.highlightMatchingFields) }, ...{ class: (({ highlight: __VLS_ctx.searchMatch && __VLS_ctx.searchText })) }, ...{ class: ("search-input") }, placeholder: ("Search..."), });
    (__VLS_ctx.searchText);
    __VLS_styleScopedClasses = ({ highlight: searchMatch && searchText });
    // @ts-ignore
    [highlightMatchingFields, searchMatch, searchText, searchText,];
    for (const [field, index] of __VLS_getVForSourceType((__VLS_ctx.fields))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((field.id)), ...{ class: ("field-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (...[$event]) => {
                    __VLS_ctx.updateVowelCount(index);
                    // @ts-ignore
                    [fields, updateVowelCount,];
                } }, ...{ class: (({ highlight: field.match && field.value })) }, ...{ class: ("text-input") }, });
        (field.value);
        __VLS_styleScopedClasses = ({ highlight: field.match && field.value });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("vowel-count") }, });
        (field.vowelCount);
        if (__VLS_ctx.fields.length > 1) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.fields.length > 1)))
                            return;
                        __VLS_ctx.removeField(index);
                        // @ts-ignore
                        [fields, removeField,];
                    } }, ...{ class: ("remove-button") }, });
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.addField) }, disabled: ((__VLS_ctx.disabled)), ...{ class: (({ '-disabled': __VLS_ctx.disabled })) }, ...{ class: ("add-button") }, });
    __VLS_styleScopedClasses = ({ '-disabled': disabled });
    // @ts-ignore
    [addField, disabled, disabled,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['form-container'];
        __VLS_styleScopedClasses['search-input'];
        __VLS_styleScopedClasses['field-container'];
        __VLS_styleScopedClasses['text-input'];
        __VLS_styleScopedClasses['vowel-count'];
        __VLS_styleScopedClasses['remove-button'];
        __VLS_styleScopedClasses['add-button'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                fields: fields,
                searchText: searchText,
                searchMatch: searchMatch,
                addField: addField,
                removeField: removeField,
                updateVowelCount: updateVowelCount,
                highlightMatchingFields: highlightMatchingFields,
                disabled: disabled,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
