/**
 * 另一个落地页主题
 */
const CONFIG = {
    PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
    PROXIO_WELCOME_TEXT: '欢迎来到CHG华夏神明降临，点击任意位置进入', // 欢迎文字，留空则不启用

    // 英雄区块导航
    PROXIO_HERO_ENABLE: true, // 开启英雄区
    PROXIO_HERO_TITLE_1: 'CHG华夏神明降临', // 英雄区文字
    PROXIO_HERO_TITLE_2: '欢迎加入', // 英雄区文字
    // 英雄区两个按钮，如果TEXT留空则隐藏按钮
    PROXIO_HERO_BUTTON_1_TEXT: '申请加群', // 英雄区按钮
    PROXIO_HERO_BUTTON_1_URL:
        'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_TEXT: '在Github上关注', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

    // 英雄区配图，如需隐藏，改为空值即可 ''
    PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
    PROXIO_HERO_BANNER_IFRAME_URL: 'https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/


    // 文章区块
    PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
    PROXIO_BLOG_TITLE: '四选一',
    PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
    PROXIO_BLOG_TEXT_1: '加入条件',

    // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',


    PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

    // 特性区块
    PROXIO_FEATURE_ENABLE: true, // 特性区块开关
    PROXIO_FEATURE_TITLE: '待补充',
    PROXIO_FEATURE_TEXT_1: '待补充待补充待补充待补充',
    PROXIO_FEATURE_TEXT_2:
        '待补充待补充待补充待补充待补充待补充',

    // 特性1
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

    // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
    PROXIO_TESTIMONIALS_ITEMS: [
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '！！！！！！！！！！！！！！！！！！！！！ ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://zakooo.notion.site/x1-1f94684a49cc80e3a067f9fdb9f54231?pvs=4'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '？？？？？？？？？？？~',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://file.notion.so/f/f/2b5d16f7-7f5e-4eb1-b3a3-575258339d6b/232f5081-44a4-47fb-afed-0ccf06402aab/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%BD%91%E9%A1%B5%E9%80%82%E9%85%8D.png?table=block&id=1f94684a-49cc-8064-aa4f-ddcd7c51cdc5&spaceId=2b5d16f7-7f5e-4eb1-b3a3-575258339d6b&expirationTimestamp=1747764000000&signature=yz3whaN353HJ9UfXl-jqu6HSOhshzH9XAfdWci26A-A&downloadName=%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%BD%91%E9%A1%B5%E9%80%82%E9%85%8D.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://zakooo.notion.site/x1-1f94684a49cc80e3a067f9fdb9f54231?pvs=4'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '( •̀ ω •́ )y( •̀ ω •́ )y( •̀ ω •́ )y( •̀ ω •́ )y( •̀ ω •́ )y( •̀ ω •́ )y( •̀ ω •́ )y( •̀ ω •́ )y( •̀ ω •́ )y( •̀ ω •́ )y ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://zakooo.notion.site/x1-1f94684a49cc80e3a067f9fdb9f54231?pvs=4'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                'O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O O(∩_∩)O ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://file.notion.so/f/f/2b5d16f7-7f5e-4eb1-b3a3-575258339d6b/232f5081-44a4-47fb-afed-0ccf06402aab/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%BD%91%E9%A1%B5%E9%80%82%E9%85%8D.png?table=block&id=1f94684a-49cc-8064-aa4f-ddcd7c51cdc5&spaceId=2b5d16f7-7f5e-4eb1-b3a3-575258339d6b&expirationTimestamp=1747764000000&signature=yz3whaN353HJ9UfXl-jqu6HSOhshzH9XAfdWci26A-A&downloadName=%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%BD%91%E9%A1%B5%E9%80%82%E9%85%8D.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://zakooo.notion.site/x1-1f94684a49cc80e3a067f9fdb9f54231?pvs=4'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                'o(*￣▽￣*)ブo(*￣▽￣*)ブo(*￣▽￣*)ブo(*￣▽￣*)ブo(*￣▽￣*)ブo(*￣▽￣*)ブo(*￣▽￣*)ブo(*￣▽￣*)ブo(*￣▽￣*)ブ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://file.notion.so/f/f/2b5d16f7-7f5e-4eb1-b3a3-575258339d6b/232f5081-44a4-47fb-afed-0ccf06402aab/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%BD%91%E9%A1%B5%E9%80%82%E9%85%8D.png?table=block&id=1f94684a-49cc-8064-aa4f-ddcd7c51cdc5&spaceId=2b5d16f7-7f5e-4eb1-b3a3-575258339d6b&expirationTimestamp=1747764000000&signature=yz3whaN353HJ9UfXl-jqu6HSOhshzH9XAfdWci26A-A&downloadName=%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%BD%91%E9%A1%B5%E9%80%82%E9%85%8D.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://zakooo.notion.site/x1-1f94684a49cc80e3a067f9fdb9f54231?pvs=4'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT: '-.-',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://file.notion.so/f/f/2b5d16f7-7f5e-4eb1-b3a3-575258339d6b/232f5081-44a4-47fb-afed-0ccf06402aab/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%BD%91%E9%A1%B5%E9%80%82%E9%85%8D.png?table=block&id=1f94684a-49cc-8064-aa4f-ddcd7c51cdc5&spaceId=2b5d16f7-7f5e-4eb1-b3a3-575258339d6b&expirationTimestamp=1747764000000&signature=yz3whaN353HJ9UfXl-jqu6HSOhshzH9XAfdWci26A-A&downloadName=%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%BD%91%E9%A1%B5%E9%80%82%E9%85%8D.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'XXX站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://zakooo.notion.site/x1-1f94684a49cc80e3a067f9fdb9f54231?pvs=4'
        }
    ],

    //   FAQ 常见问题模块
    PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
    PROXIO_FAQ_TITLE: '常见问题解答',
    PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
    PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
    PROXIO_FAQS: [
        { q: '管家怎么用？', a: '不知道' },
        { q: '突发远近数值参考', a: '不知道啊' },
        { q: '怎么把歌曲导出来', a: '真不知道' },
        { q: '怎么练双手', a: '别用单手玩' },
    ],

    // 关于作者区块
    PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
    PROXIO_ABOUT_TITLE: '关于家族',
    PROXIO_ABOUT_TEXT_1: 'About CHG',
    PROXIO_ABOUT_TEXT_2:
        '加入我们的条件：        热爱《音速觉醒》这款游戏，有积极向上的游戏态度，愿意与家族成员共同进步。​\n       遵守家族规则，尊重每一位成员，具备良好的团队协作精神和沟通能力。\n        能够保持一定的在线活跃度，积极参与家族活动。',
    PROXIO_ABOUT_PHOTO_URL: 'https://cdn.zako.cc/r2/r2d6ca7bcb0a46f21fe1b3cb89b3246b600d33ae61.jpg',
    PROXIO_ABOUT_KEY_1: '成员数量',
    PROXIO_ABOUT_VAL_1: '30+',
    PROXIO_ABOUT_KEY_2: '成立时间',
    PROXIO_ABOUT_VAL_2: '200x.xx.xx',
    PROXIO_ABOUT_KEY_3: 'XXXX',
    PROXIO_ABOUT_VAL_3: 'xxx+',
    PROXIO_ABOUT_KEY_4: 'XXXX',
    PROXIO_ABOUT_VAL_4: 'xxxxxx',

    PROXIO_ABOUT_BUTTON_URL: '/about',
    PROXIO_ABOUT_BUTTON_TEXT: '关于',

    // 横向滚动文字
    PROXIO_BRANDS_ENABLE: true, // 滚动文字
    PROXIO_BRANDS: [
        'AAA',
        'BBB',
        'CCC',
        'DDD',
        'EEE',
        'FFF',
        'GGG',
        'HHH',
        'III',
        'JJJ',
        'KKK',
        'LLL',
        'MMM',
        'NNN',
        'OOO',
        'PPP'
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
                }
            ]
        },
        {
            name: '链接',
            menus: [
                { title: 'Github', href: 'https://github.com/tangly1024/NotionNext' },
                {
                    title: '族长',
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
    PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
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
