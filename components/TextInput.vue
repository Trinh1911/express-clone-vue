<template>
  <div>
    <ClientOnly>
      <input
        :placeholder="placeholder"
        :maxlength="max"
        class="w-full bg-white text-gray-800 border text-sm border-[#EFF0EB] rounded-lg p-3 placeholder-gray-500 focus:outline-none"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :class="({ 'border-gray-900': isFocused }, { 'border-red-500': error })"
        :type="inputType"
        v-model="inputComputed"
        autocomplete="off"
      />
    </ClientOnly>
    <span v-if="error" class="text-red-500 text-[14px] font-semibold">
      {{ error }}
    </span>
  </div>
</template>

<script setup>
// định nghĩa sự kiện update của ô input
const emit = defineEmits(["update:input"]);
//  định nghĩa các đối tượng đầu vào của TextInput
const props = defineProps([
  "input",
  "placeholder",
  "max",
  "inputType",
  "error",
]);
// chuyển các đối tượng thành reactive references
const { input, placeholder, max, inputType, error } = toRefs(props);
let isFocused = ref(false);
// khi user thay đổi giá trị trên input, nó sẽ gọi inputComputed
const inputComputed = computed({
  // khi lấy được giá trị ở inputComputed
  //  thì nó sẽ gọi phương thức get để gán giá trị cho input hiện tại
  get: () => input.value,
  // st1: khi computed inputComputed được gọi thì sẽ emit update:input
  // đồng thời giá trị ng dùng nhập vào sẽ được truyền qua thông số thứ 2 là val
  set: (val) => emit("update:input", val),
});
</script>
