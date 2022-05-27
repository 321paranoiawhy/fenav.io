<template>
    <!-- whole -->
    <div class="whole">
        <!-- 顶部导航栏 -->
        <div class="logo">FENAV</div>
        <div class="nav">
            <div class="nav-left">
                <!-- GitHub -->
                <button
                    class="button"
                    @click="gotoGitHub('https://github.com/321paranoiawhy')"
                >
                    <img
                        src="./../assets/images/LogosGithubIcon.svg"
                        alt="LogosGithubIcon"
                    />
                    <span class="span-divider"></span>
                    <span>GitHub</span>
                </button>
                <!-- span-divider -->
                <!-- Blog -->
                <button
                    class="button"
                    @click="gotoBlog('https://321paranoiawhy.github.io/')"
                >
                    <img
                        src="./../assets/images/Fa6SolidBlog.svg"
                        alt="Fa6SolidBlog"
                    />
                    <span class="span-divider"></span>
                    <span>Blog</span>
                </button>
                <!-- Sponsors -->
                <button class="button">
                    <img
                        src="./../assets/images/SimpleIconsGithubsponsors.svg"
                        alt="SimpleIconsGithubsponsors"
                    />
                    <span class="span-divider"></span>
                    <span>Sponsors</span>
                </button>
            </div>
            <!-- 顶部导航栏中央 search -->
            <div class="nav-center">
                <input type="text" placeholder="search" />
                <img
                    src="./../assets/images/IonSearchCircleSharp.svg"
                    alt="Search Icon"
                    @click="focusOnInput"
                />
            </div>
            <!-- 顶部导航栏右侧 注册 登陆 按钮 -->
            <div class="nav-right">
                <button class="button right"><span>Register</span></button>

                <button class="button"><span>Login in</span></button>
            </div>
        </div>
        <!-- 英文标题及中文标题 -->
        <div class="englishTitle">
            A Front-end Navigation Website for front-end web developers.
        </div>
        <!-- 时钟 Clock 组件 -->
        <clock></clock>
        <!-- 主页面 (sidebar 居左 content 居右) -->
        <!-- 最外层容器 sidebarAndContent -->
        <div class="sidebarAndContent">
            <!-- sidebarAndContent 居左子元素 sidebar -->
            <div class="sidebar">
                <h3>Table of Contents</h3>
                <ul>
                    <li
                        v-for="(item, index) in TOC"
                        :key="index"
                        :class="{ isActived: index === currentIndex }"
                        @click="changeIndex(index)"
                    >
                        <a :href="item.a_href">
                            <img
                                :src="
                                    require('../assets/images/' +
                                        item.img_src +
                                        '.svg')
                                "
                                :alt="item.span_text"
                            />
                            <span>{{ item.span_text }}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- sidebarAndContent 居右子元素 content -->
            <div class="content">
                <!-- Front-End -->
                <p class="divider" id="Front-End">Front-End</p>
                <div class="main">
                    <div
                        v-for="(item, index) in FrontEnd"
                        :key="index"
                        class="card"
                    >
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <!-- HTML -->
                <p class="divider" id="HTML">HTML</p>
                <div class="main">
                    <div
                        v-for="(item, index) in HTML"
                        :key="index"
                        class="card"
                    >
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <!-- CSS -->
                <p class="divider" id="CSS">CSS</p>
                <div class="main">
                    <div v-for="(item, index) in CSS" :key="index" class="card">
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <!-- JavaScript -->
                <p class="divider" id="JavaScript">JavaScript</p>
                <div class="main">
                    <div
                        v-for="(item, index) in JavaScript"
                        :key="index"
                        class="card"
                    >
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <!-- SVG -->
                <p class="divider" id="SVG">SVG</p>
                <div class="main">
                    <div v-for="(item, index) in SVG" :key="index" class="card">
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <!-- Code -->
                <p class="divider" id="Code">Code</p>
                <div class="main">
                    <div
                        v-for="(item, index) in Code"
                        :key="index"
                        class="card"
                    >
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <!-- Algorithms Visualization -->
                <p class="divider" id="Algorithms Visualization">
                    Algorithms Visualization
                </p>
                <div class="main">
                    <div
                        v-for="(item, index) in AlgorithmsVisualization"
                        :key="index"
                        class="card"
                    >
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <!-- Third-party Library -->
                <p class="divider" id="Third-party Library">
                    Third-party Library
                </p>
                <div class="main">
                    <div
                        v-for="(item, index) in ThirdPartyLibrary"
                        :key="index"
                        class="card"
                    >
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <!-- GitHub -->
                <p class="divider" id="GitHub">GitHub</p>
                <div class="main">
                    <div
                        v-for="(item, index) in GitHub"
                        :key="index"
                        class="card"
                    >
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <!-- Colors -->
                <p class="divider" id="Colors">Colors</p>
                <div class="main">
                    <div
                        v-for="(item, index) in Colors"
                        :key="index"
                        class="card"
                    >
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <!-- Fonts -->
                <p class="divider" id="Fonts">Fonts</p>
                <div class="main">
                    <div
                        v-for="(item, index) in Fonts"
                        :key="index"
                        class="card"
                    >
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <!-- Icons -->
                <p class="divider" id="Icons">Icons</p>
                <div class="main">
                    <div
                        v-for="(item, index) in Icons"
                        :key="index"
                        class="card"
                    >
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <!-- UI -->
                <p class="divider" id="UI">UI</p>
                <div class="main">
                    <div v-for="(item, index) in UI" :key="index" class="card">
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <!-- Measure -->
                <p class="divider" id="Measure">Measure</p>
                <div class="main">
                    <div
                        v-for="(item, index) in Measure"
                        :key="index"
                        class="card"
                    >
                        <a :href="item.url" target="_blank" class="url">{{
                            item.name
                        }}</a>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 子组件
