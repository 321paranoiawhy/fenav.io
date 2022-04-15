<template>
    <div class="englishTitle">
        A Front-end Navigation Website for front-end web developers.
    </div>
    <div class="chineseTitle">专为前端开发者提供的导航网站</div>
    <!-- Front-End -->
    <p class="divider">Front-End</p>
    <div id="frontend" class="main">
        <div class="card">
            <a class="url" href="https://freefrontend.com/">Free Frontend</a>
            <div class="description">
                This website provides plenty of resources for front-end web
                developers such as
                HTML、CSS、BootStrap、JavaScript、Jquery、React、Vue、books、video
                and so on.
            </div>
        </div>
        <div class="card">
            <a class="url" href="https://codepen.io/trending">CODEPEN</a>
            <div class="description">
                A social development environment that allows users to write code in the browser and see the result of it as users
            </div>
        </div>
    </div>
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
        <div id="reference" class="card">
            <a class="url" href="https://cssreference.io/">CSS reference</a>
            <div class="description">
                Learn by example: this website is a free visual guide to CSS. It
                features the most popular properties, and explains them with
                illustrated and animated examples.
            </div>
        </div>
        <div id="grid" class="card">
            <a class="url" href="https://gridbyexample.com/">Grid by Example</a>
            <div class="description">
                This site is a collection of examples, video and other
                information to help you learn CSS Grid Layout.
            </div>
        </div>
        <div id="center in css" class="card">
            <a class="url" href="http://howtocenterincss.com/"
                >how to center in css</a
            >
            <div class="description">
                This website consolidates ways to center in CSS and generates
                the code for each situation.
            </div>
        </div>
        <div id="table" class="card">
            <a
                class="url"
                href="https://freefrontend.com/css-tables/#pricing-tables"
                >43 CSS Tables</a
            >
            <div class="description">
                Collection of free HTML and CSS table code examples: simple,
                responsive, pricing, periodic, etc.
            </div>
        </div>
    </div>
    <!-- JavaScript -->
    <p class="divider">JavaScript</p>
    <div id="JavaScript" class="main"></div>
    <!-- Browser -->
    <p class="divider">Browser</p>
    <div id="Browser" class="main"></div>
    <!-- Code -->
    <p class="divider">Code</p>
    <div id="Code" class="main">
        <div class="card">
            <a class="url" href="https://codeguide.bootcss.com/">Code Guide</a>
            <div class="description">
                编写一致、灵活和可持续的 HTML 和 CSS 代码的规范。
            </div>
        </div>
    </div>
    <!-- Third-party Library -->
    <p class="divider">Third-party Library</p>
    <div id="Code" class="main"></div>
    <!-- GitHub -->
    <p class="divider">GitHub</p>
    <div id="GitHub" class="main">
        <div id="tricks" class="card">
            <a class="url" href="https://github.com/QiShaoXuan/css_tricks"
                >.CSS {TRICKS}</a
            >
            <div class="description">Some CSS tricks.</div>
        </div>
        <div id="Inspiration" class="card">
            <a class="url" href="https://github.com/chokcoco/CSS-Inspiration"
                >CSS Inspiration</a
            >
            <div class="description">使用或学习 CSS 的灵感。</div>
        </div>
        <div id="" class="card">
            <a
                class="url"
                href="https://github.com/l-hammer/You-need-to-know-css"
                >You need to know CSS</a
            >
            <div class="description">
                CSS tricks web developers need to know
            </div>
        </div>
    </div>
    <!-- Color -->
    <p class="divider">GitHub</p>
    <div id="Code" class="main">
        <div id="" class="card">
            <a
                class="url"
                href="https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF"
                >Paletton</a
            >
            <div class="description">
                CSS tricks web developers need to know
            </div>
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
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 30px;
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
