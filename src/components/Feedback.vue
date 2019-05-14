<template>
  <div class="container">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="name">
        <Input type="text" v-model="formInline.name" placeholder="用户姓名">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">查找</Button>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="modal1 = true">新添反馈</Button>
      </FormItem>
    </Form>
    <Table border :columns="columns7" :data="data6"></Table>
    <Page :total="total" :page-size="10" @on-change="changePage"></Page>

    <Modal
      v-model="modal1"
      title="新添反馈"
      @on-ok="ok('formItem2')"
      >
      <Form ref="formItem2" :model="formItem2" :rules="ruleItem2" :label-width="80">
        <FormItem label="姓名" prop="name">
          <Input v-model="formItem2.name" placeholder=""></Input>
        </FormItem>
        <FormItem label="反馈内容" prop="content">
          <Input v-model="formItem2.content" placeholder=""></Input>
        </FormItem>
        <FormItem label="反馈时间" prop="feedbacktime">
          <Input v-model="formItem2.feedbacktime" placeholder=""></Input>
        </FormItem>
        <FormItem label="反馈类型" prop="type">
          <Select v-model="formItem2.type">
            <Option value="0">对期刊进行反馈</Option>
            <Option value="1">对系统进行反馈</Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script type="es6">
  export default {
    name: 'Feedback',
    data () {
      return {
        total: '',
        condi: '',
        modal1: false,
        formInline: {
          name: ''
        },
        formItem2: {
          name: '',
          content: '',
          feedbacktime: '',
          type: '0'
        },
        ruleItem2: {
          name: [{
            required: true,
            message: '请填写用户姓名！',
            trigger: 'blur'
          }],
          content: [{
            required: true,
            message: '请填写反馈内容',
            trigger: 'blur'
          }]
        },
        columns7: [
          {
            title: '账号',
            key: 'account',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('strong', params.row.account)
              ]);
            }
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '反馈内容',
            key: 'content'
          },
          {
            title: '反馈时间',
            key: 'feedbacktime'
          },
          {
            title: '反馈类型',
            key: 'type'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data6: []
      }
    },
    mounted(){
      this.request(1);
    },
    methods: {
      handleSubmit(account) {
        this.request(1)
      },
      show (index) {
        if(this.data6[index].type==0){
          this.type='对期刊进行反馈'
        }else{
          this.type='对系统进行反馈'
        }
        this.$Modal.info({
          title: '反馈信息',
          content: `用户姓名：${this.data6[index].name}<br>反馈内容：${this.data6[index].content}<br>反馈时间：${this.data6[index].feedbacktime}<br>反馈类型：${this.type}`
        })
      },
      remove (index) {
        this.data6.splice(index, 1);
      },
      request (currentPage){
        var that=this
        this.$http.post(that.GLOBAL.serverPath + '/excise/getAllFeedBacks',
          {
            name: that.formInline.name,
            currentPage: currentPage
          },
          {
            emulateJSON: true
          }
        ).then(function (res) {
          console.log(res.data.pageInfo)
          that.total=res.data.pageInfo.total
          that.data6=res.data.readers
        }).catch((e) => {
          this.$Message.fail('网络有误！')
        })
      },
      changePage: function(page){
        this.request(page)
      },
      ok (name) {
        var that=this
        this.$refs[name].validate((valid) => {
          if (valid) {
            that.$http.post(that.GLOBAL.serverPath + '/excise/addFeedback',
              {
                name: that.formItem2.name,
                content: that.formItem2.content,
                feedbacktime: that.formItem2.feedbacktime,
                type: that.formItem2.type,
              },
              {
                emulateJSON: true
              }
            ).then(function (res) {
              console.log(res.data.status)
              if(res.data.status=='ok'){
                that.$Message.success('新增成功')
                that.formInline.name=''
                that.request(1)
              }else{
                that.$Message.error('添加失败')
              }

            }).catch((e) => {
              that.$Message.fail('网络有误！')
            })
          }
        })
      }
    }
  }
</script>

