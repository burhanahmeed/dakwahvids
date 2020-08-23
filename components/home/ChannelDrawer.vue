<template>
    <drawer :isOpen="isOpen" @close="close" title="Daarul Hijr">
      <c-box align="center">
        <c-image
          rounded="full"
          h="80px"
          w="80px"
          src="https://bit.ly/chakra-jonathan-bakebwa"
          alt="Jonathan Bakebwa"
        />
      </c-box>
      <c-box p="4" align="center">
        <c-text fontSize="xl" fontWeight="700">Daarul Hijr</c-text>
        <c-text fontSize="xs">40,000 subscribers</c-text>
        <c-badge variant-color="green">English</c-badge>
      </c-box>
      <c-box p="4">
        <c-text fontSize="xs">For business enquiries (including hiring our talents for events), email us at sylvia@noc.com.sg (cc ryan@noc.com.sg)

We are not affiliated with any social networks / agencies! Contact us directly :), only we know our business better than anyone else. :)</c-text>
      </c-box>
      <c-box align="center">
        <c-button variant-color="green" size="xs" as="a" href="/" target="_blank">Visit channel</c-button>
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
  props: ['isOpen'],
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