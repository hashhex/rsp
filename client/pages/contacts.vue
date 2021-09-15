<template>
    <div>
        <section class="section active section-heigth--auto">
            <section v-if="SETTINGS" class="contacts-section">
                <TopLine />
                
                <div class="container">
                    <div v-if="CONTACTS" class="header-block">
                        <MetaData :meta-data="CONTACTS.meta_data" />
                        <h1>Контакты</h1>
                        <p>{{ SETTINGS.address }} <br> <a :href="`tel:${SETTINGS.phone}`">{{ SETTINGS.phone }}</a> <br> <a :href="`mailto:${SETTINGS.email}`">{{ SETTINGS.email }}</a></p>
                    </div>
                </div>

                <div id="map" class="map"></div>
            </section>
        </section>
        <Consultation />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import TopLine from '~/components/TopLine'
import Consultation from '~/components/sections/consultation'
import MetaData from '~/components/Meta'

export default {
    name: 'contacts',
    async fetch () {
        await this.$store.dispatch('pages/Pages', {
            state: 'contacts',
            url: 'contacts-page'
        })
    },
    computed: {
        ...mapState({
            SETTINGS: state => state.settings,
            CONTACTS: state => state.pages.pages.contacts
        })
    },
    methods: {
        maps () {
            let myMap;

            ymaps.ready(init);
            
            let coords = this.SETTINGS.coords.split(',').map(item => Number(item.trim()))

            function init() {

                myMap = new ymaps.Map('map', {
                    center: coords,
                    zoom: 15,
                    controls: []
                });

                let myPlacemark = new ymaps.Placemark(coords, {
                    }, {
                        iconLayout: 'default#imageWithContent',
                        iconImageHref: '/marker.png',
                        iconImageSize: [111, 106],
                        iconImageOffset: [0, 0],
                        iconContentOffset: [0,0],
                    });
            
                myMap.geoObjects.add(myPlacemark)
            }
        }
    },
    mounted () {
        this.maps()
    },
    update () {
        this.$nextTick(() => this.maps())
    },  
    components: {
        TopLine,
        Consultation,
        MetaData
    }
}
</script>