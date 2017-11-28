<script>
export default {
  inserted(el, binding) {
    const load = binding.value;
    const template = `<div class="loading loading-lg loading-template">
    <div class="sk-fading-circle">
      <div class="sk-circle1 sk-circle"></div>
      <div class="sk-circle2 sk-circle"></div>
      <div class="sk-circle3 sk-circle"></div>
      <div class="sk-circle4 sk-circle"></div>
      <div class="sk-circle5 sk-circle"></div>
      <div class="sk-circle6 sk-circle"></div>
      <div class="sk-circle7 sk-circle"></div>
      <div class="sk-circle8 sk-circle"></div>
      <div class="sk-circle9 sk-circle"></div>
      <div class="sk-circle10 sk-circle"></div>
      <div class="sk-circle11 sk-circle"></div>
      <div class="sk-circle12 sk-circle"></div>
    </div>
  </div>`;

    if (load) {
      el.style.position = 'relative';
      console.log(el.children);
      for (let i = 0; i < el.children.length; i++) {
        el.children[i].style.display = 'none';
      }
      const loadingDiv = document.createElement('div');
      loadingDiv.innerHTML = template;
      el.appendChild(loadingDiv);
    }
  },

  update(el, binding) {
    const load = binding.value;
    if (!load) {
      // el.children.style.display = 'block';
      // el.getElementsByClassName('loading-template')[0].style.display = 'none';
    }
  },

};
</script>