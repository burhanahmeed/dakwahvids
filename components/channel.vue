<template>
  <c-box
    d="inline-block"
    w="31%" 
    boxShadow="0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)"
    m="2"
    cursor="pointer"
    @click="isOpen = true"
  >            
    <c-box p="3">
      <c-box d="flex">
        <c-box>
          <c-image
            rounded="full"
            h="50px"
            w="50px"
            src="https://bit.ly/chakra-jonathan-bakebwa"
            alt="Jonathan Bakebwa"
          />
        </c-box>
        <c-box ml="4">
          <c-text fontWeight="700">Daarul Hijrah</c-text>
          <c-text fontSize="xs">40,000 subscribers</c-text>
          <c-badge variant-color="green">English</c-badge>
        </c-box>
      </c-box>
    </c-box>
    <channel-drawer :isOpen="isOpen" @close="close" />
  </c-box>
</template>

<script>
import { 
  CBox, 
  CText, 
  CInput,
  CImage,
  CBadge
} from "@chakra-ui/vue";
import ChannelDrawer from '../components/home/ChannelDrawer';
export default {
  components: {
    ChannelDrawer,
    CBox, 
    CText, 
    CInput,
    CImage,
    CBadge
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    close () {
      this.isOpen = false;
    }
  }
}
</script>