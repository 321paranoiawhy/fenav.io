<template>
<div class="englishTitle">A Front-end Navigation Website for front-end web developers.</div>
<div class="chineseTitle">专为前端开发者提供的导航网站</div>
    <!-- HTML -->
    <p class="divider">HTML</p>
    <div id="HTML" class="main">
        <div class="card">
            <a class="url" href="https://html.spec.whatwg.org/"
                >HTML Living Standard</a
            >
            <div class="description">
                The current HTML standard which obsoletes all other
                previously-published HTML specifications.
            </div>
        </div>
        <div class="card">
            <a class="url" href="https://www.w3.org/html/ig/zh/wiki/HTML5"
                >HTML5 (W3C)</a
            >
            <div class="description">
                本规范仅限于提供编写用户体验良好的，静态或动态的，语义化的标记语言和相关脚本API的指导。
            </div>
        </div>
        <div class="card">
            <a class="url" href="http://html5doctor.com/">HTML5 Doctor</a>
            <div class="description">Helping you implement HTML5 today</div>
        </div>
    </div>
    <!-- CSS -->
    <p class="divider">CSS</p>
    <div id="CSS" class="main">
        <div id="grid" class="card">
            <a class="url" href="https://learncssgrid.com/">CSS Grid</a>
            <div class="description">
                This guide is a powerful tool that allows for two-dimensional
                layouts to be created on the web and was created as a resource
                to help developers better understand and learn Grid.
            </div>
        </div>
        <div id="tricks" class="card">
            <a class="url" href="https://css-tricks.com/">CSS Tricks</a>
            <div class="description">
                This website shows how to use CSS elegantly and efficiently.
            </div>
        </div>
        <div id="learn" class="card">
            <a class="url" href="https://web.dev/learn/css/">Learn CSS</a>
            <div class="description">
                An evergreen CSS course and reference to level up your web
                styling expertise.
            </div>
        </div>
        <div id="grid" class="card">
            <a class="url" href="https://cssreference.io/flexbox/">Learn CSS</a>
            <div class="description">
                The CSS properties that allow you to use the CSS3 Flexbox
                capabilities.
            </div>
        </div>
    </div>
    <!-- JavaScript -->
    <p class="divider">JavaScript</p>
    <!-- Browser -->
    <p class="divider">Browser</p>
    <!-- Code -->
    <p class="divider">Code</p>
    <div class="card">
        <a class="url" href="https://codeguide.bootcss.com/">Code Guide</a>
        <div class="description">
            编写一致、灵活和可持续的 HTML 和 CSS 代码的规范。
        </div>
    </div>
    <!-- Third-party Library -->
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
@font-face {
    font-family: KingsCross;
    src: url(/public/fonts/KingsCross.ttf);
}
@font-face {
    font-family: NotoSansSC-Regular;
    src: url(/public/fonts/NotoSansSC-Regular.otf);
}
.englishTitle {
  font-family: KingsCross;
  font-size: 32px;
}
.chineseTitle {
  font-family: NotoSanSC-Regular;
  font-size: 32px;
  margin-bottom: 30px;
}
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
    flex: 1 1 0;
    border-bottom: 2px solid #000;
    margin: auto;
}
</style>
