<template>
<div :style="{fontSize: getDynamicWidth(0.09)}">
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

    <div class="marker pm25color"
        :style="{ backgroundColor: pm25color, width: getDynamicWidth(0.8),
                  height: getDynamicWidth(0.8), paddingTop: getDynamicWidth(0.1),
                  marginTop: getDynamicWidth(-0.1) }">
        <p class="name">{{ displayName }}</p>
        <p class="value">{{ getDataField('Dust2_5') }}</p>
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

    export default {
        mixins: [Widget],
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
    .header{ padding: 3px 3px 0 3px; min-height: 32px; font-size: .9em; }
    .header > div { width: 49%; display: inline-block; margin-right: -4px; }

    .marker {
        margin: -10px auto 0;
        width:180px; height: 180px;
        border-radius: 50%; border: 2px solid #4F595D;
        padding-top: 35px;
        text-align: center;
    }
    .marker .name{
        margin: 0;
        text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.8);
        font-size: 1em;
    }
    .marker .value{
        line-height: 1;
        font-size: 3.8em;
        text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.8);
    }

    .footer { padding: 3px 3px 0px 3px; margin-top: -15px; font-size: .8em;}
    .footer > div { width: 49%; display: inline-block; margin-right: -4px; }
    .footer img{ height: 1.2em; }
</style>