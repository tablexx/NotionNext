/**
 * 另一个落地页主题
 */
const CONFIG = {
    /*跳转页
    PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
    PROXIO_WELCOME_TEXT: '欢迎来到CHG华夏神明降临，点击任意位置进入', // 欢迎文字，留空则不启用
    */

    // 英雄区块导航
    PROXIO_HERO_ENABLE: true, // 开启英雄区
    PROXIO_HERO_TITLE_1: 'CHG华夏神明降临', // 英雄区文字
    PROXIO_HERO_TITLE_2: '欢迎加入', // 英雄区文字

    // 关于家族
    PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
    PROXIO_ABOUT_TITLE: '关于家族',
    PROXIO_ABOUT_TEXT_1: 'About CHG',
    PROXIO_ABOUT_TEXT_2:
        '加入我们的条件：        热爱《音速觉醒》这款游戏，有积极的游戏态度，愿意与家族成员共同进步。​\n       遵守家族规则，尊重每一位成员，具备良好的团队精神。\n        能够保持一定的在线活跃度，积极参与家族活动。',
    PROXIO_ABOUT_PHOTO_URL: 'https://cdn.zako.cc/r2/chg_logo.png',
    PROXIO_ABOUT_KEY_1: '成员数量成立时间',
    PROXIO_ABOUT_VAL_1: '2024.11.09',
    PROXIO_ABOUT_KEY_2: '族长',
    PROXIO_ABOUT_VAL_2: '韩少麒',
    PROXIO_ABOUT_KEY_3: '成员数量',
    PROXIO_ABOUT_VAL_3: '37',
    PROXIO_ABOUT_KEY_4: '考核Q群',
    PROXIO_ABOUT_VAL_4: '1023548070',

    PROXIO_ABOUT_BUTTON_URL: '/examine',
    PROXIO_ABOUT_BUTTON_TEXT: '考核标准',


    // 成员列表  英雄区两个按钮，如果TEXT留空则隐藏按钮
    PROXIO_HERO_BUTTON_1_TEXT: '成员列表', // 英雄区按钮
    PROXIO_HERO_BUTTON_1_URL:
        'https://r2.zako.cc/group', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_TEXT: '在Github上关注', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

    // 英雄区配图，如需隐藏，改为空值即可 ''
    PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
    PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/
/*
    // 文章区块
    PROXIO_BLOG_TEXT_1: '',
    PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
    PROXIO_BLOG_TITLE: '家族公告',
    PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章

    // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: 'https://cdn.zako.cc/r2/%E7%94%9F%E6%88%90%E7%89%B9%E5%AE%9A%E9%A3%8E%E6%A0%BC%E5%9B%BE%E7%89%87-%281%29_01.png', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: 'https://cdn.zako.cc/r2/%E7%94%9F%E6%88%90%E7%89%B9%E5%AE%9A%E9%A3%8E%E6%A0%BC%E5%9B%BE%E7%89%87-%281%29_02.png',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: 'https://cdn.zako.cc/r2/%E7%94%9F%E6%88%90%E7%89%B9%E5%AE%9A%E9%A3%8E%E6%A0%BC%E5%9B%BE%E7%89%87-%281%29_03.png',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: 'https://cdn.zako.cc/r2/%E7%94%9F%E6%88%90%E7%89%B9%E5%AE%9A%E9%A3%8E%E6%A0%BC%E5%9B%BE%E7%89%87-%281%29_04.png',
*/

    PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块


    // 区块1
    PROXIO_FEATURE_ENABLE: true, // 特性区块开关
    PROXIO_FEATURE_TITLE: '待补充',
    PROXIO_FEATURE_TEXT_1: '待补充待补充待补充待补充',
    PROXIO_FEATURE_TEXT_2:
        '待补充待补充待补充待补充待补充待补充',

    // 区块2
    PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
    PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
    PROXIO_FEATURE_1_TITLE_1: '待补充',
    PROXIO_FEATURE_1_TEXT_1: '待补充待补充待补充待补充待补充',

    PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
    PROXIO_FEATURE_2_ICON_IMG_URL: '', 
    PROXIO_FEATURE_2_TITLE_1: '待补充',
    PROXIO_FEATURE_2_TEXT_1: '待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充',

    PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
    PROXIO_FEATURE_2_ICON_IMG_URL: '',
    PROXIO_FEATURE_3_TITLE_1: '待补充',
    PROXIO_FEATURE_3_TEXT_1: '待补充待补充待补充待补充待补充',

    PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
    PROXIO_FEATURE_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 按钮跳转

    // 首页生涯区块
    PROXIO_CAREER_ENABLE: true, // 区块开关
    PROXIO_CAREER_TITLE: '待补充',
    PROXIO_CAREER_TEXT:
        '待补充待补充',

    // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
    PROXIO_CAREERS: [
        { title: '待补充待补充待补充待补充', bio: '待补充', text: '待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充' },
        { title: '待补充待补充待补充待补充', bio: '待补充', text: '待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充.' },
        { title: '待补充待补充待补充待补充', bio: '待补充', text: '待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充' }
    ],

    // 首页用户测评区块
    PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
    PROXIO_TESTIMONIALS_TITLE: '待补充',
    PROXIO_TESTIMONIALS_TEXT_1: '待补充待补充待补充待补充',
    PROXIO_TESTIMONIALS_TEXT_2:
        '待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充待补充',

    // 用户测评处的跳转按钮
    PROXIO_TESTIMONIALS_BUTTON_URL: '/about',
    PROXIO_TESTIMONIALS_BUTTON_TEXT: '联系我',

    // 成员列表 不支持CONFIG和环境变量，需要一一修改此处代码。
    /*
    
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '自我介绍',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '头像网址',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '名字',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '角色',
            PROXIO_TESTIMONIALS_ITEM_URL: '个人页'
   */
    PROXIO_TESTIMONIALS_ITEMS: [
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '自我介绍',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/attachment%3Ae5f48c63-5074-421d-a2f9-f00ba6fbcc4a%3Azako-%E7%BD%91%E9%A1%B5%E9%80%82%E9%85%8D.png?table=block&id=1f94684a-49cc-806e-aaca-fb125d35aa28&spaceId=2b5d16f7-7f5e-4eb1-b3a3-575258339d6b&width=2000&userId=64247131-4df7-41d5-b2c7-992ea9258365&cache=v2',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'zako',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '倒数担当',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.notion.so/zakooo/zako-1f94684a49cc804ab12edba7d2e4f73f?pvs=4'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '自我介绍',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/attachment%3Ae5f48c63-5074-421d-a2f9-f00ba6fbcc4a%3Azako-%E7%BD%91%E9%A1%B5%E9%80%82%E9%85%8D.png?table=block&id=1f94684a-49cc-806e-aaca-fb125d35aa28&spaceId=2b5d16f7-7f5e-4eb1-b3a3-575258339d6b&width=2000&userId=64247131-4df7-41d5-b2c7-992ea9258365&cache=v2',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'zako',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '倒数担当',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.notion.so/zakooo/zako-1f94684a49cc804ab12edba7d2e4f73f?pvs=4'
        },    
    ],

    //   FAQ 常见问题模块
    PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
    PROXIO_FAQ_TITLE: '常见问题解答',
    PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
    PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
    PROXIO_FAQS: [
        { q: '阿巴阿巴', a: '阿巴阿巴' },
        { q: '阿巴阿巴', a: '阿巴阿巴' },
    ],


    // 横向滚动文字
    PROXIO_BRANDS_ENABLE: true, // 滚动文字
    PROXIO_BRANDS: [
        '[福建]韩少麒',
        '[贵州]李笑笑',
        '[湖南]李跳跳',
        '皇帝',
        '断浪',
        '小丑女',
        '[四川]夜明',
        '[广东]Eugene_1',
        '[广东]熙子',
        '[山西]李秀玲',
        '[内蒙]乐乐',
        '[湖北]卧龙',
        '[河北]zero',
        '[广东]周杰伦',
        '[广东]哇浪',
        '[重庆]风车',
        '[广东]欧阳癫',
        '[潜水]GJ',
        '[潜水]轻微',
        '[海南]七合',
        '[潜水]有药',
        '[CH.G]酱油',
        '[江苏]彭于晏',
        '[广东]李晓',
        '[辽宁]街角',
        '[河南]Alexia',
        '[辽宁]东东',
        '[潜水]夏天问',
        '[潜水]酒精',
        '[潜水]叶子',
        '[重庆]崎晓',
        '[湖南]小杰',
        '萌萌哒',
        '蛋凉',
        '沁',
        '[广东]zako',
        '[福建]圈圈',
    ],

    PROXIO_FOOTER_SLOGAN: '啦啦啦啦啦',

    // 页脚三列菜单组
    // 页脚菜单
    PROXIO_FOOTER_LINKS: [
        {
            name: '友情链接',
            menus: [
                {
                    title: 'V2FUN官网',
                    href: 'https://www.baidu.com'
                },
                {
                    title: '音速助手',
                    href: 'https://www.bing.com'
                },
                {
                    title: '音速觉醒贴吧',
                    href: 'https://www.bing.com'
                }
            ]
        },
        {
            name: '链接',
            menus: [
                { title: 'Github', href: 'https://github.com/tangly1024/NotionNext' },
                {
                    title: '联系族长',
                    href: 'https://www.baidu.com'
                },
                {
                    title: '考核群',
                    href: 'https://www.baidu.com'
                },
                {
                    title: '网站反馈',
                    href: 'https://www.baidu.com'
                },
                {
                    title: '其它建议',
                    href: 'https://www.baidu.com'
                }
            ]
        }],

    PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

    PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
    PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

    // 404页面的提示语
    PROXIO_404_TITLE: '你给我干哪来了',
    PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
    PROXIO_404_BACK: '回到主页',

    /*/ 页面底部的行动呼吁模块
    PROXIO_CTA_ENABLE: true,
    PROXIO_CTA_TITLE: '与我建立联系',
    PROXIO_CTA_TITLE_2: '',
    PROXIO_CTA_DESCRIPTION:
        '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
    PROXIO_CTA_BUTTON: true, // 是否显示按钮
    PROXIO_CTA_BUTTON_URL:
        '/about',
    PROXIO_CTA_BUTTON_TEXT: '联系我',
    */

    PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
    PROXIO_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
    PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
