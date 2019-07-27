<template>
    <div class="chart__container">
    </div>
</template>



<script>
import ApexCharts from 'apexcharts';

const api = require('@/api/api').default;

export default {
    props: {
        updateGraphNumber: Number
    },
    async mounted () {
        this.getStats()
    },
    methods: {
        async getStats() {
            let response = await api.tasks.getStats()
            
            if (!response.data.success) {
                return
            }

            let reformedTime = []
            let reformedValues = []
            response.data.stats.forEach(day => {
                let timeSpanYear = day[0].time.toString().substring(0, 4)
                let timeSpanDay = day[0].time.toString().substring(4, 7)

                var date = new Date(timeSpanYear, 0);
                date = new Date(date.setDate(timeSpanDay));

                reformedTime.push(
                    date.getDate() + '/' + date.getMonth(),
                )
                reformedValues.push(
                    day[0].value
                )
            })

            var options = {
                chart: {
                    id: 'chart',
                    type: 'line',
                    background: 'white',
                },
                stroke: {
                    curve: 'smooth',
                    width: 7,
                    lineCap: 'round',
                },
                series: [{
                    name: 'Taux de complétion',
                    data: reformedValues
                }],
                xaxis: {
                    categories: reformedTime,
                    labels: {
                        trim: true,
                        rotate: -45,
                        rotateAlways: true,
                        hideOverlappingLabels: true,
                        showDuplicates: false,
                    },
                },
                colors: ['#E91E63', '#D81B60', '#C2185B'],
            }

            var chart = new ApexCharts(document.querySelector(".chart__container"), options);

            chart.render();
        },
        async updateStats () {
            let response = await api.tasks.getStats()
            
            if (!response.data.success) {
                return
            }

            let reformedTime = []
            let reformedValues = []
            response.data.stats.forEach(day => {
                reformedValues.push(
                    day[0].value
                )
            })

            ApexCharts.exec('chart', 'updateSeries', [{
                data: reformedValues
            }], true);
        }
    },
    watch: { 
      	updateGraphNumber: function(newVal, oldVal) {
            this.updateStats()
        }
    }
}
</script>



<style scoped>
.chart__container {
    width: 100%;
}
</style>