import Vue from 'vue'
import Vuetify from 'vuetify'
import 'api/resource'
import App from 'pages/App.vue'
import { connect } from './util/ws'
import 'vuetify/dist/vuetify.min.css'
import '@babel/polyfill'
import store from "store/store"
import router from 'router/router'
import * as Sentry from "@sentry/vue"
import { Integrations } from "@sentry/tracing"

Sentry.init({
    Vue,
    dsn: "https://291433499a8a41f8b7f6c1beb0cb482a@o865651.ingest.sentry.io/5822759",
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
})
Sentry.configureScope(scope =>
    scope.setUser({
        id:profile && profile.id,
        username: profile && profile.name
    })
)
if (profile) {
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
    router,
    vuetify: new Vuetify()
})
