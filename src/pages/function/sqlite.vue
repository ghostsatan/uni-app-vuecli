<template>
  <view>
    <u-button type="primary" :plain="true" text="测试数据库是否连接" @click="getSqlLite"></u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      dbName: 'main',
      dbPath: '_doc/dianji_chat.db',
      dbTable1: 'mainTable',
    }
  },
  onLoad() {
    // this.loadmore()
  },
  methods: {
    getSqlLite() {
      //检查数据库是否打开
      var open = plus.sqlite.isOpenDatabase({
        name: this.dbName, //数据库名称
        path: this.dbPath //数据库地址，uniapp推荐以下划线为开头
      });
      if (open) {
        this.createTables()
      } else {
        //开启数据库
        plus.sqlite.openDatabase({
          name: this.dbName, //数据库名称
          path: this.dbPath, //数据库地址，uniapp推荐以下划线为开头
          success(e) {
            uni.showToast({ title: '创建成功', icon: 'none' })
            console.log(1111,e);
            this.createTables()//成功创建表
          },
          fail(e) {
            uni.showToast({ title: '创建失败', icon: 'none' })
          }
        });
      }
    },
    //创建表
    createTables() {
      plus.sqlite.executeSql({
        name: 'main',
        sql: 'create table if not exists ' +
          this.dbTable1 +
          '( ID INTEGER PRIMARY KEY AUTOINCREMENT,"createdTime" varchar(100) NOT NULL,"time" varchar(100),"num" varchar(100),"money" varchar(100));',
        success(e) {
          console.log(111,e)
          //如果创建不会重复创建，如果没创建会创建
          uni.showToast({ title: '创建成功', icon: 'none' })
        },
        fail(e) {
          console.log(e, 'eee失败')
          uni.showToast({ title: '失败', icon: 'none' })
        }
      })
    },

  },
}
</script>