import Card from "@/components/Card";
import Clock from "@/components/Clock";
import Pagination from "@/components/Pagination";

// JSON 数据文件
import TOC from "/public/data/TOC.json";
import FrontEnd from "/public/data/FrontEnd.json";
import HTML from "/public/data/HTML.json";
import CSS from "/public/data/CSS.json";
import JavaScript from "/public/data/JavaScript.json";
import Web from "/public/data/Web.json";
import SVG from "/public/data/SVG.json";
import Code from "/public/data/Code.json";
import CodeSandbox from "/public/data/CodeSandbox.json";
import AlgorithmsVisualization from "/public/data/AlgorithmsVisualization.json";
import ThirdPartyLibrary from "/public/data/ThirdPartyLibrary.json";
import GitHub from "/public/data/GitHub.json";
import Colors from "/public/data/Colors.json";
import Fonts from "/public/data/Fonts.json";
import Icons from "/public/data/Icons.json";
import UI from "/public/data/UI.json";
import Measure from "/public/data/Measure.json";
import { ref } from "@vue/reactivity";

// @ is an alias to /src
export default {
    name: "Home",
    components: {
        Card,
        Clock,
        Pagination,
    },
    data() {
        return {
            TOC: TOC,
            FrontEnd: FrontEnd,
            HTML: HTML,
            CSS: CSS,
            JavaScript: JavaScript,
            Web: Web,
            SVG: SVG,
            Code: Code,
            CodeSandbox: CodeSandbox,
            AlgorithmsVisualization: AlgorithmsVisualization,
            ThirdPartyLibrary: ThirdPartyLibrary,
            GitHub: GitHub,
            Colors: Colors,
            Fonts: Fonts,
            Icons: Icons,
            UI: UI,
            Measure: Measure,
        };
    },
    setup() {
        let gotoGitHub = (URL) => {
            // 跳转至 github 页面 (外部链接)
            // window.location.href = "https://github.com/321paranoiawhy";
            // 在本页面进行跳转
            window.open(URL, "_blank");
        };
        let gotoBlog = (URL) => {
            // 跳转至博客 blog 页面 (外部链接)
            window.open(URL, "_blank");
        };
        let focusOnInput = () => {
            let focus = document.querySelector("input");
            // 鼠标聚焦于 input 搜索框, 并删除搜索框的 placeholder
            focus.focus();
            focus.placeholder = "";
            // 鼠标移开 input 搜索框, 重新设置搜索框的 placeholder
            focus.onblur = () => {
                focus.placeholder = "Search";
                focus.style.backgroundColor = "white";
            };
        };
        let currentIndex = ref(0);
        let changeIndex = (index) => {
            currentIndex.value = index;
            console.log(currentIndex.value);
        };
        return {
            gotoGitHub,
            gotoBlog,
            focusOnInput,
            currentIndex,
            changeIndex,
        };
    },
};
</script>

