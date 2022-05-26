<template>
    <div class="pagination">
        <ul>
            <!-- 前两页 -->
            <li>
                <img
                    src="../assets/images/TeenyiconsDoubleCaretLeftCircleOutline.svg"
                    alt="DoubleLeft"
                />
            </li>
            <!-- 前一页 -->
            <li>
                <img
                    src="../assets/images/TeenyiconsLeftCircleOutline.svg"
                    alt="Left"
                />
            </li>
            <!-- 页数 -->
            <li class="pageNumber" v-for="(item, index) in pages" key="index">
                <span>{{ item }}</span>
            </li>
            <!-- 后一页 -->
            <li>
                <img
                    src="../assets/images/TeenyiconsRightCircleOutline.svg"
                    alt="right"
                />
            </li>
            <!-- 后两页 -->
            <li>
                <img
                    src="../assets/images/TeenyiconsDoubleCaretRightCircleOutline.svg"
                    alt="right"
                />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    computed
    setup() {},
};
</script>

<style lang="scss">
.pagination ul li {
    display: inline;
}
</style>
