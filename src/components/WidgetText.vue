<template>
    <div class="g0v-airmap-widget-text">
        <Warning />

        <div class="header">
            <a :href="sitePageUrl" title="site detail page" target="g0vDetail">
                <img src="https://i.imgur.com/IWqy7yh.png" alt="g0v icon">
            </a>
        </div>

        <div class="content">
            <table class="table">
                <tbody>
                    <tr>
                        <th>名稱</th>
                        <td>{{ displayName }}</td>
                    </tr>

                    <tr v-if="getDataField('Dust2_5')">
                        <th>PM 2.5</th>
                        <td>
                            <span class="pm25color" :style="{ backgroundColor: pm25color}">&nbsp;</span>
                            <span class="value">{{ getDataField('Dust2_5') }}</span>
                            <span class="unit">μg/m<sup>3</sup></span>
                        </td>
                    </tr>

                    <tr v-if="getDataField('Temperature')">
                        <th>溫度</th>
                        <td>
                            <span class="value">{{ getDataField('Temperature') }}</span>
                            <span class="unit">℃</span>
                        </td>
                    </tr>

                    <tr v-if="getDataField('Humidity')">
                        <th>濕度</th>
                        <td>
                            <span class="value">{{ getDataField('Humidity') }}</span>
                            <span class="unit">%</span>
                        </td>
                    </tr>

                    <tr>
                        <th>更新時間</th>
                        <td>
                            <span class="humanTime" :title="dataTime.local">{{ dataTime.human }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { Widget } from '@/mixin.js';
    import Warning from './Warning.vue';

    export default {
        mixins: [Widget],
        components: {Warning},
    }
</script>

<style src="normalize.css/normalize.css" scoped></style>
<style src="@/common.css" scoped></style>
<style scoped>
    .header{ text-align: center; padding: 8px 0; }
    .header img{ height:25px; }

    .content{ padding: 0 10px; }
    .table{ margin-bottom: 0; }
    .table th{ text-align: right; width: 45%; }
    .table td{ text-align: left; }
    .pm25color{ display: inline-block; width:1.5em; border-radius: 50%; border: 1px solid #4F595D; }
</style>
