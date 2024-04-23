<template>
  <q-page class="flex flex-left">
    <div class='q-pa-md'>
      <div class='row'>
        <div
          v-for='(subjectList, subjectName) in SkillsAndExperience'
          :class="(isMobile ? 'col-12 q-pa-md' : 'col-6 q-pa-md')"
          :key=subjectName
        >
          <b>{{ subjectName }}</b>
          <div
            v-for='(item, key) in subjectList'
            :key=key
          >
            <div>
              {{ item.skill }}
            </div>
            <div style='color: grey; text-indent: 1em'>
              {{ item.experience }}
            </div>
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
  name: 'SkillsAndExperience',
  data() {
    const cfg = readConfig();
    cfg.isMobile = this.$q.platform.is.mobile;
    return cfg;
  }
});

</script>
