import Vue from 'vue'
import Vuetify from 'vuetify'
import 'api/resource'
import App from 'pages/App.vue'
import { connect } from './util/ws'
import 'vuetify/dist/vuetify.min.css'
import '@babel/polyfill'
import store from "store/store";
if (frontendData.profile) {
    connect()
}

Vue.use(Vuetify,
    {
        iconfont: 'mdiSvg'
    })

new Vue({
    el: '#app',
    render: a => a(App),
    store,
    vuetify: new Vuetify()
})
