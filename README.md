### 方法使用
#### 安装 
```text 
npm i nz-uc-share -S
```

#### 使用
``` text 
const ucShare = require('nz-uc-share').default 
```

#### 方法
``` script 
    var data = {
        title: "手机快活贷—零花钱",
        content: "最高30万秒审批 ,快速申请，专人对接",
        sourceUrl: location.href,
        source: 'XXX',
        target: '',
        imageUrl: "https://kira.ningzefintech.com/fastdfs/group1/M00/00/01/rBDLuluppQ2AWSmTAAVwToCgmVQ269.png"
    }
    ucShare(data)
    
    分享给好友
    ucShare(data,'WechatFriends')
```
#### webpack打包兼容配置
> 在处理js的时候新增
``` json
{
    test: /\.js$/,
    loader: 'babel-loader',
    include: [resolve('src'), resolve('node_modules/nz-uc-share')]
}     
```
    