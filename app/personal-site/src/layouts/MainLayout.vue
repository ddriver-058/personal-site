<template>
  <q-layout view="hHh lpR fFf">

    <q-drawer
        v-model="leftDrawerOpen" 
        :mini="!leftDrawerOpen || miniState"
        @click.capture="drawerClick"
        side="left" 
        behavior="normal" 
        show-if-above
        :width="200"
        :breakpoint="200"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item 
              v-for='(item, key) in entries'
              :key=key
              :active='activeItem()==key'
              @click='clickHandler(key)'
              clickable 
              v-ripple
            >
              <q-item-section avatar>
                <q-icon :name='item.icon' />
              </q-item-section>

              <q-item-section>
                {{ item.text }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="Helene_a_la_porte_scee_gustave_moreau.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent" style='padding-left:0px;padding-right:0px'>
            <div class='row justify-center'>
              <q-avatar size="56px" class="q-mb-sm row">
                <img src="headshot.jpg">
              </q-avatar>
            </div>
            <div class="text-weight-bold" style='text-align:center'>David Driver</div>
            <div class='row justify-center'>
              <a href='mailto:davidallendriver@gmail.com'><q-icon style='color:#fff' name='email'></q-icon></a>
              <a href='https://github.com/ddriver-058' target='_blank'><q-icon name='img:github-mark-white.svg'></q-icon></a>
              <a href='https://www.linkedin.com/in/david-driver/' target='_blank'><q-icon name='img:linkedin.png'></q-icon></a>
            </div>
          </div>
        </q-img>

        <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
          <q-btn
            dense
            round
            unelevated
            color="grey"
            icon="chevron_left"
            @click="miniState = true"
          />
        </div>
      </q-drawer>

    <q-page-container
      style='height:100vh;overflow-y:auto'
    >
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter, useRoute } from 'vue-router';
import { readConfig } from '../utility/readConfig';

export default {
  setup () {
    const q = useQuasar();
    const leftDrawerOpen = ref(false);
    const miniState = ref(q.platform.is.mobile);
    const router = useRouter();
    const route = useRoute();
    const cfg = readConfig();

    return {
      leftDrawerOpen,
      miniState,
      activeItem() {
        return route.path
      },
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      clickHandler (key) {
        router.push(key);
      },
      drawerClick (e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          // e.stopPropagation()
        }
      },
      entries: cfg.Sidebar
    }
  }
}
</script>