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
            <!-- 页数( v-for ) -->
            <li
                class="pages"
                v-for="(item, index) in pages"
                v-bind:key="index"
                @click="select(item)"
            >
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
    data() {
        return {
            currentPage: 10,
            totalPages: 50,
        };
    },
    methods: {
        select(item) {
            this.currentPage = item;
        },
    },
    computed: {
        pages() {
            const currentPage = this.currentPage; // 当前页
            const totalPages = this.totalPages; // 总页数
            //  当前页 小于 5
            if (currentPage < 5) {
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, "...", totalPages];
            } else if (currentPage > totalPages - 4) {
                return [
                    1,
                    "...",
                    totalPages - 9,
                    totalPages - 8,
                    totalPages - 7,
                    totalPages - 6,
                    totalPages - 5,
                    totalPages - 4,
                    totalPages - 3,
                    totalPages - 2,
                    totalPages - 1,
                    totalPages,
                ];
            } else {
                return [
                    1,
                    "...",
                    currentPage - 3,
                    currentPage - 2,
                    currentPage - 1,
                    currentPage,
                    currentPage + 1,
                    currentPage + 2,
                    currentPage + 3,
                    "...",
                    totalPages,
                ];
            }
        },
    },
    setup() {},
};
</script>

<style lang="scss">
.pagination ul li {
    display: inline;
    margin-right: 10px;
}
</style>
