<template v-cloak>
<div id='select-template'>
  <input>
  <div>
    <ul>
      <li>
        <img src='../assets/logo.png' :style='imgStyle'></img>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    imgStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>