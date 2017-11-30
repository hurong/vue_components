<script>
export default {
  inserted(el, binding) {
    const load = binding.value;
    const size = Object.keys(binding.modifiers)[0] || 'md';
    console.log(size);
    const template = `
    <div class='loadEffect'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
`;

    if (load) {
      el.style.position = 'relative';
      // console.log(el.children);
      // for (let i = 0; i < el.children.length; i++) {
      //   el.children[i].style.display = 'none';
      // }
      const loadingDiv = document.createElement('div');
      loadingDiv.classList = 'loadContainer loadContainer-' + size;
      loadingDiv.innerHTML = template;
      el.appendChild(loadingDiv);
    }
  },

  update(el, binding) {
    const load = binding.value;
    if (!load) {
      el.style.display = 'block';
      // console.log(el.getElementsByClassName('loadContainer'));
      el.getElementsByClassName('loadContainer')[0].style.display = 'none';
    }
  },

};
</script>