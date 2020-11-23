import Copper from './copper.vue'

const install = function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
        Vue = window.Vue
    }
    Vue.component(Copper.name, Copper)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}


export { Copper }
export default {
    install,
    Copper
}
