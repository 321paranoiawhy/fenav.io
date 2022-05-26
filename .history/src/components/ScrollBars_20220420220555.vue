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
