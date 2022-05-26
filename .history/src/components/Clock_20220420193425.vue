<template>
    <h2>数字时钟</h2>
    <div class="clock"></div>
</template>

<script>
const dateFormat = (date, format) => {
    const options = {
        "Y+": date.getFullYear(), // 年
        // momentIndex: 0 ~ 11 (0 表示 1 月)
        "m+": date.getMonth() + 1, //月 (注意加 1)
        "d+": date.getDate(), //日
        "H+": date.getHours(), //时
        "M+": date.getMinutes(), //分
        "S+": date.getSeconds(), //秒
        "MS+": date.getMilliseconds(), //毫秒
        "Q+": Math.floor((date.getMonth() + 3) / 3), //季
    };
    if (/(y+)/.test(format))
        format = format.replace(
            RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
    for (let k in options)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                    ? options[k]
                    : ("00" + options[k]).substr(("" + options[k]).length)
            );
    return format;
};

export default {
    name: "Clock",
    data() {
        return {
            time: "",
            timer: null,
        };
    },
    created() {
        this.timer = setInterval(() => {
            const today = new Date();
            // 日期格式化
            this.time = dateFormat(today, "yyyy-mm-dd HH:MM:SS");
            let clockSelected = document.getElementsByClassName("clock")[0];
            clockSelected.textContent = this.time;
        }, 500);
    },
    destroyed() {
        clearInterval(this.timer);
    },
};
</script>

<style lang="scss"></style>
