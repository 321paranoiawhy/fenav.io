<template>
      <p class="divider">HTML</p>
    <div id="HTML" class="main">
        <div class="card">
            <a class="url" href="https://html.spec.whatwg.org/">HTML Living Standard</a>
            <div class="description">The current HTML standard which obsoletes all other previously-published HTML specifications. </div>
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
          <p class="divider">CSS</p>
          <p class="divider">JavaScript</p>
          <p class="divider">Browser</p>
          <p class="divider">Code</p>
          <p class="divider">Third-party Library</p>

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
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 10px;
}
// 水平分割线 中间带文字
p {
  display: flex;
}
p:before,
p:after {
  content: "";
  flex:1 1 0;
  border-bottom: 2px solid #000;
  margin: auto;
}
</style>
