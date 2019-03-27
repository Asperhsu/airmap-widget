<template>
    <div class="g0v-airmap-widget-thin">
        <!-- <Warning /> -->

        <div class="header">
            {{ displayName }}
        </div>

        <div class="content">
            <div class="item pm25">
                <div class="name">
                    <span class="label label-border">PM 2.5</span>
                </div>
                <div class="value-container pm25color" :style="{ backgroundColor: pm25color}">
                    <span class="value">{{ getDataField('Dust2_5') }}</span>
                    <span class="unit">μg/m<sup>3</sup></span>
                </div>
            </div>

            <div class="item-container">
                <div>
                    <div class="item temp" v-if="getDataField('Temperature')">
                        <div class="name">
                            <span class="label label-border">溫度</span>
                        </div>
                        <div class="value-container">
                            <span class="value">{{ getDataField('Temperature') }}</span>
                            <span class="unit">℃</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="item humi" v-if="getDataField('Humidity')">
                        <div class="name">
                            <span class="label label-border">濕度</span>
                        </div>
                        <div class="value-container">
                            <span class="value">{{ getDataField('Humidity') }}</span>
                            <span class="unit">%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <a :href="sitePageUrl" title="site detail page" target="g0vDetail">
                <img src="https://i.imgur.com/Gro4juQ.png" alt="g0v icon">
            </a>
            <span class="humanTime" :title="dataTime.local">{{ dataTime.human }}</span>
        </div>
    </div>
</template>

<script>
    import { Widget } from '@/mixin.js';
    // import Warning from './Warning.vue';

    export default {
        mixins: [Widget],
        // components: {Warning},
    }
</script>

<style src="normalize.css/normalize.css" scoped></style>
<style src="@/common.css" scoped></style>
<style lang="scss" scoped>
    .header {
        white-space: nowrap;
        text-align: center;
        border-radius: 5px;
        padding: 3px;
        margin: 0 5px 5px 5px;
        font-size: .9em;
        font-weight: bold;
        background-color: #4F595D;
        color: #fff;
        overflow: hidden;
    }
    .content{ padding: 0 5px; margin: 0 5px; }

    .label-border { border-bottom: 1px dashed #aaa; color: #4F595D; border-radius: 0px; }

    .item .label { display: inline-block; width: 100%; }
    .item .value-container { text-align: center; font-size: 0.9em; margin: .25em .5em}
    .item .unit { font-size: 0.8em; }

    .item.pm25 { margin-bottom: 5px; }
    .item.pm25 .value{ font-size: 1.3em; line-height: 1.3em; }
    .pm25color{ color: #000; text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.8); }

    .item-container > div { width: 50%; padding: 0 2px; display: inline-block; margin-right: -4px; }

    .footer{ text-align: center; margin: 8px 5px 0px; font-size: .7em; display: flex; align-items: center; justify-content: center; }
    .footer img{ height: 1.5em; }
</style>