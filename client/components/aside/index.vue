<template>
    <aside>
        <div class="aside-block">
            <h4>Другие статьи <span></span></h4>
            <otherBlog />
            <subscribe />
        </div>
    </aside>
</template>

<script>
import otherBlog from '~/components/aside/otherBlog'
import subscribe from '~/components/aside/subscribe'

export default {
    name: 'asideColumn',
    components: {
        otherBlog,
        subscribe
    }
}
</script>