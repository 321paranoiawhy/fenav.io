<template>
    <router-view />
    <card></card>
</template>
<script>
import Card from "@/components/Card.vue";
export default {
    name: "app",
    components: {
        Card,
    },
    setup() {},
};
</script>
<style scoped lang="scss">
#app {
    text-align: center;
    // 设置行高和字符间距
    line-height: 1.4;
    letter-spacing: 0.01rem;
}
</style>
