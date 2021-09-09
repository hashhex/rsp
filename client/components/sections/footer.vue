<template>
    <section :class="active" class="section">
        <div class="section__footer">
            <template v-if="!active">
                <TopLine />
            </template>
            <div class="container">
                <ul class="list-footer">
                    <li>Москва</li>
                    <li><a href="tel:880078743454">8 800 787 434 54</a></li>
                    <li><a href="mailto:info@rsplaw.net">info@rsplaw.net</a></li>
                    <li><a href="#">Политика конфиденциальности</a></li>
                </ul>
            </div>
            <div class="wrap-btn">
                <div class="btn-up">
                    <span></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TopLine from '~/components/TopLine'

export default {
    name: 'sectionFooter',
    props: {
        active: {}
    },
    components: {
        TopLine
    }
}
</script>