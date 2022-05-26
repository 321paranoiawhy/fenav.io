<template></template>

<script>
function displayTime() {
    let clockSelected = document.getElementByClassName("clock"); // 获取页面中的 clock 类
    let timeNow = new Date(); // 当前时间
    clockSelected.innerHTML = timeNow.toLocaleTimeString(); // 显示当前时间
    setTimeout(displayTime, 1000); // 每隔一秒刷新一次
}
windows.onload = displayTime;
export default {
    name: "Clock",
    setup() {},
};
</script>

<style lang="scss"></style>
