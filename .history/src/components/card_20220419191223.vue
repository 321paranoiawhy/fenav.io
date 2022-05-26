<template></template>
<script>
const app = Vue.createApp({});

// 定义一个名为 runoob 的新全局组件
app.component("card", {
    template: "<div class="card">
                        <img
                            src="../assets/images/IconParkOutlineDribble.svg"
                            alt="Dribbble"
                        />
                        <a
                            class="url"
                            href="https://dribbble.com/"
                            target="_blank"
                            >Dribbble
                        </a>
                        <div class="description">
                            Dribbble is the world's leading community for
                            creatives to share, grow, and get hired.
                        </div>
                    </div>",
});

app.mount("#app");
export default {
    setup() {},
};
</script>
<style scoped lang="scss"></style>
