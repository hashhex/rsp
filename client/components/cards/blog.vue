<template>
    <div class="blog-preview">
        <div class="date">{{ $moment(item.date).format('DD.MM.YYYY') }}</div>
        <h3><nuxt-link :to="`/blog/${item.slug}`">{{ item.title }}</nuxt-link></h3>
        <p>{{ item.preview_text }}</p>
        <nuxt-link :to="`/blog/${item.slug}`" class="read">Подробнее</nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'blogPreview',
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>