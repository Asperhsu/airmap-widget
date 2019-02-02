// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

import WidgetText from '@/components/WidgetText';
import WidgetThin from '@/components/WidgetThin';
import WidgetMarker from '@/components/WidgetMarker';

Vue.config.productionTip = false
Vue.component('widget-text', WidgetText);
Vue.component('widget-thin', WidgetThin);
Vue.component('widget-marker', WidgetMarker);

if (process.env.GA_ID) {
    Vue.use(VueAnalytics, {
        id: process.env.GA_ID
    });
}

Array.from(document.getElementsByClassName('airmap-widget'))
    .map(function (el) {
        new Vue({
            el: el,
        })
    })

Array.from(document.getElementsByClassName('airmap-single-widget'))
    .map(function (el) {
        let type = el.dataset.type;
        if (!type) return;

        let attributes = Object.keys(el.dataset)
            .filter(name => name !== 'type')
            .map(name => `${name}="${el.dataset[name]}"`)
            .join(" ");

        new Vue({
            el: el,
            template: `<widget-${type} ${attributes}></widget-${type}>`
        })
    })