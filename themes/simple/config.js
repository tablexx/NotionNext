const CONFIG = {

  SIMPLE_LOGO_IMG: '/Logo.webp',
  SIMPLE_TOP_BAR: true, // 显示顶栏
  SIMPLE_TOP_BAR_CONTENT: process.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS || 'CHG',
  SIMPLE_LOGO_DESCRIPTION: process.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION || '请等待几秒钟，如仍未正常加载请尝试刷新几次',

  SIMPLE_AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#',

  SIMPLE_POST_AD_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_AD_ENABLE || false, // 文章列表是否插入广告

  SIMPLE_POST_COVER_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_COVER_ENABLE || false, // 是否展示博客封面

  SIMPLE_ARTICLE_RECOMMEND_POSTS: process.env.NEXT_PUBLIC_SIMPLE_ARTICLE_RECOMMEND_POSTS || false, // 文章详情底部显示推荐

  // 菜单配置
  SIMPLE_MENU_CATEGORY: false, // 显示分类
  SIMPLE_MENU_TAG: false, // 显示标签
  SIMPLE_MENU_ARCHIVE: false, // 显示归档
  SIMPLE_MENU_SEARCH: true // 显示搜索
}
export default CONFIG
