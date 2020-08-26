<template>
  <c-box
    d="inline-block"
    w="31%" 
    boxShadow="0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)"
    m="2"
    cursor="pointer"
    @click="selectChannel"
  >            
    <c-box p="3">
      <c-box d="flex">
        <c-box>
          <c-image
            rounded="full"
            h="50px"
            w="50px"
            :src="payload.snippet.thumbnails.default.url"
            :alt="payload.snippet.title"
          />
        </c-box>        
        <c-box ml="4" w="70%">
          <c-text fontWeight="700" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">{{ payload.snippet.title }}</c-text>
          <c-text fontSize="xs">{{ numberFormat(payload.statistics.subscriberCount) }} subscribers</c-text>
          <c-badge mr="1" variant-color="green" v-for="lang in payload.lang" :key="lang">{{ lang }}</c-badge>
          <!-- <c-text fontSize="xs">{{ payload.snippet.thumbnails.default.url }}</c-text> -->
        </c-box>
      </c-box>
    </c-box>
    <channel-drawer v-if="isOpen" :isOpen="isOpen" @close="close" :payload="meta" />
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
import { useSearch } from '../nuxtUtils/index'
export default {
  props: ['payload'],
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
      isOpen: false,
      meta: {}
    }
  },
  methods: {
    close () {
      this.isOpen = false;
    },
    selectChannel () {
      this.isOpen = true;
      this.meta = useSearch(this.payload.id)
    }
  }
}
</script>