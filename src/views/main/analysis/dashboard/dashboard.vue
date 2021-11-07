<template>
  <div class="dashboard">
    <el-row :gutter="10" class="content-row">
      <el-col :span="7">
        <HdCard title="分类商品数量(饼图)">
          <PieEchart :pieData="categoryGoodsCount"></PieEchart>
        </HdCard>
      </el-col>
      <el-col :span="10">
        <HdCard title="不同城市商品销量">
          <MapEchart :mapData="addressGoodsSale"></MapEchart>
        </HdCard>
      </el-col>
      <el-col :span="7">
        <HdCard title="分类商品数量(玫瑰图)">
          <RoseEchart :roseData="categoryGoodsCount"></RoseEchart>
        </HdCard>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <HdCard title="分类商品的销量"
          ><LineEchart :lineData="categoryGoodsSale"></LineEchart
        ></HdCard>
      </el-col>
      <el-col :span="12">
        <HdCard title="分类商品的收藏"
          ><BarEchart :barData="categoryGoodsFavor"></BarEchart>
        </HdCard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import HdCard from '@/base-ui/card'
import { PieEchart, RoseEchart, LineEchart, BarEchart, MapEchart } from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    HdCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    // 请求数据
    store.dispatch('dashboard/getDashboardDataActions')

    // 获取数据
    const categoryGoodsCount = computed(() =>
      store.state.dashboard.categoryGoodsCount.map((item) => ({
        name: item.name,
        value: item.goodsCount
      }))
    )
    const categoryGoodsSale = computed(() =>
      store.state.dashboard.categoryGoodsSale.map((item) => ({
        name: item.name,
        value: item.goodsCount
      }))
    )
    const categoryGoodsFavor = computed(() =>
      store.state.dashboard.categoryGoodsFavor.map((item) => ({
        name: item.name,
        value: item.goodsFavor
      }))
    )
    const addressGoodsSale = computed(() =>
      store.state.dashboard.addressGoodsSale.map((item) => ({
        name: item.address,
        value: item.count
      }))
    )

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style lang="less" scoped>
.content-row {
  margin-bottom: 20px;
  height: 50%;
}
</style>
