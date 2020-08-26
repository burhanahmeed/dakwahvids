import Vue from 'vue'

var numberMixins = {
    methods: {
        numberFormat (number) {
            return new Intl.NumberFormat().format(number)
        }
    }
}

Vue.mixin(numberMixins)

