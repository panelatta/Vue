<template>
  <div class="layout">
    <Row type="flex">
      <Col span="5" class="layout-menu-left">
      <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
        <div class="layout-logo-left">
          <h2 style="color:white;">期刊阅览室</h2>
        </div>
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            欢迎你，管理员:{{msg}}
          </template>
          <MenuItem name="1-1" @click.native="lookPersonalMessage"><span>个人信息</span></MenuItem>
          <MenuItem name="1-2" @click.native="lookBookManage"><span>期刊管理</span></MenuItem>
          <MenuItem name="1-3" @click.native="lookRecordManage"><span>借阅记录</span></MenuItem>
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
          <template id="personalMessage"></template>
          <template id="bookManage"></template>
          <template id="recordManage"></template>
          <template id="logs"></template>
          <template id="feedback"></template>
          <template id="exits"></template>
          <component :is="currentView"></component>
        </div>
      </div>
      <div class="layout-copy">
        2019 &copy; 期刊阅览室管理
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  import personalMessage from '../components/PersonalMessage.vue'
  import bookManage from '../components/BookManage.vue'
  import recordManage from '../components/RecordManage.vue'
  import logs from '../components/Logs.vue'
  import feedback from '../components/Feedback.vue'
  import exits from '../components/Exits.vue'
  import Button from 'iview/src/components/button/button'
  export default {
    name: 'Administrator',
    data () {
      return {
        msg: 'Administrator',
        one_nav: '主页',
        two_nav: '>',
        three_nav: '个人信息',
        currentView: 'personalMessage'
      }
    },
    mounted () {
      this.msg = window.localStorage.getItem('username')
    },
    methods: {
      lookPersonalMessage () {
        this.one_nav = '主页'
        this.two_nav = '>'
        this.three_nav = '个人信息'
        this.currentView = 'personalMessage'
      },
      lookBookManage () {
        this.one_nav = '主页'
        this.two_nav = '>'
        this.three_nav = '期刊管理'
        this.currentView = 'bookManage'
      },
      lookRecordManage () {
        this.one_nav = '主页'
        this.two_nav = '>'
        this.three_nav = '借阅记录'
        this.currentView = 'recordManage'
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
        this.three_nav = '推出系统'
        this.currentView = 'exits'
      }
    },
    components: {
      Button,
      personalMessage: personalMessage,
      bookManage: bookManage,
      recordManage: recordManage,
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
