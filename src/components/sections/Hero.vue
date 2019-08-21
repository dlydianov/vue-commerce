<template>
    <section 
        :class="[
            'section hero-section is-relative',
            hero.height
        ]" 
        :style="{
            'background-image': 'url(images/' + hero.background_img_filename +')'
        }">

        <div class="container">
            <div class="columns">
                <div class="column is-4">
                    <h1 class="title is-1" v-html="hero.main_heading"></h1>
                    <h2 class="subtitle is-2 has-text-white">{{hero.main_subtitle}}</h2>
                </div>
                <div class="column is-4 is-offset-4">
                    <!-- <stats
                        :stats="stats"
                    ></stats> -->
                </div>
            </div>
        </div>
        <div class="ip-holder mc-box dirt is-hidden-mobile"
            v-show="hero.show_ip"
        >
            <span ref="copy">
                play.hollyweed.bg 
                <a 
                    @click="copyText" 
                    @mouseleave="text = 'Копирай пак'" 
                    class="tooltip ml10" 
                    :data-tooltip="text"> 

                    <i class="mdi mdi-content-copy"></i>
                </a>
            </span>
        </div>
    </section>
</template>

<script>
import Main from '@/data/main'

export default {
    data(){
        return {
            hero: Main.hero,
            text: 'Копирай IP'
        }
    },
    methods: {
        copyText(){
            var range
            var copyText = this.$refs.copy
            
            range = document.createRange();
            range.selectNode(copyText);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand("copy")
            window.getSelection().removeAllRanges();

            this.text = "Влизай в игра!"
        }
    },
}
</script>

<style lang="sass" scoped>
@import '../../assets/sass/settings.sass'
@import '../../assets/sass/responsive.sass'

h1, span
    color: $white

.ip-holder
    width: auto
    position: absolute
    bottom: -3.5rem
    left: 50%
    transform: translateX(-50%)
    font-family: 'minecraft'
    font-size: $size-5
    padding: 1rem 4rem
    text-align: center
    a:hover::before
        font-family: Arial
        bottom: 150%
        font-weight: 200
        font-size: $size-4
    a:hover::after
        top: -50% !important
    i
        font-family: initial
        font-size: $size-3
</style>