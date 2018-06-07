<template>
  <div>
    <table id="voucherTable" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th width="36%">摘要</th>
          <th width="36%">会计科目</th>
          <th width="13.1%">
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
          <th width="13.1%">
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
      <template v-for="item in tableData">
        <tr>
          <td><input type="text" v-model="item.remark"/></td>
          <td><input type="text" v-model="item.subject"/></td>
          <td><input type="text" v-model="item.debit" class="money_input"  @keyup="setMoney(item)"/></td>
          <td><input type="text" v-model="item.lender" class="money_input" @keyup="setMoney(item)"/></td>
        </tr>
      </template>
      <tr>
        <td colspan="2" style="text-align: left;padding-left: 10px">合计:{{totalComputer}}</td>
        <td class="money_input">{{debitComputerTotal}}</td>
        <td class="money_input">{{lenderComputerTotal}}</td>
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
      debitTotal: 0,
      lenderTotal: 0,
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
  computed: {
    debitComputerTotal: function () {
      let _debitTotal = ''
      this.tableData.map((item) => {
        _debitTotal = Number(_debitTotal) + Number(item.debit)
      })
      this.debitTotal = _debitTotal
      return _debitTotal === 0 ? '' : _debitTotal
    },
    lenderComputerTotal: function () {
      let _lenderTotal = ''
      this.tableData.map((item) => {
        _lenderTotal = Number(_lenderTotal) + Number(item.lender)
      })
      this.lenderTotal = _lenderTotal
      return _lenderTotal === 0 ? '' : _lenderTotal
    },
    totalComputer: function () {
      if (this.debitTotal === this.lenderTotal && this.debitTotal !== 0) {
        return this.moneyToUppercase(this.debitTotal)
      }
      return ''
    }
  },
  methods: {
    setMoney: function (data) {
      if (data.debit !== '') {
        data.debit = data.debit.replace(/[^\-?\d.]/g, '')
      } else if (data.lender !== '') {
        data.lender = data.lender.replace(/[^\-?\d.]/g, '')
      }
    },
    moneyToUppercase: function (num) {
      let fraction = ['角', '分']
      let digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
      let unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']]
      var head = num < 0 ? '欠' : ''
      num = Math.abs(num)
      var s = ''
      for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(num * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
      }
      s = s || '整'
      num = Math.floor(num)
      for (var i = 0; i < unit[0].length && num > 0; i++) {
        var p = ''
        for (var j = 0; j < unit[1].length && num > 0; j++) {
          p = digit[num % 10] + unit[1][j] + p
          num = Math.floor(num / 10)
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
      }
      return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整')
    }
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
  }
  .money_unit{
    background: url(../../assets/money_rp.png) repeat-y;
    text-align: left;
    border-top: 1px solid #dadada;
    font-size: 98%;
    font-weight: normal;
    width: 100%;
  }
  .money_input{
    background: url(../../assets/money_rp.png) repeat-y;
    text-align: right;
    letter-spacing:10px;
  }
  .money_unit span{
    display: inline;
    width: 19px;
    height: 100%;
    background-color: #fff;
  }
</style>
