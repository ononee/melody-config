<template>
  <div>
    <el-row>
      <!-- 预览 -->
      <el-card :body-style="{ height: '150px', padding: '50px' }" class="box-card item mycard">
        <div style="font-size: 12px; margin-bottom: 30px; margin-left: 40px">
          嗨，感谢您使用Melody
          Configer。该应用程序创建Melody服务加载的配置。为了正确配置服务，请至少执行以下步骤：
        </div>
        <el-col :span="24" class="container">
          <el-steps :active="cur" align-center finish-status="process">
            <template v-for="(item, index) in stepData">
              <el-step :key="index" :title="item.title">
                <span class="pointer" slot="description">
                  {{ item.description }}
                </span>
              </el-step>
            </template>
          </el-steps>
        </el-col>
      </el-card>
      <el-card class="box-card item mycard" style="max-height:400px;">
        <TreeChart :json="treeData" style="margin: 0 auto;" />
      </el-card>
    </el-row>
  </div>
</template>

<script>
import TreeChart from 'vue-tree-chart'
export default {
  name: 'Dashboard',
  components: {
    TreeChart,
  },
  data() {
    let serviceConfig = this.$store.getters.serviceConfig
    let endpointConfig = serviceConfig.endpoints
    let ind = 0
    if (endpointConfig && endpointConfig != undefined) {
      ind = 1
      if (endpointConfig[0] && endpointConfig[0].backends) {
        ind = 2
      }
    }

    return {
      cur: ind,
      stepData: [
        {
          title: 'Service配置',
          description: '关于Melody服务本身端口、时延、速率限制相关等配置',
        },
        {
          title: 'Endpoints配置',
          description: 'Endpoint对应每一个节点，也就是网关中暴露出去的API',
        },
        {
          title: 'Backends配置',
          description: 'Backend对应后端服务，一个Endpoints下可以配置多个Backends',
        },
        {
          title: '日志监控配置',
          description: '关于整个服务的日志级别、输出方式，以及对各个接口的监控方式。',
        },
        {
          title: '导出配置',
          description: '导出配置文件，供Melody服务启用',
        },
      ],
      treeData: {
        name: 'Melody Config',
        children: [
          {
            name: 'endpoint 结构',
            children: [
              {
                name: '/endpoint_1',
              },
              {
                name: '/endpoint_2',
                children: [
                  {
                    name: '/backend_1',
                  },
                  {
                    name: '/backend_1',
                  },
                  {
                    name: '/backend_1',
                  },
                ],
              },
              {
                name: '/endpoint_3',
              },
            ],
          },
        ],
      },
    }
  },
  methods: {
    setCur(val) {
      this.cur = val
    },
  },
  mounted() {},
}
</script>

<style lang="scss">
.avat {
  display: none !important;
}
.person {
  background-color: #dadada;
  border-radius: 5px;
  width: 80% !important;
}
.mycard {
  overflow: auto;
  overflow-y: hidden;
}
</style>