<style lang="scss">
// 定义变量 widthAndHeight (scss 方式)
$widthAndHeight: 24px;
@font-face {
    font-family: Brooke;
    src: url(/public/fonts/Brooke.ttf);
}
@font-face {
    font-family: KingsCross;
    src: url(/public/fonts/KingsCross.ttf);
}
.logo {
    font-family: Brooke, sans-serif;
    font-size: 32px;
    letter-spacing: 15px;
    margin-bottom: 10px;
}
// englishTitle 样式
.englishTitle {
    font-family: KingsCross, sans-serif;
    font-size: 24px;
    background-image: linear-gradient(
        to right,
        red,
        orange,
        yellow,
        green,
        blue,
        indigo,
        violet
    );
    color: transparent;
    background-clip: text;
    margin-bottom: 24px;
}
// grid layout
.main {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    // 卡片高度至少 200px, 当卡片内描述内容过多时自动扩展高度
    grid-auto-rows: minmax(200px, 1fr);
    grid-gap: 3rem;
    margin: 0 3rem;
}
.sidebar {
    margin: 24px 0 24px 24px;
    position: fixed;
    height: fit-content;
    border: 1px solid rgba(60, 60, 60, 0.12);
    border-radius: 1rem;
    & span {
        margin-left: 10px;
        color: #213547;
    }
    & a {
        display: flex;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        text-decoration: none;
    }
    & li {
        list-style-type: none;
        &.isActived span {
            color: #42b883;
        }
    }
    & img {
        width: 24px;
        height: 24px;
    }
}
.content {
    // 调整 content 位置 (利用 margin-left)
    margin-left: 15%;
    // a 标签内容垂直居中
    & a {
        vertical-align: middle;
    }
}
// 水平分割线 中间带文字
p {
    display: flex;
    font-size: 24px;
    // 彩虹色文字
    background-image: linear-gradient(
        to right,
        red,
        orange,
        yellow,
        green,
        blue,
        indigo,
        violet
    );
    color: transparent;
    background-clip: text;
    // 使用渐变色作为遮罩实现两端淡出
    mask-image: linear-gradient(to right, transparent, black, transparent);
}
p:before,
p:after {
    content: "";
    flex: 1 1 0;
    border-bottom: 2px solid #000;
    margin: auto;
}
// a 标签 与 文字 间距
.description {
    margin: 15px;
}
// ul li
ul {
    padding: 0;
}
ul li {
    list-style-position: inside;
    text-align: left;
}
// 卡片
.card {
    padding: 15px 0;
    cursor: pointer;
    border: 4px solid transparent;
    border-radius: 1rem;
    // padding-box (内层)
    // border-box (外层)
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right, #ffffff, #ffffff),
        linear-gradient(
            60deg,
            #f79533,
            #f37055,
            #ef4e7b,
            #a166ab,
            #5073b8,
            #1098ad,
            #07b39b,
            #6fba82
        );
    animation: huerotate 3s infinite linear;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate
    filter: hue-rotate(360deg);
    // 设置卡片悬停时 卡片放大效果
    &:hover {
        transform: scale(1.1, 1.1);
        transition: all 0.3s;
    }
    & img {
        // 图片尺寸
        width: 28px;
        height: 28px;
        // 垂直居中
        display: inline-block;
        vertical-align: middle;
        // 与右侧 a 标签间距
        margin-right: 15px;
    }
    // 网站链接文字渐变
    & a {
        text-decoration: none;
        background: #0345ff
            linear-gradient(135deg, rgb(3, 69, 255) 0%, rgb(142, 34, 167) 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 18px;
    }
}
@keyframes huerotate {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rorate(360deg);
    }
}
// 整个网页背景色
.whole {
    // background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    background-color: rgb(255, 255, 255);
    padding: 20px 0;
    border-radius: 1rem;
}
// 顶部导航栏分隔符
.span-divider {
    color: #34a853;
    height: 25px;
    width: 2px;
    opacity: 0.8;
    background: #34a853;
    margin-right: 10px;
}
.nav {
    display: grid;
    // 顶部导航栏各自宽度
    grid-template-columns: 600px 1fr 600px;
    margin-bottom: 20px;
    & .nav-left {
        margin-left: 3rem;
        // 居左对齐
        text-align: left;
    }
    & .nav-right {
        margin-right: 3rem;
        // 居右对齐
        text-align: right;
    }
}
.nav-left button {
    margin-right: 1rem;
}
.nav-center {
    display: flex;
    justify-content: center;
    align-items: center;
    // 搜索框宽度和高度
    & input {
        width: 300px;
        height: 24px;
        border: 1px solid;
        border-radius: 1rem;
        // placeholder 文字右移
        padding-left: 15px;
    }
    & img {
        margin-left: 10px;
        cursor: pointer;
    }
}
// 顶部导航栏右侧按钮间距
.nav-right button {
    margin-left: 1rem;
}
button {
    cursor: pointer;
    font-size: 16px;
    width: 150px;
    height: 40px;
    border: 1px solid #42b883;
    background-color: inherit;
    border-radius: 1rem;
    &:hover {
        background: linear-gradient(to bottom right, #c973ff, #aebaf8);
    }
    &:active {
        position: relative;
        top: 1px;
    }
}
button img {
    // 图片尺寸: widthAndHeight * widthAndHeight
    width: $widthAndHeight;
    height: $widthAndHeight;
    // 图片垂直居中
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
}
button span {
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    font-family: "cardo";
}
</style>
