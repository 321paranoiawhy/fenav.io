<template>
    <h2>数字时钟</h2>
    <div class="clock"></div>
</template>

<script>
const dateFormat = (format, date) => {
    const options = {
        "Y+": date.getFullYear(), // 年
        "m+": date.getMonth() + 1, //月
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
    date() {
        return {
            time: "",
            timer: null,
        };
    },
    created() {
        this.timer = setInteval(() => {
            const today = new Date();
            this.time = dateFormat("YYYY-mm-dd HH:MM", today);
        }, 500);
    },
    destroyed() {
        clearInterval(this.timer);
    },
    // methods: {
    //     displayTime() {
    //         let clockSelected = document.getElementsByClassName("clock")[0]; // 获取页面中的 clock 类
    //         let currentTime = new Date(); // 当前时间
    //         // 当插入纯文本时, 建议不要使用 innerHTML https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML
    //         // clockSelected.innerHTML = currentTime.toLocaleTimeString(); // 显示当前时间
    //         // https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent
    //         // textContent 可以防止 XSS 攻击
    //         clockSelected.textContent = currentTime.toLocaleTimeString(); // 显示当前时间
    //         // setInterval(this.displayTime, 1000); // 每隔一秒刷新一次
    //         // setTimeout(this.displayTime, 1000); // 每隔一秒刷新一次
    //     },
    // },
    // mounted() {
    //     window.onload = this.displayTime(); // 当页面加载完成后, 显示时间
    // },
    setup() {},
};
</script>

<style lang="scss"></style>
