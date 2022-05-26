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
</style>
