<template>
    <div class="main">
        <div class="card">
            <a class="url" href="https://html.spec.whatwg.org/">HTML Living Standard</a>
            <div class="description"></div>
        </div>
        <div class="card">
            <a class="url" href="http://html5doctor.com/">HTML5 Doctor</a>
            <div class="description">Helping you implement HTML5 today</div>
        </div>
        <div class="card">
            <a class="url" href="https://codeguide.bootcss.com/">Code Guide</a>
            <div class="description">编写一致、灵活和可持续的 HTML 和 CSS 代码的规范。</div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "Home",
    components: {},
};
</script>

<style scoped lang="scss">
.main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid
}
</style>
