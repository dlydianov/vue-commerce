<template>
    <div class="mc-box sandstone">
        <h2 class="mb20 has-text-centered">Заглавие</h2>
        <article
            class="content-holder mb20"
            v-html="content"
        >
        </article>
        <slot>
        </slot>
        <div class="link-more">
            <a href="#" class="button is-link">Виж повече</a>
        </div>
    </div>
</template>

<style lang="sass" scoped>
@import '../../assets/sass/settings.sass'
@import '../../assets/sass/responsive.sass'

pre
    color: $primary
    font-size: $size-3
    background: none

.content-holder 
    font-size: $size-5

.link-more
    margin-top: 2rem
    text-align: right
</style>

<script>

export default {
    props: [
        'heading',
        'link_more'
    ],

    data: function () {
        return {
            content: 'nekuv content'
        }
    },
    methods: {
    },
    computed: {
    },
    watch: {

    },
    created: function () {
        
    },
    mounted: function () {
        
    }
}
</script>
