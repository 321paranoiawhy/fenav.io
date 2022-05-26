<template>
    <span class="clock"></span>
</template>

<script>
export default {
    name: "Clock",
    methods: {
        displayTime() {
            let clockSelected = document.querySelectorAll(".clock"); // 获取页面中的 clock 类
            console.log(clockSelected);
            let timeNow = new Date(); // 当前时间
            clockSelected.innerHTML = timeNow.toLocaleTimeString(); // 显示当前时间
            setTimeout(this.displayTime, 1000); // 每隔一秒刷新一次
        },
    },
    mounted() {
        window.onload = this.displayTime(); // 当页面加载完成后, 显示时间
    },
    setup() {},
};
</script>

<style lang="scss"></style>
