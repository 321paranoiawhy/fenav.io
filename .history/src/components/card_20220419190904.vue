<template></template>
<script>
const app = Vue.createApp({});

// 定义一个名为 runoob 的新全局组件
app.component("card", {
    template: "<div>自定义组件!</div>",
});

app.mount("#app");
export default {
    setup() {},
};
</script>
<style scoped lang="scss"></style>
