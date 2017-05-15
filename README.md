#alumniapp-server 后台设计

##1. npm 模块选择
    * express 服务器
    * request/request-promise-native 发送请求
    * supervisor watchman
    * moment 日期库
    * mongoose 数据库
    * config 读取配置文件
    * morgan express 日志中间件
    
##2. 接口api 数据定义贵方
```
   成功返回接口: 
   { 
     success: true,
     data: {},
     errno: '',
     reason: '',
     echo: ''
   }
   失败返回接口: 
   {
     success: false,
     data: {},
     errno: '10001',
     reason: '未登录',
     echo: 'NOT_LOGIN'
   }
```