export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx480939eab2d4f880",
    // 公众号APP_SECRET
    APP_SECRET: "6b349eba3bbaad46b6d3ad9e9c8566c6",
    // 模板消息id
    TEMPLATE_ID: "Si8LYhSEVESTiYUU3xectPG0NP5-P1YsAc_h8Ayc28U",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["ovGY-5q23z46xH2o8jiTNgRzd30U", "ovGY-5oYx7iplqeGoxBWj039aDSU"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "黑龙江",
    // 所在城市
    CITY: "齐齐哈尔",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "铁铁", "year": "1998", "date": "10-06"},
      {"name": "崽崽", "year": "1997", "date": "12-26"},
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2019-11-28",
    


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
