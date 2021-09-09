<template>
    <span v-if="false"></span>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'metaData',
    props: {
        metaData: {}
    },
    computed: {
        ...mapState({
            SETTINGS: state => state.settings
        })
    },
    head () {
        return {
            title: this.metaData && this.metaData.title ? this.metaData.title : this.SETTINGS.meta_data_global.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.metaData && this.metaData.description ? this.metaData.description : this.SETTINGS.meta_data_global.description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.metaData && this.metaData.key ? this.metaData.key : this.SETTINGS.meta_data_global.key
                },
            ]
        }
    }
}
</script>