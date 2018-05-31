
<script>
export default {
  inserted(el, binding) {
    // console.log(binding.modifiers);// 获取修饰符
    let tooltipPosition = Object.keys(binding.modifiers)[0];
    if (tooltipPosition) {
      tooltipPosition = tooltipPosition.toLowerCase();
    }
    const offset = {
      x: 0,
      y: 0,
    };
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
      const pos = getElemPos(el);
      const tooltip = document.getElementById('tooltip');
      const tooltipContent = document.getElementById('tooltipContent');
      event.stopPropagation();
      tooltip.style.display = 'block'; // 一定要放在计算tootlitp的宽高前面，对于display:none的元素，offsetWidht,offsetHeight无用
      tooltipContent.innerHTML = binding.value;
      switch (tooltipPosition) {
        case 'left':
          offset.x = -tooltip.offsetWidth;
          offset.y = (el.offsetHeight - tooltip.offsetHeight) / 2;
          break;
        case 'right':
          offset.x = el.offsetWidth;
          offset.y = (el.offsetHeight - tooltip.offsetHeight) / 2;
          break;
        case 'top':
          offset.x = (el.offsetWidth - tooltip.offsetWidth) / 2;
          offset.y = -tooltip.offsetHeight;
          break;
        case 'bottom':
          offset.x = (el.offsetWidth - tooltip.offsetWidth) / 2;
          offset.y = el.offsetHeight;
          break;
        default:
          offset.x = (el.offsetWidth - tooltip.offsetWidth) / 2;
          offset.y = -tooltip.offsetHeight;
          break;
      }
      tooltip.style.left = (pos.x + offset.x) + 'px';
      tooltip.style.top = (pos.y + offset.y) + 'px';
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