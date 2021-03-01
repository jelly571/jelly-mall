<template>
  <div class="params" v-if="Object.keys(paramInfo).length !== 0">
    <table
      v-for="(sizes, index1) in paramInfo.sizes"
      :key="index1"
      class="info-size"
    >
      <tr v-for="(name, index2) in sizes" :key="index2">
        <td v-for="(item, index3) in name" :key="index3">{{ item }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index4) in paramInfo.infos" :key="index4">
        <td class="param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    paramInfo: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
.params {
  padding: 20px 15px;
  font-size: 13px;
  border-bottom: 5px solid #f2f5f8;
}
.params table {
  width: 100%;
  /* 如果可能，边框会合并为一个单一的边框*/
  border-collapse: collapse;
}
.params table tr {
  height: 40px;
}
.params table tr {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.param-key {
  width: 95px;
}
.info-param{
  border-top:1px solid rgba(0,0,0,0.1);
}
.param-value {
  color: var(--color-high-text);
}
.info-img img {
  width: 100%;
}

</style>