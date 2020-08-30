<template>
  <c-drawer :isOpen="isOpen" placement="right" :on-close="close">
    <c-drawer-overlay />
    <c-drawer-content>
      <c-drawer-close-button />
      <c-drawer-header>{{ title }}</c-drawer-header>

      <c-drawer-body overflow="hidden scroll">
        <slot></slot>
      </c-drawer-body>

      <c-drawer-footer>
        <!-- <c-button variant="outline" mr="3" @click="isOpen = false">Cancel</c-button>
        <c-button variant-color="blue">Save</c-button> -->
      </c-drawer-footer>
    </c-drawer-content>
  </c-drawer>
</template>

<script>
import {
  CDrawer,
  CDrawerBody,
  CDrawerFooter,
  CDrawerHeader,
  CDrawerOverlay,
  CDrawerContent,
  CDrawerCloseButton,
} from '@chakra-ui/vue';
export default {
  props: ['isOpen', 'title'],
  components: {
    CDrawer,
    CDrawerBody,
    CDrawerFooter,
    CDrawerHeader,
    CDrawerOverlay,
    CDrawerContent,
    CDrawerCloseButton,
  },
  data () {
    return {
    }
  },
  mounted () {
    // var section = document.getElementsByTagName('section')[0];
    // section.style.maxWidth = '28rem';
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>