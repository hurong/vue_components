<template>
  <div>
    <button @click='showIndex = 0'></button>
    <button @click='showIndex = 1'></button>
    <div v-if='showIndex === 0'>
      <step1 :content.sync = 'content1'>

      </step1>
    </div>
    <div v-if='showIndex === 1'>
      <step2 :content.sync = 'content2'>

      </step2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showIndex: 0,
      content1: {

      },
      content2: {

      },
    };
  },
  methods: {
    tab() {

    },
  },
};
</script>


