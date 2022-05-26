<template>
    <!-- https://codepen.io/GhostRider/pen/oNvoNv -->
    <div class="scrollbar" id="style-8">
        <div class="force-overflow"></div>
    </div>
</template>

<script>
export default {
    name: "Scroll",
    setup() {},
};
</script>

<style lang="scss">
// 基本样式
.scrollbar {
    margin-left: 30px;
    float: left;
    height: 300px;
    width: 65px;
    background: #f5f5f5;
    overflow-y: scroll;
    margin-bottom: 25px;
}

.force-overflow {
    min-height: 450px;
}

#wrapper {
    text-align: center;
    width: 500px;
    margin: auto;
}

/*
 *  STYLE 8
 */

#style-8::-webkit-scrollbar-track {
    border: 1px solid black;
    background-color: #f5f5f5;
}

#style-8::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
}

#style-8::-webkit-scrollbar-thumb {
    background-color: #000000;
}
</style>
