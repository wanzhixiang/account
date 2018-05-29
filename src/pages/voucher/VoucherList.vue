<template>
    <div>
      <!--操作查询区 start-->
      <el-form :model="data" label-width="80px" :inline="true" size="small">
        <el-form-item label="查询条件">
          <el-input v-model="data.keyword" auto-complete="off" placeholder="凭证字/凭证号/摘要"></el-input>
        </el-form-item>
        <el-form-item label="科目" >
          <el-input v-model="data.subjectName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建日期" >
          <el-date-picker
            v-model="data.createDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="searchVoucher">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="default" icon="el-icon-close" @click="cleanSearch">清空</el-button>
        </el-form-item>
      </el-form>
      <el-row type="flex">
        <el-button type="success" size="small"  icon="el-icon-plus">新增</el-button>
        <el-button type="danger" size="small" icon="el-icon-delete">删除</el-button>
      </el-row>
      <!--操作按钮区 end-->
      <!--<voucher-table></voucher-table>-->
      <el-row>
        <el-col :span="6" v-for="(o) in 4" :key="o">
          <el-card :body-style="{ padding: '0px' }">
            <img src="" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import VoucherTable from '../../components/table/VoucherTable'
export default {
  name: 'VoucherList',
  components: {VoucherTable},
  data () {
    return {
      currentDate: new Date(),
      data: {
        id: '',
        keyword: '',
        subjectName: '',
        createDate: ''
      }
    }
  },
  methods: {
    // 清空查询
    cleanSearch: function () {
      this.data = {}
    },
    // 查询数据
    searchVoucher: function () {

    }
  }
}
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
