<template>
  <q-page class="flex flex-left">
    <div class='q-pa-md'>
      <div class='row q-pa-md'>
        <div class='col-12'>
          <div
            v-for='(item) in PersonalLife' :key='item'
          >
            <div
              v-if='item.type==="header"'
            >
            <b>{{ item.data }}</b>
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
  name: 'PersonalLife',
  data() {
    return readConfig();
  }
});

</script>
