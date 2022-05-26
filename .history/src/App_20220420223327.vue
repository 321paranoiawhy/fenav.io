<template>
    <router-view />
</template>
<style lang="scss">
#app {
    text-align: center;
    // 设置行高和字符间距
    line-height: 1.4;
    letter-spacing: 0.01rem;
}
// 滚动条样式
#app::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
}
#app::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
}
#app::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(0.44, rgb(122, 153, 217)),
        color-stop(0.72, rgb(73, 125, 189)),
        color-stop(0.86, rgb(28, 58, 148))
    );
}
</style>
