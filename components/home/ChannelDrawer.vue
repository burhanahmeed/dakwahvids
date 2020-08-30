<template>
    <drawer :isOpen="isOpen" @close="close" :title="payload.snippet.title">
      <c-box>
        <c-box align="center">
          <c-image
            rounded="full"
            h="80px"
            w="80px"
            :src="payload.snippet.thumbnails.default.url"
            :alt="payload.snippet.title"
          />
        </c-box>
        <c-box p="4" align="center">
          <c-text fontSize="xl" fontWeight="700">{{ payload.snippet.title }}</c-text>
          <c-text fontSize="xs">{{ numberFormat(payload.statistics.subscriberCount) }} subscribers</c-text>
          <c-badge mr="1" variant-color="green" v-for="lang in payload.lang" :key="lang">{{ lang }}</c-badge>
        </c-box>
        <c-box p="4">
          <c-text fontSize="xs">{{ payload.snippet.description }}</c-text>
        </c-box>
        <c-box align="center" mt="4">
          <c-button variant-color="green" size="xs" as="a" :href="`https://www.youtube.com/channel/${payload.id}`" target="_blank">Visit channel</c-button>
        </c-box>
      </c-box>
    </drawer>
</template>

<script>
import { 
  CBox, 
  CText, 
  CInput,
  CImage,
  CBadge,
  CButton
} from "@chakra-ui/vue";
import Drawer from "../core/Drawer";
export default {
  components: {
    CButton,
    Drawer,
    CBox, 
    CText, 
    CInput,
    CImage,
    CBadge
  },
  props: ['isOpen', 'payload'],
  data () {
    return {
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>