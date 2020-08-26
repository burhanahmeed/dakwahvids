<template>  
  <c-box>
    <header-title>
      <c-box d="flex">
        <c-box p="6" w="40%">
          <c-box w="100%" align="left">
            <c-image
              h="60px"
              my="3"
              src="/imgs/DawahVids.svg"
              alt="Logo dawah vids"
            ></c-image>
          </c-box>
          <c-text fontSize="xl">
            <span style="font-weight: 700">DakwahVids</span> is a curated Islamic videos or lectural videos from mostly official Dakwah account.
          </c-text>
        </c-box>
        <c-box w="60%">
          <c-box p="4">
            <iframe width="100%" height="250px" src="https://www.youtube-nocookie.com/embed/7bfQJS5Thec?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </c-box>
        </c-box>
      </c-box>
    </header-title>
    <c-box mt="5">
      <c-box align="center" p="4">
        <c-text fontSize="xl" fontWeight="700">Channels</c-text>
      </c-box>
      <c-box p="4" align="center">
        <c-box w="80%">
          <c-input v-model.lazy="search" placeholder="Search channel" />
        </c-box>
      </c-box>
      <c-box px="4" pb="4" align="center">
        <c-box w="80%" align="left">
          <template v-if="channels.length > 0">
            <template v-for="i in channels">
              <Channel :key="i" :payload="i" />
            </template>
          </template>
          <template v-else>
            <c-box h="200px">
              <c-box align="center" p="10%">
                <c-text>
                  No channel found
                </c-text>
              </c-box>
            </c-box>
          </template>
        </c-box>
      </c-box>
    </c-box>
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
import HeaderTitle from '../components/core/HeaderTitle';
import Channel from '../components/channel';
import { useFetch } from '../nuxtUtils'
export default {
  name: 'App',
  components: {
    HeaderTitle,
    Channel,
    CBox,
    CText,
    CInput,
    CImage,
    CBadge
  },
  head () {
    return {
      title: 'DakwahVids',
       meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'DakwahVids is a curated Islamic videos or lectural videos from mostly official Dakwah account. A place where ilms are collected here.'
        }
      ],
      noscript: [
        { innerHTML: 'Body No Scripts', body: true }
      ],
    }
  },
  data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      },
      channels: [],
      search: ''
    }
  },
  watch: {
    search (val) {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.channels = this.master_channels.filter(el => {
          if (el.snippet.title.toLowerCase().indexOf(val.toLowerCase()) != -1) {
            return true
          }
        })
      }, 800);
    }
  },
  computed: {
  },
  methods: {
    
  },
  mounted () {
    this.channels = useFetch();
    this.master_channels = this.channels;
  }
}
</script>
