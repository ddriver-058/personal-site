<template>
  <q-page class="flex flex-left">
    <div class='q-pa-lg'>
      <div class='row'>
        <div class='col-12 q-pa-md'>
          <div
            v-for='(item) in MeSummary' :key='item'
          >
            <div
              v-if='item.type==="header"'
            >
            <b>{{ item.data }}</b>
            </div>
            <div
              v-if='item.type==="text-with-headshot"'
            >
              <img src="scaeangate.jpg" alt="Headshot" class="inline-image">
              {{  item.data }}
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
  name: 'MeSummary',
  data() {
    return readConfig();
  }
});

</script>
<style scoped>

.inline-image {
  float: right;
  margin-left: 10px; 
  margin-bottom: 10px;
  width: 33%
}
</style>