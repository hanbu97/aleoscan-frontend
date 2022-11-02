import {
    watch,
    onMounted,
    onBeforeUnmount,
    getCurrentInstance,
} from 'vue'
import * as echarts from 'echarts'
import WorldGeo from "../../map/json/world.json";
import "echarts/lib/chart/map";

function throttle(fn, delay = 3000) {
    let time = null
    let startTime
    return function (...args) {
        // @ts-ignore
        const ctx = this
        const now = Date.now()
        if (startTime && now < startTime + delay) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                startTime = now
                fn.apply(ctx, args)
            }, delay)
        } else {
            startTime = now
            fn.apply(ctx, args)
        }
    }
}

export default function useEcharts(props) {
    let vm

    let echartsInstance
    let chartEl

    // const resizeStyle = reactive<{ width: string, height: string }>({
    //     width: '100%',
    //     height: '100%'
    // })

    function initEChart(options) {
        if (echartsInstance) {
            return
        }
        echarts.registerMap("world", WorldGeo);
        echartsInstance = echarts.init(chartEl)
        console.log(echarts);
        echartsInstance.setOption(options || {}, true)
    }

    // watch the options' changes to call the callback
    const stopWatch = watch(() => props.options, (newOpt, oldOpt) => {
        if (!echartsInstance && newOpt) {
            initEChart(newOpt)
        } else {
            echartsInstance.setOption(newOpt, newOpt !== oldOpt)
        }
    })

    // 监听 window resize
    const listenResize = throttle(() => {
        // const { width, height } = chartEl.getBoundingClientRect()
        // resizeStyle.width = width + 'px'
        // resizeStyle.height = height + 'px'
        echartsInstance.setOption(props.options, false)
        echartsInstance.resize() // 画布大小自适应 resize
    }, 200)

    onMounted(() => {
        vm = getCurrentInstance()
        // @ts-ignore
        chartEl = vm.proxy.$refs.echartsRef
        initEChart(props.options)
        window.addEventListener('resize', listenResize)
    })
    onBeforeUnmount(() => {
        stopWatch()
        window.removeEventListener('resize', listenResize)
    })
    return {}
}