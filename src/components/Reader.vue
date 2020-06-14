<template>
  <div class="layout">
    <Row type="flex">
      <Col span="5" class="layout-menu-left">
      <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
        <div class="layout-logo-left">
          <h2 style="color:white;">文典阁期刊管理系统</h2>
        </div>
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            欢迎你，用户:{{msg}}
          </template>
          <MenuItem name="1-1" @click.native="lookSearchBook"><span>搜索期刊</span></MenuItem>
          <MenuItem name="1-2" @click.native="lookPersonalMessage"><span>个人信息</span></MenuItem>
          <MenuItem name="1-3" @click.native="lookMyRecord"><span>借阅记录</span></MenuItem>
          <MenuItem name="1-4" @click.native="lookLogs"><span>日志系统</span></MenuItem>
          <MenuItem name="1-5" @click.native="lookFeedback"><span>反馈系统</span></MenuItem>
          <MenuItem name="1-6" @click.native="lookExits"><span>退出系统</span></MenuItem>
        </Submenu>
      </Menu>
      </Col>
      <Col span="19">
      <div class="layout-header"></div>
      <div class="layout-breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem href="#">{{one_nav}}</BreadcrumbItem>
          <BreadcrumbItem href="#">{{two_nav}}</BreadcrumbItem>
          <BreadcrumbItem>{{three_nav}}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="layout-content">
        <div class="layout-content-main">
          <template id="searchBook"></template>
          <template id="personalMessage"></template>
          <template id="myRecord"></template>
          <template id="logs"></template>
          <template id="feedback"></template>
          <template id="exits"></template>
          <component :is="currentView"></component>
        </div>
      </div>
      <div class="layout-copy">
        2020 &copy; AHU期刊管理系统
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  import searchBook from '../components/SearchBook.vue'
  import myRecord from '../components/MyRecord.vue'
  import personalMessage from '../components/PersonalMessage.vue'
  import logs from '../components/Logs.vue'
  import feedback from '../components/Feedback.vue'
  import exits from '../components/Exits.vue'
  import Button from 'iview/src/components/button/button'
  export default {
    name: 'Administrator',
    data () {
      return {
        msg: 'admin',
        one_nav: '主页',
        two_nav: '>',
        three_nav: '搜索期刊',
        currentView: 'searchBook'
      }
    },
    mounted () {
      this.msg = window.localStorage.getItem('username')
    },
    methods: {
      lookSearchBook () {
        this.one_nav = '主页'
        this.two_nav = '>'
        this.three_nav = '搜索期刊'
        this.currentView = 'searchBook'
      },
      lookPersonalMessage () {
        this.one_nav = '主页'
        this.two_nav = '>'
        this.three_nav = '个人信息'
        this.currentView = 'personalMessage'
      },
      lookMyRecord () {
        this.one_nav = '主页'
        this.two_nav = '>'
        this.three_nav = '借阅记录'
        this.currentView = 'myRecord'
      },
      lookLogs () {
        this.one_nav = '主页'
        this.two_nav = '>'
        this.three_nav = '日志系统'
        this.currentView = 'logs'
      },
      lookFeedback () {
        this.one_nav = '主页'
        this.two_nav = '>'
        this.three_nav = '反馈系统'
        this.currentView = 'feedback'
      },
      lookExits () {
        this.one_nav = '主页'
        this.two_nav = '>'
        this.three_nav = '退出系统'
        this.currentView = 'exits'
      }
    },
    components: {
      Button,
      searchBook: searchBook,
      personalMessage: personalMessage,
      myRecord: myRecord,
      logs: logs,
      feedback: feedback,
      exits: exits
    }
  }
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    margin-top:-60px;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
    text-align:left;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  Button{
    color:white;
  }
</style>
