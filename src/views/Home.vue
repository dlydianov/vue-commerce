<template>
  <div class="home">
    <hero></hero>
    <section class="section body-content landing">
      <div class="container">
          <div class="columns">
              <div class="column is-8">
                  <div>
                      <h1>Информация</h1>
                      <!-- <content-box
                          :content="content"
                      >
                      </content-box> -->
                  </div>
              </div>
              <div class="column is-4">
                  <!--  Aside menu -->
                  <aside class="aside">
                      <!-- <stats
                          :stats="online_players"
                          :type="'online_players'"
                      >
                      </stats>
                      <stats
                          :stats="top_donators"
                          :type="'top_donators'"
                      >
                      </stats> -->
                  </aside>
              </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/modules/Hero'
import ContentBox from '@/components/modules/ContentBox'

export default {
  name: 'home',
  components: {
    Hero,
    ContentBox
  }
}
</script>
