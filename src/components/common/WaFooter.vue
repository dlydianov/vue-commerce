<template>
    <footer>
        <!-- <cookie-law position="bottom" button-class="button is-link no-span" button-text="I agree">
            <div slot="message">
                <div class="is-flex">-->
                    <!-- <img :src="cookie_img" alt="Cookies"> -->
                    <!--
                    <div>
                        <h4>Cookies here!</h4>
                        <p>
                            This website is using cookies to optimise your experience.
                        </p>
                    </div>
                </div>
            </div>
        </cookie-law> -->

        <div class="footer-content">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <p class="is-size-3 is-flex justify-center-tablet">
                            <i class="mdi mdi-discord mr10"></i> <a href="https://discord.io/hollyweed" class="text-thin" target="_blank">discord.io/hollyweed</a>
                        </p>
                    </div>
                    <div class="column">
                        <p class="is-size-3 is-flex justify-center">
                            <span class="font-minecraft mr10 is-size-3">IP</span> <a href="javascript:;" class="text-thin">play.hollyweed-minecraft.com</a>
                        </p>
                    </div>
                    <div class="column">
                        <p class="is-flex justify-end justify-center-tablet">
                            <a href="#" class="button is-link">Donate</a>
                        </p>
                    </div>
                </div>
                <hr width="30%">
                <!-- <div class="gratefulness is-clearfix">
                    <h3 class="title">Без които Hollyweed Minecraft нямаше да стигне до тук</h3>
                    <ul>
                        <li
                            v-for="(player, i) in gratefulness"
                            :key="'player-' + i"
                        >
                            <img :src="'https://mcapi.xdefcon.com/skin/helm/' + player + '/32'" :alt="player"> {{ player }}
                        </li>
                    </ul>
                </div> -->
                <hr width="30%">
                <div class="level is-size-5 footer-credits">
                    <div class="level-left is-italic text-thin">
                        Softuni Project 2019 © Hollyweed Minecraft
                    </div>
                    <div class="level-right">
                        By: &nbsp;<span class="is-size-6 font-minecraft">Frostboy</span>&nbsp;and&nbsp;<span class="is-size-6 font-minecraft">KamosRZ</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>

</style>