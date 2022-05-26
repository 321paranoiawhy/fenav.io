<template>
    <!-- Card 模板 -->
    <div class="card">
        <div class="card-footer">
            <img src="../assets/images/TeenyiconsStarOutline.svg" alt="Star" />
            <img
                src="../assets/images/TeenyiconsBookmarkOutline.svg"
                alt="Bookmark"
            />
            <img
                src="../assets/images/TeenyiconsXCircleOutline.svg"
                alt="Delete"
            />
        </div>
    </div>
</template>

<script>
export default {
    // Card 组件名
    name: "Card",
    setup() {},
};
</script>

<style lang="scss">
.card-footer {
    display: flex;
    margin: 0 15px;
    // flex 子元素主轴向均匀排布
    justify-content: space-between;
    // flex 子元素副轴向垂直居中
    align-items: center;
}
.card {
    border: ;
}
.card:after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(
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
    border-radius: calc(2 * var(--borderWidth));
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
}
@keyframes animatedgradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
