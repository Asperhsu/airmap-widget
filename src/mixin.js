import { host, sitePageUrl, deepFind } from '@/services/helpers';
import { siteApi, fetchLatest } from './services/client.js';

const types = ['text', 'thin', 'marker'];
import * as Indicator from './services/indicator.js';

import moment from 'moment';
import "moment/locale/zh-tw"
moment.locale('zh-tw');

export const Widget = {
    mounted () {
        this.settings = Object.assign({}, this.settings, this.$attrs);
        this.fetchData();
    },
    data () {
        return {
            latest: null,
            settings: {
                group: null,
                uuid: null,
                name: null,
                measure: 'pm25',
            },
        }
    },
    computed: {
        sitePageUrl() { return host.replace('widget.', ''); },

        displayName() {
            return this.settings.name || deepFind(this.latest, 'SiteName');
        },

        measureType() {
            if (this.settings.measure
                && Indicator.isTypeExist(this.settings.measure)) {
                return this.settings.measure;
            }

            return 'PM2.5';
        },

        measureColor() {
            let value = deepFind(this.latest, 'Data.Dust2_5');
            return value ? Indicator.getTypeColor(this.measureType, value) : null;
        },

        pm25color() {
            return this.measureColor;
        },

        dataTime() {
            let time = deepFind(this.latest, 'Data.Create_at');
            var dd = time ? moment.utc(time) : null;

            return {
                human: dd ? dd.toNow() : null,
                local: dd ? dd.local().format('YYYY-MM-DD HH:mm:ss') : null,
            };
        },
    },
    methods: {
        fetchData() {
            if (!this.settings.group || !this.settings.uuid) {
                return false;
            }

            let url = siteApi(this.settings.group, this.settings.uuid);

            this.$ga && this.$ga.page(url.replace(host, ''));

            fetchLatest(url)
                .then(data => {
                    this.latest = data;
                })
        },
        getDataField(name) {
            return deepFind(this.latest, 'Data.' + name);
        },
    },
}