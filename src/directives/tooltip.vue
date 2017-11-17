<script>
export default {
  inserted(el, binding) {
    // const el_left = 
    const getElemPos = (obj) => {
      let pos = { top: 0, left: 0 };
      if (obj.offsetParent) {
        while (obj.offsetParent) {
          pos.top += obj.offsetTop;
          pos.left += obj.offsetLeft;
          obj = obj.offsetParent;
        }
      } else if (obj.x) {
        pos.left += obj.x;
      } else if (obj.y) {
        pos.top += obj.y;
      }
      return { x: pos.left, y: pos.top };
    };

    const mouseenterFn = (event) => {
      const pos = getElemPos(event);
      console.log(pos);
      const tooltip = document.getElementById('tooltip');
      const tooltipContent = document.getElementById('tooltipContent');
      event.stopPropagation();
      tooltip.style.display = 'block';
      tooltip.style.left = pos.x + 'px';
      console.log(el.offsetTop);
      tooltip.style.top = el.offsetTop + 'px';
      tooltipContent.innerHTML = binding.value;
    };
    const mouseleaveFn = (event) => {
      const tooltip = document.getElementById('tooltip');
      event.stopPropagation();
      tooltip.style.display = 'none';
    };
    // el.removeEventListener('mouseenter', mouseenterFn, false)
    // .addEventListener('mouseenter', mouseenterFn, false);
    // el.removeEventListener('mouseleave', mouseleaveFn, false)
    // .addEventListener('mouseleave', mouseleaveFn, false);
    el
      .addEventListener('mouseenter', mouseenterFn, false);
    el
      .addEventListener('mouseleave', mouseleaveFn, false);
  },
};
</script>
