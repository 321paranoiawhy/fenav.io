<template>
    <!-- Card 模板 -->
    <div class="card">
        <img />
        <a class="url" target="_blank"> </a>
        <div class="description"></div>
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
    name: "Card",
    setup() {},
};
</script>
<style lang="scss">
card-footer {
    display: flex;
    // flex 子元素主轴向均匀排布
    justify-content: space-between;
    // flex 子元素副轴向垂直居中
    align-items: center;
}
</style>
