<template>
  <c-box bg="#F8F8F9" p="16">
    <c-box w="100%">
      <slot></slot>
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CText } from '@chakra-ui/vue'
export default {
  components: {
    CBox,
    CText
  }
}
</script>

<style scoped>

</style>