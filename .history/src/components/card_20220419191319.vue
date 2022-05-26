<template></template>
<script>
const app = Vue.createApp({});

// 定义一个名为 runoob 的新全局组件
app.component("card", {
    template: "<div class="card">
                        <img/>
                        <a
                            class="url"
                            target="_blank"
                            >
                        </a>
                        <div class="description">
                        </div>
                    </div>",
});

app.mount("#app");
export default {
    setup() {},
};
</script>
<style scoped lang="scss"></style>
