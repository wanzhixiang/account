<template>
  <div>
    <table id="voucherTable" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th>摘要</th>
          <th>会计科目</th>
          <th>
            <div>借方金额</div>
            <div class="money_unit">
              <span>亿</span>
              <span>千</span>
              <span>百</span>
              <span>十</span>
              <span>万</span>
              <span>千</span>
              <span>百</span>
              <span>十</span>
              <span>元</span>
              <span>角</span>
              <span>分</span>
            </div>
          </th>
          <th>
            <div>贷方金额</div>
            <div class="money_unit">
              <span>亿</span>
              <span>千</span>
              <span>百</span>
              <span>十</span>
              <span>万</span>
              <span>千</span>
              <span>百</span>
              <span>十</span>
              <span>元</span>
              <span>角</span>
              <span>分</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td><input type="text" v-model="tableData[0].remark"/></td>
        <td><input type="text" v-model="tableData[0].subject"/></td>
        <td><input type="text" v-model="tableData[0].debit" class="money_input"/></td>
        <td><input type="text" v-model="tableData[0].lender"/></td>
      </tr>
      <tr>
        <td><input type="text" v-model="tableData[1].remark"/></td>
        <td><input type="text" v-model="tableData[1].subject"/></td>
        <td><input type="text" v-model="tableData[1].debit" class="money_input"/></td>
        <td><input type="text" v-model="tableData[1].lender"/></td>
      </tr>
      <tr>
        <td><input type="text" v-model="tableData[2].remark"/></td>
        <td><input type="text" v-model="tableData[2].subject"/></td>
        <td><input type="text" v-model="tableData[2].debit" class="money_input"/></td>
        <td><input type="text" v-model="tableData[2].lender"/></td>
      </tr>
      <tr>
        <td><input type="text" v-model="tableData[3].remark"/></td>
        <td><input type="text" v-model="tableData[3].subject"/></td>
        <td><input type="text" v-model="tableData[3].debit" class="money_input"/></td>
        <td><input type="text" v-model="tableData[3].lender"/></td>
      </tr>
      <tr>
        <td colspan="2" style="text-align: left;padding-left: 10px">合计:</td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'VoucherEditTable',
  data () {
    return {
      tableData: [
        {
          remark: '',
          subject: '',
          debit: '',
          lender: ''
        },
        {
          remark: '',
          subject: '',
          debit: '',
          lender: ''
        },
        {
          remark: '',
          subject: '',
          debit: '',
          lender: ''
        },
        {
          remark: '',
          subject: '',
          debit: '',
          lender: ''
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  #voucherTable{
    position: relative;
    width: 100%;
    border:2px solid #000;
    text-align: center;
  }
  #voucherTable td{
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    height: 60px;
    width: 25%;
  }

  #voucherTable tr:first-child td{
    border-top:1px solid #000;
  }

  #voucherTable tr td:first-child{
    border-left: 1px solid #000;
  }

  #voucherTable thead th{
    border-top: 1px solid #000;
    border-right: 1px solid #000;
    height: 50px;
  }

  #voucherTable thead th:first-child{
    border-left: 1px solid #000;
  }
  #voucherTable tr input{
    font-size: large;
    width: 100%;
    height: 100%;
    border: none;
    letter-spacing:10px;
  }
  .money_unit{
    background: url(../../assets/money_rp.png) repeat-y;
    text-align: left;
    font-size: 98%;
    font-weight: normal;
    width: 100%;
  }
  .money_input{
    background: url(../../assets/money_rp.png) repeat-y;
    text-align: right;
  }
  .money_unit span{
    display: inline;
    width: 19px;
    height: 100%;
    background-color: #fff;
  }
</style>
