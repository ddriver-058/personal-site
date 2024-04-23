<template>
  <q-page class="flex flex-left">
    <div class='q-pa-md'>
      <div class='row q-pa-md'>
        <div class='col-12'>
          <div
            v-for='(item) in ArgonautCluster' :key='item'
          >
            <div
              v-if='item.type==="header"'
            >
            <b>{{ item.data }}</b>
            </div>
            <div 
              v-if='item.type==="video"'
              class='q-pa-md'
              style='height:400px'
            >
              <iframe 
                src="https://player.vimeo.com/video/927577130?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                frameborder="0" 
                style="width:100%;height:100%"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                title="Argonaut Cluster Demo"
              >
              </iframe>
            </div>
            <div
              v-if='item.type==="text"'
            >
              {{ item.data }}
            </div>
            <br/>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { readConfig } from '../utility/readConfig';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArgonautCluster',
  data() {
    return readConfig();
  }
});

</script>
