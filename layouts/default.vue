<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox as="main">
          <CReset />
          <c-box w="100%" m="0" p="0">
            <c-box bg="green.400" w="100%" h="50px" d="flex" justify-content="space-between" py="3" boxShadow="0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)">
              <c-box>
                <c-link class="no-underline" as="router-link" to="/" p="4" fontWeight="700">
                  DawahVids
                </c-link>
              </c-box>
              <c-box>
                <c-link class="no-underline" as="router-link" to="/icons" px="2" py="4" color="white" fontWeight="600">
                  Collections
                </c-link>
                <c-link class="no-underline" as="router-link" to="/getting-started" px="2" py="4" color="white" fontWeight="600">
                  <span style="font-size: 25px; display: inline-block;" class="iconify" data-icon="mdi:github" data-inline="false"></span>
                </c-link>
              </c-box>
            </c-box>
            <c-box pt="0px" minH="calc(100vh - 76px)">
              <Nuxt />
            </c-box>
            <c-box bg="black" color="white" p="1" align="center">
              <c-text fontSize="xs">
                &copy; 2020 DakwahVids. A product by <a style="color: blue" href="https://kusiaga.com" target="_blank">kusiaga</a>'s
                  by <a href="https://twitter.com/BurhannAhm" target="_blank"><c-badge variant-color="green" fontSize="10px" textTransform="none">@burhannahm</c-badge></a>
              </c-text>
            </c-box>
          </c-box>
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
  CLink,
  CText
} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    CLink,
    CText
  }
}
</script>

<style>
html, body {
  font-family: 'Montserrat', sans-serif;
}
</style>