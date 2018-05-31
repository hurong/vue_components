<template v-cloak>
  <div>
    <button @click="showMap">百度地图</button>
    <div id="allmap">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    showMap() {
      // var map = new BMap.Map("allmap");    // 创建Map实例
      // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
      // //添加地图类型控件
      // map.addControl(new BMap.MapTypeControl({
      //   mapTypes: [
      //     BMAP_NORMAL_MAP,
      //     BMAP_HYBRID_MAP
      //   ],
      // }));
      // map.setCurrentCity('北京');          // 设置地图显示的城市 此项是必须设置的
      // map.enableScrollWheelZoom(true);

      var map = new BMap.Map("allmap");          // 创建地图实例  
      var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
      map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.ScaleControl());
      map.addControl(new BMap.OverviewMapControl());
      map.addControl(new BMap.MapTypeControl());
      var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map }
      });
      local.search("成都市");
    }
  },
};
</script>

<style scoped>
#allmap {
  width: 100%;
  height: 400px;
}
</style>

