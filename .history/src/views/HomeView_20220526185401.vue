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
                <img src="../assets/images/GgMenuBoxed.svg" alt="Menu" />
                <ul>
                    <li>
                        <!-- Search -->
                        <img
                            src="../assets/images/TeenyiconsSearchCircleOutline.svg"
                            alt="Search"
                        />
                        <span>Search</span>
                    </li>
                    <li>
                        <!-- HTML5 -->
                        <img
                            src="../assets/images/TeenyiconsHtml5Outline.svg"
                            alt="HTML"
                        />
                        <span>HTML</span>
                    </li>
                    <li>
                        <!-- CSS3 -->
                        <img
                            src="../assets/images/TeenyiconsCss3Outline.svg"
                            alt="CSS"
                        />
                        <span>CSS</span>
                    </li>
                    <li>
                        <!-- JavaScript -->
                        <img
                            src="../assets/images/TeenyiconsJavascriptOutline.svg"
                            alt="JavaScript"
                        />
                        <span>JavaScript</span>
                    </li>
                    <li>
                        <!-- SVG -->
                        <img
                            src="../assets/images/TeenyiconsSvgOutline.svg"
                            alt="SVG"
                        />
                        <span>SVG</span>
                    </li>
                    <li>
                        <!-- Browser -->
                        <img
                            src="../assets/images/TeenyiconsChromeOutline.svg"
                            alt="Browser"
                        />
                        <span>Browser</span>
                    </li>
                    <li>
                        <!-- Code -->
                        <img
                            src="../assets/images/BiCodeSquare.svg"
                            alt="Code"
                        />
                        <span>Code</span>
                    </li>
                    <li>
                        <!-- Algorithms -->
                        <img
                            src="../assets/images/SimpleIconsThealgorithms.svg"
                            alt="Algorithms"
                        />
                        <span>Algorithms</span>
                    </li>
                    <li>
                        <!-- Third-party Library -->
                        <img
                            src="../assets/images/MdiNpmVariantOutline.svg"
                            alt="Third-party Library"
                        />
                        <span>Third-party Library</span>
                    </li>
                    <li>
                        <!-- GitHub -->
                        <img
                            src="../assets/images/TeenyiconsGithubOutline.svg"
                            alt="GitHub"
                        />
                        <span>GitHub</span>
                    </li>
                    <li>
                        <!-- Colors -->
                        <img
                            src="../assets/images/IcOutlineColorLens.svg"
                            alt="Colors"
                        />
                        <span>Colors</span>
                    </li>
                    <li>
                        <!-- Fonts -->
                        <img
                            src="../assets/images/TeenyiconsTextOutline.svg"
                            alt="Fonts"
                        />
                        <span>Fonts</span>
                    </li>
                    <li>
                        <!-- UI -->
                        <img
                            src="../assets/images/TeenyiconsUnderlineOutline.svg"
                            alt="UI"
                        />
                        <span>UI</span>
                    </li>
                    <li>
                        <!-- Measure -->
                        <img
                            src="../assets/images/GisMeasureArea.svg"
                            alt="UI"
                        />
                        <span>Measure</span>
                    </li>
                    <li>
                        <!-- Measure -->
                        <img
                            src="../assets/images/GisMeasureArea.svg"
                            alt="UI"
                        />
                        <span>Measure</span>
                    </li>
                    <li>
                        <!-- Measure -->
                        <img
                            src="../assets/images/GisMeasureArea.svg"
                            alt="UI"
                        />
                        <span>Measure</span>
                    </li>
                    <li>
                        <!-- Measure -->
                        <img
                            src="../assets/images/GisMeasureArea.svg"
                            alt="UI"
                        />
                        <span>Measure</span>
                    </li>
                    <li>
                        <!-- Measure -->
                        <img
                            src="../assets/images/GisMeasureArea.svg"
                            alt="UI"
                        />
                        <span>Measure</span>
                    </li>
                    <li>
                        <!-- Measure -->
                        <img
                            src="../assets/images/GisMeasureArea.svg"
                            alt="UI"
                        />
                        <span>Measure</span>
                    </li>
                    <li>
                        <!-- Measure -->
                        <img
                            src="../assets/images/GisMeasureArea.svg"
                            alt="UI"
                        />
                        <span>Measure</span>
                    </li>
                    <li>
                        <!-- Measure -->
                        <img
                            src="../assets/images/GisMeasureArea.svg"
                            alt="UI"
                        />
                        <span>Measure</span>
                    </li>
                    <li>
                        <!-- Measure -->
                        <img
                            src="../assets/images/GisMeasureArea.svg"
                            alt="UI"
                        />
                        <span>Measure</span>
                    </li>
                    <li>
                        <!-- Measure -->
                        <img
                            src="../assets/images/GisMeasureArea.svg"
                            alt="UI"
                        />
                        <span>Measure</span>
                    </li>
                    <li>
                        <!-- Measure -->
                        <img
                            src="../assets/images/GisMeasureArea.svg"
                            alt="UI"
                        />
                        <span>Measure</span>
                    </li>
                    <!-- Log out -->
                    <img
                        src="../assets/images/TeenyiconsLogoutSolid.svg"
                        alt="Log out"
                    />
                </ul>
            </div>
            <!-- sidebarAndContent 居右子元素 content -->
            <div class="content">
                <!-- Front-End -->
                <p class="divider" id="Front-End">Front-End</p>
                <div id="Front-End" class="main">
                    <div class="card">
                        <a
                            class="url"
                            href="https://freefrontend.com/"
                            target="_blank"
                            >Free Frontend</a
                        >
                        <div class="description">
                            This website provides plenty of resources for
                            front-end web developers such as
                            HTML、CSS、BootStrap、JavaScript、Jquery、React、Vue、books、video
                            and so on.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/TeenyiconsCodepenOutline.svg"
                            alt="Codepen"
                        />
                        <a
                            class="url"
                            href="https://codepen.io/trending"
                            target="_blank"
                            >Codepen</a
                        >
                        <div class="description">
                            A social development environment that allows users
                            to write code in the browser and see the result of
                            it as users build. It focus primarily on front-end
                            languages like HTML, CSS, JavaScript, and
                            preprocessing syntaxes that turn into those things.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/Carbon.svg"
                            alt="Carbon"
                            style="width: 100px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://carbon.now.sh/"
                            target="_blank"
                            >Carbon</a
                        >
                        <div class="description">
                            Create and share beautiful images of your source
                            code. Start typing or drop a file into the text area
                            to get started.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://caniuse.com/"
                            target="_blank"
                            >Can I Use</a
                        >
                        <div class="description">
                            "Can I use" provides up-to-date browser support
                            tables for support of front-end web technologies on
                            desktop and mobile web browsers.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/SimpleIconsMdnwebdocs.svg"
                            alt="MDN"
                        />
                        <a
                            class="url"
                            href="https://developer.mozilla.org/zh-CN/"
                            target="_blank"
                            >MDN</a
                        >
                        <div class="description">
                            Documenting web technologies, including CSS, HTML,
                            and JavaScript, since 2005.
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/images/LogosW3c.svg" alt="W3C" />
                        <a
                            class="url"
                            href="https://www.w3.org/"
                            target="_blank"
                            >W3C</a
                        >
                        <div class="description">
                            The World Wide Web Consortium (W3C) is an
                            international community where Member organizations,
                            a full-time staff, and the public work together to
                            develop Web standards. W3C's mission is to lead the
                            Web to its full potential.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/SimpleIconsFreecodecamp.svg"
                            alt="Free Code Camp"
                        />
                        <a
                            class="url"
                            href="https://www.freecodecamp.org/"
                            target="_blank"
                            >Free Code Camp</a
                        >
                        <div class="description">
                            <ul>
                                <li>Learn to code — for free.</li>
                                <li>Build projects.</li>
                                <li>Earn certifications.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://webcode.tools/"
                            target="_blank"
                            >Web Code Tools</a
                        >
                        <div class="description">
                            The ultimate web code generators. Generate HTML,
                            CSS, JSON-LD, Twitter Cards, Open Graph and more! No
                            coding skills required.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/logo-front-end-checklist.jpg"
                            alt="The Front-End Checklist"
                        />
                        <a
                            class="url"
                            href="https://frontendchecklist.io/"
                            target="_blank"
                            >The Front-End Checklist</a
                        >
                        <div class="description">
                            The Front-End Checklist Application is perfect for
                            modern websites and meticulous developers!
                        </div>
                    </div>
                </div>
                <!-- HTML -->
                <p class="divider">HTML</p>
                <div id="HTML" class="main">
                    <div class="card">
                        <img
                            src="../assets/images/WHATWGLogo.svg"
                            alt="WHATWG"
                        />
                        <a
                            class="url"
                            href="https://html.spec.whatwg.org/"
                            target="_blank"
                            >HTML Living Standard</a
                        >
                        <div class="description">
                            The current HTML standard which obsoletes all other
                            previously-published HTML specifications.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://www.w3.org/html/ig/zh/wiki/HTML5"
                            target="_blank"
                            >HTML5 (W3C)</a
                        >
                        <div class="description">
                            本规范仅限于提供编写用户体验良好的， 静态或动态的，
                            语义化的标记语言和相关脚本API的指导。
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://sketch2code.azurewebsites.net/"
                            target="_blank"
                            >Sketch2Code</a
                        >
                        <div class="description">
                            <ul>
                                <li>
                                    Transform any hand-drawn design into a HTML
                                    code with AI.
                                </li>
                                <li>
                                    Choose a sample from the gallery or upload
                                    your own design.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- CSS -->
                <p class="divider">CSS</p>
                <div id="CSS" class="main">
                    <div class="card">
                        <img
                            src="/LearnCSSGridFavicon.ico"
                            alt="Learn CSS Grid"
                        />
                        <a
                            class="url"
                            href="https://learncssgrid.com/"
                            target="_blank"
                            >Learn CSS Grid</a
                        >
                        <div class="description">
                            A powerful tool that allows for two-dimensional
                            layouts to be created on the web and was created as
                            a resource to help developers better understand and
                            learn Grid.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/CSSGridGenerator.svg"
                            alt="CSS Grid generator"
                        />
                        <a
                            class="url"
                            href="https://cssgrid-generator.netlify.app/"
                            target="_blank"
                            >CSS Grid generator
                        </a>
                        <div class="description">
                            <ul>
                                <li>
                                    A way for people to use CSS Grid features
                                    quickly to create dynamic layouts.
                                </li>
                                <li>
                                    Set the numbers, and units of columns and
                                    rows, and it will generate a CSS grid!
                                </li>
                                <li>
                                    Drag within the boxes to create divs placed
                                    within the grid.
                                </li>
                                <li>
                                    <a
                                        class="url"
                                        href="https://github.com/sdras/cssgridgenerator"
                                        target="_blank"
                                        >GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/CSSTricksLogo.svg"
                            alt="CSS Tricks"
                        />
                        <a
                            class="url"
                            href="https://css-tricks.com/"
                            target="_blank"
                            >CSS Tricks</a
                        >
                        <div class="description">
                            This website shows how to use CSS elegantly and
                            efficiently.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/css-reference-icon.png"
                            alt="CSS Reference"
                        />
                        <a
                            class="url"
                            href="https://cssreference.io/"
                            target="_blank"
                            >CSS Reference</a
                        >
                        <div class="description">
                            Learn by example: this website is a free visual
                            guide to CSS. It features the most popular
                            properties, and explains them with illustrated and
                            animated examples.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://gridbyexample.com/"
                            target="_blank"
                            >Grid by Example</a
                        >
                        <div class="description">
                            This site is a collection of examples, video and
                            other information to help you learn CSS Grid Layout.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="http://howtocenterincss.com/"
                            target="_blank"
                            >How to Center in CSS</a
                        >
                        <div class="description">
                            This website consolidates ways to center in CSS and
                            generates the code for each situation.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://specifishity.com/"
                            target="_blank"
                            >CSS specifishity</a
                        >
                        <div class="description">
                            Specify the priority of CSS selectors using pictures
                            with plankton, fish and sharks.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://getcssscan.com/css-box-shadow-examples"
                            target="_blank"
                            >93 Beautiful CSS box-shadow examples</a
                        >
                        <div class="description">
                            A curated collection of 93 free box-shadow examples
                            from some of the most beautiful websites on the
                            internet.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/animista-logo-small.svg"
                            alt="Animista"
                        />
                        <a
                            class="url"
                            href="https://animista.net/"
                            target="_blank"
                            >Animista</a
                        >
                        <div class="description">
                            Animista is a CSS animation library and a place
                            where you can play with a collection of ready-made
                            CSS animations and download only those you will use.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://csslayout.io/"
                            target="_blank"
                            >CSS Layout</a
                        >
                        <div class="description">
                            Popular layouts and patterns made with CSS only.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/CSSScanLogo.png"
                            alt="CSS Scan"
                        />
                        <a
                            class="url"
                            href="https://getcssscan.com/"
                            target="_blank"
                            >CSS Scan</a
                        >
                        <div class="description">
                            <ul>
                                <li>
                                    The fastest and easiest way to check, copy
                                    and edit CSS.
                                </li>
                                <li>
                                    Goodbye to "Inspect Element" — Check the CSS
                                    of any element you hover over, instantly,
                                    and copy its entire rules with a single
                                    click.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/getwaves.svg"
                            alt="Get Waves"
                        />
                        <a
                            class="url"
                            href="https://getwaves.io/"
                            target="_blank"
                            >Get Waves</a
                        >
                        <div class="description">
                            A free SVG wave generator to make unique SVG waves
                            for your next web design. Choose a curve, adjust
                            complexity, randomize!
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/ResponsivelyLogo.svg"
                            alt="Responsively App"
                        />
                        <a
                            class="url"
                            href="https://responsively.app/"
                            target="_blank"
                            >Responsively App</a
                        >
                        <div class="description">
                            A must-have dev-tool that aids faster and precise
                            responsive web development.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/UnusedCSSLogo.png"
                            alt="Unused CSS"
                            style="width: 100px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://unused-css.com/"
                            target="_blank"
                            >Unused CSS</a
                        >
                        <div class="description">
                            Unused CSS is an online tool to remove unused CSS
                            rules. It will check your pages, find unused CSS and
                            let you download a clean CSS file.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/CSSGradientLogo.svg"
                            alt="CSS Gradient"
                        />
                        <a
                            class="url"
                            href="https://cssgradient.io/"
                            target="_blank"
                            >CSS Gradient
                        </a>
                        <div class="description">
                            CSS Gradient is a happy little website and free tool
                            that lets you create a gradient background for
                            websites. Besides being a css gradient generator,
                            the site is also chock-full of colorful content
                            about gradients from technical articles to real life
                            gradient examples like Stripe and Instagram.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/WebGradients.png"
                            alt="WebGradients"
                        />
                        <a
                            class="url"
                            href="https://webgradients.com/"
                            target="_blank"
                            >Web Gradient
                        </a>
                        <div class="description">
                            WebGradients is a free collection of 180 linear
                            gradients that you can use as content backdrops in
                            any part of your website. Easy copy CSS3
                            crossbrowser code and use it in a moment! We've also
                            prepared a .PNG version of each gradient. As a
                            bonus, there are packs for Sketch & Photoshop.
                        </div>
                    </div>
                    <div class="card">
                        <img src="/AnimateLogo.ico" alt="Animate.css" />
                        <a
                            class="url"
                            href="https://animate.style/"
                            target="_blank"
                            >Animate.css
                        </a>
                        <div class="description">
                            Animate.css is a library of ready-to-use,
                            cross-browser animations for you to use in your
                            projects.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://www.toptal.com/developers/cssminifier/"
                            target="_blank"
                            >CSS Minifier
                        </a>
                        <div class="description">
                            Online CSS Minifier/Compressor. Free! Provides an
                            API. Simple Quick and Fast.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/CSSPodcast.png"
                            alt="CSS Podcast"
                        />
                        <a
                            class="url"
                            href="https://thecsspodcast.libsyn.com/"
                            target="_blank"
                            >CSS Podcast
                        </a>
                        <div class="description">
                            Cascading Style Sheets (CSS) is the web's core
                            styling language. For web developers, It's one of
                            the quickest technologies to get started with, but
                            one of the hardest to master. Follow Una Kravets and
                            Adam Argyle, Developer Advocates from Google, who
                            gleefully breakdown complex aspects of CSS into
                            digestible episodes covering everything from
                            accessibility to z-index.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/GradientButtons.png"
                            alt="Gradient Buttons"
                        />
                        <a
                            class="url"
                            href="https://gradientbuttons.colorion.co/"
                            target="_blank"
                            >Gradient Buttons
                        </a>
                        <div class="description">
                            Hundreds of CSS gradients buttons. One click copy to
                            clipboard.
                        </div>
                    </div>
                </div>
                <!-- JavaScript -->
                <p class="divider">JavaScript</p>
                <div id="JavaScript" class="main">
                    <div class="card">
                        <img
                            src="../assets/images/ECMA.svg"
                            alt="ECMA-262"
                            style="width: 80px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://www.ecma-international.org/technical-committees/tc39/?tab=published-standards"
                            target="_blank"
                            >ECMA-262</a
                        >
                        <div class="description">
                            ECMA-262 (ECMAScript) is published standards by
                            TC39.
                        </div>
                    </div>
                    <div class="card">
                        <img src="/CodeToGo.ico" alt="Code to go" />
                        <a
                            class="url"
                            href="https://codetogo.io/"
                            target="_blank"
                            >Code to go</a
                        >
                        <div class="description">
                            Find up to date snippets for JavaScript & React use
                            cases.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/JSTipsLogo.svg"
                            alt="JS Tips"
                        />
                        <a
                            class="url"
                            href="https://www.jstips.co/"
                            target="_blank"
                            >JS Tips</a
                        >
                        <div class="description">
                            JS Tips is a collection of useful daily JavaScript
                            tips that will allow you to improve your code
                            writing.
                        </div>
                    </div>
                </div>
                <!-- Web -->
                <p class="divider">Web</p>
                <div id="Web" class="main">
                    <div class="card">
                        <img
                            src="../assets/images/LogosWebDevIcon.svg"
                            alt="Web.dev"
                        />
                        <a class="url" href="https://web.dev/" target="_blank"
                            >Web.dev</a
                        >
                        <div class="description">
                            <ul>
                                <li>
                                    Let's build the future of the web, together.
                                </li>
                                <li>
                                    Take advantage of the latest modern
                                    technologies to build amazing web
                                    experiences for everyone.
                                </li>
                                <li>Powered by Google.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- SVG -->
                <p class="divider">SVG</p>
                <div id="SVG" class="main">
                    <div class="card">
                        <img
                            src="../assets/images/blobmaker.svg"
                            alt="Blobmaker"
                        />
                        <a
                            class="url"
                            href="https://www.blobmaker.app/"
                            target="_blank"
                            >Blobmaker</a
                        >
                        <div class="description">
                            Blobmaker is a free generative design tool made with
                            💕 by z creative labs, to help you quickly create
                            random, unique, and organic-looking SVG shapes.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/getwaves.svg"
                            alt="Get Waves"
                        />
                        <a
                            class="url"
                            href="https://getwaves.io/"
                            target="_blank"
                            >Get Waves</a
                        >
                        <div class="description">
                            A free SVG wave generator to make unique SVG waves
                            for your next web design. Choose a curve, adjust
                            complexity, randomize!
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/haikei.svg"
                            alt="Haikei"
                            style="width: 70px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://haikei.app/"
                            target="_blank"
                            >Haikei</a
                        >
                        <div class="description">
                            Haikei is a web app to generate unique SVG shapes,
                            backgrounds, and patterns - ready to use with your
                            design tools and workflow.
                        </div>
                    </div>
                </div>
                <!-- Browser -->
                <p class="divider">Browser</p>
                <div id="Browser" class="main"></div>
                <!-- Code -->
                <p class="divider">Code</p>
                <div id="Code" class="main">
                    <div class="card">
                        <img src="/CodeGuide.ico" alt="Code Guide" />
                        <a
                            class="url"
                            href="https://codeguide.bootcss.com/"
                            target="_blank"
                            >Code Guide</a
                        >
                        <div class="description">
                            编写一致、灵活和可持续的 HTML 和 CSS 代码的规范。
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/SimpleIconsLeetcode.svg"
                            alt="LeetCode"
                        />
                        <a
                            class="url"
                            href="https://leetcode.com/"
                            target="_blank"
                            >LeetCode</a
                        >
                        <div class="description">
                            LeetCode is the best platform to help you enhance
                            your skills, expand your knowledge and prepare for
                            technical interviews.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/LintCode.svg"
                            alt="LintCode"
                            style="width: 100px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://www.lintcode.com/"
                            target="_blank"
                            >Lint Code</a
                        >
                        <div class="description">
                            Powerful coding training system. LintCode has the
                            most interview problems covering Google, Facebook,
                            Linkedin, Amazon, Microsoft and so on.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/hihoCoder.png"
                            alt="hihoCoder"
                            style="width: 100px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://hihocoder.com/"
                            target="_blank"
                            >hihoCoder</a
                        >
                        <div class="description">
                            Learn and practise, compete and make Friends, stand
                            out and get hired.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://www.crackingthecodinginterview.com/"
                            target="_blank"
                            >CC 150</a
                        >
                        <div class="description">
                            《Cracking the Coding Interview: 150 Programming
                            Interview Questions and Solutions》 teaches what you
                            need to know and enables you to perform at your very
                            best. The author have coached and interviewed
                            hundreds of software engineers. The result is this
                            book.
                            <ul>
                                <li>
                                    <a
                                        class="url"
                                        href="https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850"
                                        target="_blank"
                                        >Buy it from Amazon</a
                                    >
                                </li>
                                <li>
                                    <a
                                        class="url"
                                        href="https://github.com/panxl6/cc150"
                                        target="_blank"
                                        >Python 实现</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <!-- topcoder-wipro -->
                        <img
                            src="../assets/images/topcoder-wipro.svg"
                            alt="Topcoder"
                            style="
                                filter: brightness(0);
                                width: 100px;
                                height: 28px;
                            "
                        />
                        <a
                            class="url"
                            href="https://www.topcoder.com/"
                            target="_blank"
                            >Topcoder</a
                        >
                        <div class="description">
                            Topcoder (formerly TopCoder) is a crowdsourcing
                            company with an open global community of designers,
                            developers, data scientists, and competitive
                            programmers.
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/images/AtCoder.png" alt="AtCoder" />
                        <a
                            class="url"
                            href="https://atcoder.jp/"
                            target="_blank"
                            >AtCoder</a
                        >
                        <div class="description">
                            AtCoder is a programming contest site for anyone
                            from beginners to experts. We hold weekly
                            programming contests online.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/Codewars.png"
                            alt="Codewars"
                            style="width: 100px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://www.codewars.com/"
                            target="_blank"
                            >Codewars</a
                        >
                        <div class="description">
                            <ul>
                                <li>Sharpen your skills.</li>
                                <li>Get instant feedback.</li>
                                <li>Earn ranks and honor.</li>
                                <li>Tap into the collective wisdom.</li>
                                <li>Create your own kata.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Algorithm visualization -->
                <p class="divider">Algorithm visualization</p>
                <div id="Algorithm visualization" class="main">
                    <div class="card">
                        <a
                            class="url"
                            href="https://algorithm-visualizer.org/"
                            target="_blank"
                            >Algorithm Visualizer</a
                        >
                        <div class="description">
                            Algorithm Visualizer is an interactive online
                            platform that visualizes algorithms from code.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/VisualGo.png"
                            alt="VISUALGO"
                        />
                        <a
                            class="url"
                            href="https://visualgo.net/en"
                            target="_blank"
                            >VISUALGO</a
                        >
                        <div class="description">
                            Visualising data structures and algorithms through
                            animation.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://github.com/skidding/illustrated-algorithms"
                            target="_blank"
                            >Illustrated Algorithms</a
                        >
                        <div class="description">
                            Inspired by Grokking Algorithms and
                            python-execution-trace, this project aims to reveal
                            the mechanics behind algorithms via interactive
                            visualizations of their execution.
                        </div>
                    </div>
                </div>
                <!-- Third-party Library -->
                <p class="divider">Third-party Library</p>
                <div id="Third-party Library" class="main">
                    <div class="card">
                        <img
                            src="../assets/images/Materialize.svg"
                            alt="Materialize"
                        />
                        <a
                            class="url"
                            href="https://materializecss.com/"
                            target="_blank"
                            >Materialize</a
                        >
                        <div class="description">
                            A modern responsive front-end framework based on
                            Material Design.
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/images/ColorJS.svg" alt="ColorJS" />
                        <a
                            class="url"
                            href="https://colorjs.io/"
                            target="_blank"
                            >Color.js</a
                        >
                        <div class="description">
                            Color.js is a JavaScript library for color
                            manipulation. It is a fork of the Color.js library
                            by Sam Sehnert.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://marcbruederlin.github.io/particles.js/"
                            target="_blank"
                            >particles.js</a
                        >
                        <div class="description">
                            Particles.js is a lightweight, dependency-free and
                            responsive javascript plugin for particle
                            backgrounds.
                        </div>
                    </div>
                </div>
                <!-- GitHub -->
                <p class="divider">GitHub</p>
                <div id="GitHub" class="main">
                    <div class="card">
                        <a
                            class="url"
                            href="https://github.com/QiShaoXuan/css_tricks"
                            target="_blank"
                            >.CSS {TRICKS}</a
                        >
                        <div class="description">Some CSS tricks.</div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/CSSInspiration.png"
                            alt="CSS Inspiration"
                            style="width: 40px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://github.com/chokcoco/CSS-Inspiration"
                            target="_blank"
                            >CSS Inspiration</a
                        >
                        <div class="description">使用或学习 CSS 的灵感。</div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/YouNeedToKnowCSS.png"
                            alt="You Need to Know CSS"
                        />
                        <a
                            class="url"
                            href="https://github.com/l-hammer/You-need-to-know-css"
                            target="_blank"
                            >You Need to Know CSS</a
                        >
                        <div class="description">
                            CSS tricks web developers need to know.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/fontspace-logo-white-text.svg"
                            alt="Font Space"
                            style="width: 50px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://www.fontspace.com/"
                            target="_blank"
                            >Font Space</a
                        >
                        <div class="description">
                            Free downloads of legally licensed fonts that are
                            perfect for your design projects.
                        </div>
                    </div>
                </div>
                <!-- Colors -->
                <p class="divider">Colors</p>
                <div id="Colors" class="main">
                    <div class="card">
                        <img
                            src="../assets/images/Paletton.png"
                            alt="Paletton"
                        />
                        <a
                            class="url"
                            href="https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF"
                            target="_blank"
                            >Paletton</a
                        >
                        <div class="description">
                            CSS tricks web developers need to know
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/BrandColors.png"
                            alt="Brand Colors"
                        />
                        <a
                            class="url"
                            href="http://brandcolors.net/"
                            target="_blank"
                            >Brand Colors</a
                        >
                        <div class="description">
                            The biggest collection of official brand color codes
                            around. Curated by @brandcolors and friends.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://hypercolor.dev/"
                            target="_blank"
                            >Hyper Color</a
                        >
                        <div class="description">
                            A curated collection of beautiful Tailwind CSS
                            gradients using the full range of Tailwind CSS
                            colors. Easily copy and paste the class names, CSS
                            or even save the gradients as an image.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="http://zhongguose.com/"
                            target="_blank"
                            >中国色</a
                        >
                        <div class="description">
                            This website gives many colors named by Chinese with
                            their CMYK, RGB and HEX.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/ColorHexa.svg"
                            alt="Color Hexa"
                        />
                        <a
                            class="url"
                            href="https://www.colorhexa.com/"
                            target="_blank"
                            >Color Hexa</a
                        >
                        <div class="description">
                            Color encyclopedia : Information and conversion.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://colorhunt.co/"
                            target="_blank"
                            >Color Hunt</a
                        >
                        <div class="description">
                            Color Hunt is an open collection of beautiful color
                            palettes, created by Gal Shir. Color Hunt was
                            created with the goal of celebrating the beauty of
                            colors, and to serve as a go-to resource for color
                            inspiration.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://coolors.co/"
                            target="_blank"
                            >Coolors.co</a
                        >
                        <div class="description">
                            The super fast color palettes generator: create the
                            perfect platte or get inspired by thousands of
                            beautiful color schemes.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://uigradients.com/#Magic"
                            target="_blank"
                            >uiGradients</a
                        >
                        <div class="description">
                            A handpicked collection of beautiful color gradients
                            for designers and developers.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://mycolor.space/"
                            target="_blank"
                            >Color Space</a
                        >
                        <div class="description">
                            Never waste Hours on finding the perfect Color
                            Palette again! JUST ENTER A COLOR! And Generate nice
                            Color Palettes.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://gradienthunt.com/"
                            target="_blank"
                            >Gradient Hunt</a
                        >
                        <div class="description">
                            Gradient Hunt is a free and open platform for color
                            inspiration with thousands of trendy hand-made color
                            gradients.
                        </div>
                    </div>
                </div>
                <!-- Fonts -->
                <p class="divider">Fonts</p>
                <div id="Fonts" class="main">
                    <div class="card">
                        <img
                            src="../assets/images/SimpleIconsGooglefonts.svg"
                            alt="Google Fonts"
                        />
                        <a
                            class="url"
                            href="https://fonts.google.com/"
                            target="_blank"
                            >Google Fonts</a
                        >
                        <div class="description">
                            Google Fonts is a library of 1,394 open source font
                            families and APIs for convenient use via CSS and
                            Android.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/MyFonts_Logo_C_RGB_by_Monotype.svg"
                            alt="My Fonts"
                            style="width: 60px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://www.myfonts.com/"
                            target="_blank"
                            >MyFonts</a
                        >
                        <div class="description">
                            MyFonts offers the largest selection of professional
                            fonts for any project. Over 130,000 available fonts,
                            and counting.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/fontspace-logo-white-text.svg"
                            alt="Font Space"
                            style="width: 50px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://www.fontspace.com/"
                            target="_blank"
                            >Font Space</a
                        >
                        <div class="description">
                            Free downloads of legally licensed fonts that are
                            perfect for your design projects.
                        </div>
                    </div>
                </div>
                <!-- Icons -->
                <p class="divider">Icons</p>
                <div id="Icons" class="main">
                    <div class="card">
                        <a
                            class="url"
                            href="https://fonts.google.com/icons?selected=Material+Icons"
                            target="_blank"
                            >Google Material Design Icons</a
                        >
                        <div class="description">
                            Material Icons are available in five styles and a
                            range of downloadable sizes and densities. The icons
                            are based on the core Material Design principles and
                            metrics.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://icones.js.org/"
                            target="_blank"
                            >Icones</a
                        >
                        <div class="description">
                            Icon Explorer with Instant searching, powered by
                            Iconify.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://fontisto.com/"
                            target="_blank"
                            >Fontisto</a
                        >
                        <div class="description">
                            Fontisto the iconic font and css toolkit · 616+ free
                            icons.
                        </div>
                    </div>
                    <div class="card">
                        <a class="url" href="https://icons8.cn/" target="_blank"
                            >Icons8</a
                        >
                        <div class="description">
                            Icons, illustrations, photos, music, and design
                            tools.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://www.iconfont.cn/"
                            target="_blank"
                            >Iconfont</a
                        >
                        <div class="description">
                            阿里巴巴体验团队倾力打造的功能强大且图标内容丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能,
                            是设计和前端开发的便捷工具。
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://www.flaticon.com/"
                            target="_blank"
                            >Flaticon</a
                        >
                        <div class="description">
                            <ul>
                                <li>
                                    Download free icons and stickers for your
                                    projects.
                                </li>
                                <li>Resources made by and for designers.</li>
                                <li>PNG, SVG, EPS, PSD and BASE 64 formats.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://simpleicons.org/"
                            target="_blank"
                            >Simple Icons</a
                        >
                        <div class="description">
                            Many Free SVG icons for popular brands.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/IconFinder.svg"
                            alt="Iconfinder"
                            style="width: 100px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://www.iconfinder.com/"
                            target="_blank"
                            >Iconfinder</a
                        >
                        <div class="description">
                            Iconfinder is the world's largest marketplace for
                            icons, illustrations and 3D illustrations in SVG,
                            AI, and PNG format.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/IconShock.svg"
                            alt="Iconshock"
                            style="width: 100px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://www.iconshock.com/"
                            target="_blank"
                            >Iconshock</a
                        >
                        <div class="description">
                            Iconfinder is the world's largest marketplace for
                            icons, illustrations and 3D illustrations in SVG,
                            AI, and PNG format.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://mui.com/zh/material-ui/material-icons/"
                            target="_blank"
                            >Material icons</a
                        >
                        <div class="description">
                            2,000+ React Material icons ready-to-use from the
                            official website.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/Streamline.svg"
                            alt="Streamline"
                            style="width: 100px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://www.streamlinehq.com/"
                            target="_blank"
                            >Streamline</a
                        >
                        <div class="description">
                            100,000 icons, illustrations and emoji for all your
                            projects. Customize them to your brand in seconds.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/UXWing.svg"
                            alt="UXWing"
                            style="width: 100px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://uxwing.com/"
                            target="_blank"
                            >UXWing</a
                        >
                        <div class="description">
                            Exclusive collection of free icons download for
                            commercial projects without attribution. Well
                            Optimized free SVG and PNG icons that can use on
                            interface design & Web and Application development.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://fontello.com/"
                            target="_blank"
                            >Fontello</a
                        >
                        <div class="description">
                            Tool to build custom fonts with icons.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://isometric.online/"
                            target="_blank"
                            >Isometric</a
                        >
                        <div class="description">
                            This is a collection of free, beautiful, SVG
                            isometric illustrations, that you can use in your
                            website, app or in any project. Search and click to
                            download.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/IconPark.svg"
                            alt="IconPark"
                            style="width: 100px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://iconpark.oceanengine.com/official"
                            target="_blank"
                            >IconPark</a
                        >
                        <div class="description">
                            IconPark gives access to more than 2000 high-quality
                            icons, and introduces an interface for customizing
                            your icons.
                        </div>
                    </div>
                </div>
                <!-- Design/UI -->
                <p class="divider">Design/UI</p>
                <div id="Design UI" class="main">
                    <div class="card">
                        <a
                            class="url"
                            href="https://www.awwwards.com/"
                            target="_blank"
                            >Awwwards</a
                        >
                        <div class="description">
                            The awards of design, creativity and innovation on
                            the internet.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://www.checklist.design/"
                            target="_blank"
                            >Checklist Design</a
                        >
                        <div class="description">
                            Checklist Design is a curated list of checklists
                            ranging from website pages, to UI components, all
                            the way to branding assets.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/WebGradients.png"
                            alt="WebGradients"
                        />
                        <a
                            class="url"
                            href="https://webgradients.com/"
                            target="_blank"
                            >WebGradients</a
                        >
                        <div class="description">
                            WebGradients is a free collection of 180 linear
                            gradients that you can use as content backdrops in
                            any part of your website. Easy copy CSS3
                            crossbrowser code and use it in a moment! We've also
                            prepared a .PNG version of each gradient. As a
                            bonus, there are packs for Sketch & Photoshop.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://dribbble.com/"
                            target="_blank"
                            >Dribble</a
                        >
                        <div class="description">
                            Dribbble is the leading destination to find &
                            showcase creative work and home to the world's best
                            design professionals.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://webframe.xyz/"
                            target="_blank"
                            >Webframe</a
                        >
                        <div class="description">
                            A showcase of beautiful and well designed web app
                            screens for design inspiration. Including screens
                            from behind signup/paywalls!
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/spline_logo.png"
                            alt="Spline"
                        />
                        <a
                            class="url"
                            href="https://spline.design/"
                            target="_blank"
                            >Spline</a
                        >
                        <div class="description">
                            Spline, a place to design and collaborate in 3D.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://app.typeanything.io/"
                            target="_blank"
                            >Type Anything</a
                        >
                        <div class="description">
                            Type Anything lets you customize the most necessary
                            font settings for your next project. From font
                            families and letter spacing to font weights. Our
                            goal was to create a great user experience, whilst
                            working on the perfect match.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://lawsofux.com/"
                            target="_blank"
                            >Laws of UX
                        </a>
                        <div class="description">
                            Laws of UX is a collection of best practices that
                            designers can consider when building user
                            interfaces.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/screenlane.svg"
                            alt="Screelane"
                        />
                        <a
                            class="url"
                            href="https://screenlane.com/"
                            target="_blank"
                            >Screelane
                        </a>
                        <div class="description">
                            The latest mobile UI design inspiration in your
                            inbox every week, for free.
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/images/froala.svg" alt="Froala" />
                        <a
                            class="url"
                            href="https://froala.com/design-blocks/"
                            target="_blank"
                            >Froala Design Blocks
                        </a>
                        <div class="description">
                            Over 170 responsive design blocks ready to be used
                            in your web or mobile apps. All blocks are based on
                            the Bootstrap Library, and they are the building
                            blocks for beautiful websites.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://3dicons.co/"
                            target="_blank"
                            >3Dicons
                        </a>
                        <div class="description">
                            1440+ beautifully crafted open-source 3D icons. You
                            can use completely free and without attribution for
                            personal or commercial project.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://collectui.com/"
                            target="_blank"
                            >Collect UI
                        </a>
                        <div class="description">
                            Daily inspiration collected from daily ui archive
                            and beyond. Based on Dribbble shots, hand picked,
                            updating daily.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://principles.design/"
                            target="_blank"
                            >Design Principles
                        </a>
                        <div class="description">
                            <ul>
                                <li>
                                    An open source collection of Design
                                    Principles and methods.
                                </li>
                                <li>
                                    A set of considerations that form the basis
                                    of any good product.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://standardresume.co/"
                            target="_blank"
                            >Standard Resume
                        </a>
                        <div class="description">
                            Standard Resume is a small team of designers and
                            developers with hiring experience at top companies
                            like Dropbox. We collaborate with hiring managers
                            from Slack, Apple, Capsule, and Uber to design
                            resume templates that hiring managers and recruiters
                            want to receive.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://www.webdesignmuseum.org/"
                            target="_blank"
                            >Web Design Museum
                        </a>
                        <div class="description">
                            Web Design Museum exhibits over 2,000 carefully
                            selected and sorted web sites that show web design
                            trends between the years 1991 and 2006.
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/MagicPattern.svg"
                            alt="Magic Pattern"
                            style="width: 100px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://www.magicpattern.design/"
                            target="_blank"
                            >Magic Pattern
                        </a>
                        <div class="description">
                            Create unique graphics for social media posts,
                            landing pages and branding in a few clicks. Then
                            export them as images, or even code (SVG & CSS).
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/images/CoolBackgrounds.svg"
                            alt="Cool Backgrounds"
                        />
                        <a
                            class="url"
                            href="https://coolbackgrounds.io/"
                            target="_blank"
                            >Cool Backgrounds
                        </a>
                        <div class="description">
                            Cool Backgrounds is a collection of tools to create
                            compelling, colorful images for blogs, social media,
                            and websites. Beyond backgrounds, the images
                            generated can be used as 🖥 desktop wallpapers or
                            cropped for 📱 mobile wallpapers.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://wickedbackgrounds.com/app"
                            target="_blank"
                            >Wicked Backgrounds
                        </a>
                        <div class="description">
                            Create beautiful SVG backgrounds for your UI
                            designs.
                        </div>
                    </div>
                    <div class="card">
                        <a
                            class="url"
                            href="https://www.uidesigndaily.com/"
                            target="_blank"
                            >UI Design Daily
                        </a>
                        <div class="description">
                            Weekly FREE UI resources straight to your inbox.
                        </div>
                    </div>
                    <div class="card">
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
                    </div>
                </div>
                <!-- Measure -->
                <p class="divider">Measure</p>
                <div id="Measure" class="main">
                    <div class="card">
                        <img
                            src="../assets/images/PixelSnap2.svg"
                            alt="PixelSnap 2"
                            style="width: 100px; height: 28px"
                        />
                        <a
                            class="url"
                            href="https://getpixelsnap.com/zh/"
                            target="_blank"
                            >PixelSnap 2
                        </a>
                        <div class="description">
                            <ul>
                                <li>
                                    The fastest tool for measuring anything on
                                    your screen.
                                </li>
                                <li>One-Time Purchase</li>
                                <li>Mac Only</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Card from "@/components/Card";
