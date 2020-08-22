<template>  
  <c-box>
    <header-title>
      <c-box d="flex">
        <c-box p="6" w="40%">
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
          <c-input placeholder="Basic usage" />
        </c-box>
      </c-box>
      <c-box px="4" pb="4" align="center">
        <c-box w="80%" align="left">
          <c-box
            v-for="i in 6"
            :key="i"
            d="inline-block"
            w="31%" 
            boxShadow="0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)"
            m="2"
          >            
            <c-box p="3">
              Daarul Channel
            </c-box>
          </c-box>
        </c-box>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CText, CInput } from "@chakra-ui/vue";
import HeaderTitle from '../components/core/HeaderTitle';
export default {
  name: 'App',
  components: {
    HeaderTitle,
    CBox,
    CText,
    CInput
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
      }
    }
  },
  computed: {
  },
  methods: {
    
  }
}
</script>
