<template>
    <h2>数字时钟</h2>
    <div class="clock"></div>
</template>

<script>
export default {
    name: "Clock",
    methods: {
        displayTime() {
            let clockSelected = document.getElementsByClassName("clock")[0]; // 获取页面中的 clock 类
            let currentTime = new Date(); // 当前时间
            // 当插入纯文本时, 建议不要使用 innerHTML
            // clockSelected.innerHTML = currentTime.toLocaleTimeString(); // 显示当前时间

            // https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent
            // textContent 可以防止 XSS 攻击
            clockSelected.textContent = currentTime.toLocaleTimeString(); // 显示当前时间
            // setInterval(this.displayTime, 1000); // 每隔一秒刷新一次
            // setTimeout(this.displayTime, 1000); // 每隔一秒刷新一次
        },
    },
    mounted() {
        window.onload = this.displayTime(); // 当页面加载完成后, 显示时间
    },
    setup() {},
};
</script>

<style lang="scss">
.clock {
}
</style>