import Clock from "@/components/Clock";
import Pagination from "@/components/Pagination";
// @ is an alias to /src
export default {
    name: "Home",
    components: {
        Card,
        Clock,
        Pagination,
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
            // focus.style.backgroundColor = "gray";

            // 鼠标移开 input 搜索框, 重新设置搜索框的 placeholder
            focus.onblur = () => {
                focus.placeholder = "Search";
                focus.style.backgroundColor = "white";
            };
        };
        return {
            gotoGitHub,
            gotoBlog,
            focusOnInput,
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
    margin: 24px 0;
    position: fixed;
    height: 600px;
    overflow-y: auto;
    scroll-behavior: smooth;
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #f5f5f5;
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        // 纵向滚动条宽度 width (横向滚动条高度 height; 无法设置纵向滚动条高度及横向滚动条宽度)
        width: 10px;
        background-color: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        height: 20px;
        background-image: -webkit-gradient(
            linear,
            left bottom,
            left top,
            color-stop(0.44, rgb(122, 153, 217)),
            color-stop(0.72, rgb(73, 125, 189)),
            color-stop(0.86, rgb(28, 58, 148))
        );
    }
}
.content {
    // 调整 content 位置 (利用 margin-left)
    margin-left: 10%;
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
// 网站链接文字渐变
a {
    text-decoration: none;
    background: #0345ff
        linear-gradient(135deg, rgb(3, 69, 255) 0%, rgb(142, 34, 167) 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 18px;
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
    color: #100f11;
    padding: 15px 0;
    cursor: pointer;
    border: 4px solid transparent;
    border-radius: 1rem;
    box-shadow: -2rem 0 3rem -2rem #000;
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
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
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
    background-color: #fff;
    border: none;
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
