/**
 * @function
 * @name ucShare  
 * @param {
 *      title:'',
 *      content :'',
 *      sourceUrl : '',
 *      source:'',
 *      target:''
 * }
 * @description uc浏览器分享功能
 */

 import {isIOS} from '../common/util'

 export function ucShare ( data = {}, WechatFriends = ''){
    //  console.log('ucShare')
    if (isIOS) {
        if (ucbrowser.web_shareEX) 
            ucbrowser.web_shareEX(
                    JSON.stringify({
                        title: data['title'],
                        content: data['content'],
                        sourceUrl: data['sourceUrl'],
                        source: data['source'],
                        target: data['target']
                    })
            )
         else 
            ucbrowser.web_share(this.title,this.content.this.sourceUrl,'kWeixin')
    } else 
        ucweb.startRequest("shell.page_share", [data.title, data.content,data.sourceUrl, 'WechatTimeline', WechatFriends, '',''])
}
