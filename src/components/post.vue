<template>
    <div class="post">
        <h1>{{this.postData.meta.title}}</h1>
        <h6>发布于{{this.postData.meta.publishDate.slice(0, 10)}}</h6>
        <div v-html="this.postData.content.contents" class="markdown-body">
        </div>
    </div>
</template>

<script>
export default {
    props: ['postData'],
    data() {
        return {}
    },
    mounted() {
        console.log(this.postData)
    }
}
</script>

<style lang="less">
@import url('../assets/style/markdown.css');
@import url('../assets/style/highlight.css');

.post {
    margin-top: 60px;
}

h1 {
    text-align: center;
    font-size: 28px;
}
h6 {
    text-align: center;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.85);
}
.markdown-body {
    margin-top: 80px;
}

</style>

