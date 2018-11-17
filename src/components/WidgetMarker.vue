<template>
    <div class="g0v-airmap-widget-text">
        <Warning />

        <div class="header">
            <div class="text-left" title="溫度" v-if="getDataField('Temperature')">
                <span class="value">{{ getDataField('Temperature') }}</span>
                <span class="unit">℃</span>
            </div>

            <div class="text-right" title="濕度" v-if="getDataField('Humidity')">
                <span class="value">{{ getDataField('Humidity') }}</span>
                <span class="unit">%</span>
            </div>
        </div>

        <div class="container" :style="{fontSize: getDynamicWidth(0.09)}">
            <div class="marker pm25color"
                :style="{
                    backgroundColor: pm25color,
                    width: getDynamicWidth(0.9),
                    height: getDynamicWidth(0.9)
                }">

                <p class="name">{{ displayName }}</p>
                <p class="value">{{ getDataField('Dust2_5') }}</p>
            </div>
        </div>

        <div class="footer">
            <div class="text-left">
                <a :href="sitePageUrl" title="site detail page" target="g0vDetail">
                    <img src="https://i.imgur.com/Gro4juQ.png" alt="g0v icon">
                </a>
            </div>

            <div class="text-right" title="更新時間">
                <span class="humanTime" :title="dataTime.local">{{ dataTime.human }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { Widget } from '@/mixin.js';
    import Warning from './Warning.vue';

    export default {
        mixins: [Widget],
        components: {Warning},
        computed: {
            containerWidth () {
                return this.$root && this.$root.$el && this.$root.$el.offsetWidth;
            },
            fontSize () {
                return this.getDynamicWidth(0.1);
            }
        },
        methods: {
            getDynamicWidth(ratio) {
                return (this.containerWidth * ratio) + 'px';
            }
        }
    }
</script>

<style src="normalize.css/normalize.css" scoped></style>
<style src="@/common.css" scoped></style>
<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        padding: 5px 5px 0;
        position: absolute;
        width: 100%;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }

    .marker {
        border-radius: 50%;
        border: 2px solid #4F595D;
        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .marker .name{
        text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.8);
        font-size: 1em;
    }
    .marker .value{
        line-height: 1;
        font-size: 3.75em;
        text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.8);
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 5px;
        position: relative;
        width: 100%;
        margin-top: -20px;
    }
</style>