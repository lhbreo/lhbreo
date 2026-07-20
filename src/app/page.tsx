'use client'

import { useState } from 'react'
import Link from 'next/link'

// 导航链接类型
interface NavLink {
  name: string
  href: string
  description: string
}

// 科普文章类型
interface Article {
  id: number
  title: string
  category: string
  summary: string
  date: string
  views: number
}

// 社区帖子类型
interface Post {
  id: number
  author: string
  content: string
  cancerType: string
  replies: number
  likes: number
  time: string
}

// 模拟数据 - 科普文章
const articles: Article[] = [
  {
    id: 1,
    title: '肺癌的早期筛查：哪些人需要做低剂量CT？',
    category: '肺癌',
    summary: '低剂量螺旋CT是肺癌早筛的金标准，建议长期吸烟者、55岁以上人群定期检查...',
    date: '2026-07-19',
    views: 3256
  },
  {
    id: 2,
    title: '乳腺癌自查：月经后7-10天最佳',
    category: '乳腺癌',
    summary: '乳腺癌早期发现治愈率超过90%，每月一次的自我检查非常重要...',
    date: '2026-07-18',
    views: 2891
  },
  {
    id: 3,
    title: '胃癌与饮食：这些习惯增加风险',
    category: '胃癌',
    summary: '高盐饮食、腌制食品、幽门螺杆菌感染是胃癌的主要诱因...',
    date: '2026-07-17',
    views: 2104
  },
  {
    id: 4,
    title: '肝癌三部曲：肝炎→肝硬化→肝癌',
    category: '肝癌',
    summary: '乙肝、丙肝患者是肝癌高危人群，规范治疗可有效阻断病情进展...',
    date: '2026-07-16',
    views: 1876
  },
  {
    id: 5,
    title: '肠癌警报：大便性状改变要警惕',
    category: '结直肠癌',
    summary: '大便带血、大便变细、排便习惯改变可能是肠癌的早期信号...',
    date: '2026-07-15',
    views: 1654
  },
  {
    id: 6,
    title: '甲状腺结节：95%是良性，不必过度恐慌',
    category: '甲状腺癌',
    summary: '甲状腺结节非常常见，拿到检查报告先别慌，听听专科医生怎么说...',
    date: '2026-07-14',
    views: 1432
  }
]

// 模拟数据 - 社区帖子
const posts: Post[] = [
  {
    id: 1,
    author: '阳光明媚',
    content: '父亲肺癌晚期，靶向治疗3个月，肿瘤缩小了40%，感谢医学进步！',
    cancerType: '肺癌',
    replies: 28,
    likes: 156,
    time: '2小时前'
  },
  {
    id: 2,
    author: '抗癌勇士',
    content: '乳腺癌术后化疗第二次，记录一下真实反应：恶心但能忍受，头发开始掉了...',
    cancerType: '乳腺癌',
    replies: 45,
    likes: 234,
    time: '4小时前'
  },
  {
    id: 3,
    author: '家属小李',
    content: '想问问有没有肝癌病友群？刚确诊，需要了解更多信息...',
    cancerType: '肝癌',
    replies: 19,
    likes: 87,
    time: '6小时前'
  },
  {
    id: 4,
    author: '幸运草',
    content: '肠癌康复5年了！当初医生说最多2年，现在活得好好的，给大家打气！',
    cancerType: '结直肠癌',
    replies: 67,
    likes: 412,
    time: '8小时前'
  }
]

// 统计数据
const stats = [
  { number: '50,000+', label: '注册患者' },
  { number: '1,200+', label: '权威专家' },
  { number: '10,000+', label: '科普文章' },
  { number: '5,000+', label: '康复故事' }
]

// 专家类型
interface Expert {
  name: string
  title: string
  hospital: string
  specialty: string
  avatar: string
}

const experts: Expert[] = [
  {
    name: '张建国',
    title: '主任医师',
    hospital: '北京协和医院',
    specialty: '肺癌',
    avatar: '张'
  },
  {
    name: '李秀英',
    title: '教授',
    hospital: '复旦大学肿瘤医院',
    specialty: '乳腺癌',
    avatar: '李'
  },
  {
    name: '王明远',
    title: '主任医师',
    hospital: '中山大学附属肿瘤医院',
    specialty: '肝癌',
    avatar: '王'
  },
  {
    name: '陈晓燕',
    title: '副主任医师',
    hospital: '四川大学华西医院',
    specialty: '胃肠道肿瘤',
    avatar: '陈'
  }
]

// 导航配置
const navLinks: NavLink[] = [
  { name: '首页', href: '/', description: '网站首页' },
  { name: '科普教育', href: '/education', description: '权威医学科普' },
  { name: '患者社区', href: '/community', description: '病友交流互助' },
  { name: '专家专栏', href: '/experts', description: '专家答疑解惑' },
  { name: '知识库', href: '/knowledge', description: '抗癌知识库' },
  { name: '参与捐赠', href: '/donate', description: '奉献爱心' },
  { name: '志愿者', href: '/volunteer', description: '志愿者招募' }
]

// 癌症类型列表
const cancerTypes = ['肺癌', '乳腺癌', '肝癌', '胃癌', '结直肠癌', '甲状腺癌', '食管癌', '胰腺癌', '卵巢癌', '宫颈癌']

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'article' | 'community'>('article')
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl">🎗️</span>
                <span className="text-xl font-bold text-pink-600">抗癌网</span>
              </Link>
            </div>

            {/* 桌面端导航 */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-pink-600 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* 用户操作 */}
            <div className="flex items-center space-x-3">
              <button className="text-gray-600 hover:text-pink-600 text-sm">登录</button>
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-700 transition-colors">
                注册
              </button>
              {/* 移动端菜单按钮 */}
              <button
                className="lg:hidden p-2"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* 移动端菜单 */}
          {showMobileMenu && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 hover:text-pink-600 py-2"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 主视觉区域 */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            用爱守护每一颗抗癌的心
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            携手同行，科学抗癌，让爱与希望传递
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              免费咨询专家
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              浏览科普知识
            </button>
          </div>

          {/* 统计数据 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
                <div className="text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 快速入口 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/education" className="flex items-center p-4 bg-blue-50 rounded-xl hover:shadow-md transition-shadow">
              <span className="text-3xl mr-3">📚</span>
              <div>
                <div className="font-semibold text-gray-800">科普教育</div>
                <div className="text-sm text-gray-500">权威医学知识</div>
              </div>
            </Link>
            <Link href="/community" className="flex items-center p-4 bg-green-50 rounded-xl hover:shadow-md transition-shadow">
              <span className="text-3xl mr-3">💬</span>
              <div>
                <div className="font-semibold text-gray-800">患者社区</div>
                <div className="text-sm text-gray-500">病友交流互助</div>
              </div>
            </Link>
            <Link href="/experts" className="flex items-center p-4 bg-purple-50 rounded-xl hover:shadow-md transition-shadow">
              <span className="text-3xl mr-3">👨‍⚕️</span>
              <div>
                <div className="font-semibold text-gray-800">专家专栏</div>
                <div className="text-sm text-gray-500">在线咨询</div>
              </div>
            </Link>
            <Link href="/donate" className="flex items-center p-4 bg-orange-50 rounded-xl hover:shadow-md transition-shadow">
              <span className="text-3xl mr-3">💝</span>
              <div>
                <div className="font-semibold text-gray-800">奉献爱心</div>
                <div className="text-sm text-gray-500">支持抗癌事业</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 科普教育 + 患者社区 切换区域 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* 标签切换 */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex border-b">
              <button
                className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                  activeTab === 'article'
                    ? 'border-pink-600 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('article')}
              >
                📖 科普教育
              </button>
              <button
                className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                  activeTab === 'community'
                    ? 'border-pink-600 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('community')}
              >
                💬 患者社区
              </button>
            </div>
            <Link href={activeTab === 'article' ? '/education' : '/community'} className="text-pink-600 hover:text-pink-700 text-sm">
              查看更多 →
            </Link>
          </div>

          {/* 科普文章列表 */}
          {activeTab === 'article' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/education/${article.id}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-pink-600">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{article.summary}</p>
                    <div className="flex items-center mt-4 text-gray-400 text-xs">
                      <span>👁️ {article.views}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* 患者社区列表 */}
          {activeTab === 'community' && (
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-semibold">
                      {post.author[0]}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-800">{post.author}</div>
                      <div className="flex items-center text-xs text-gray-400">
                        <span className="px-2 py-0.5 bg-gray-100 rounded-full">{post.cancerType}</span>
                        <span className="ml-2">{post.time}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{post.content}</p>
                  <div className="flex items-center text-gray-400 text-sm space-x-4">
                    <button className="flex items-center hover:text-pink-600">
                      <span>❤️</span>
                      <span className="ml-1">{post.likes}</span>
                    </button>
                    <button className="flex items-center hover:text-pink-600">
                      <span>💬</span>
                      <span className="ml-1">{post.replies}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 专家团队 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">权威专家团队</h2>
            <p className="text-gray-500 mt-2">来自全国顶级三甲医院的肿瘤专家</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-2xl font-bold mx-auto mb-4">
                  {expert.avatar}
                </div>
                <h3 className="font-semibold text-gray-800">{expert.name}</h3>
                <p className="text-sm text-pink-600">{expert.title}</p>
                <p className="text-xs text-gray-500 mt-1">{expert.hospital}</p>
                <p className="text-xs text-gray-400 mt-1">{expert.specialty}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/experts"
              className="inline-block border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              查看全部专家
            </Link>
          </div>
        </div>
      </section>

      {/* 癌症类型导航 */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">按癌种查找</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {cancerTypes.map((type) => (
              <Link
                key={type}
                href={`/community?type=${encodeURIComponent(type)}`}
                className="px-6 py-3 bg-white rounded-full text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors shadow-sm"
              >
                {type}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 底部信息 */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🎗️</span>
                <span className="text-xl font-bold text-white">抗癌网</span>
              </div>
              <p className="text-sm">
                专注肿瘤防治科普教育与患者互助公益平台，用科学的力量守护健康。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">快速链接</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/education" className="hover:text-pink-400">科普教育</Link></li>
                <li><Link href="/community" className="hover:text-pink-400">患者社区</Link></li>
                <li><Link href="/experts" className="hover:text-pink-400">专家专栏</Link></li>
                <li><Link href="/donate" className="hover:text-pink-400">奉献爱心</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">关于我们</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-pink-400">平台介绍</Link></li>
                <li><Link href="/contact" className="hover:text-pink-400">联系我们</Link></li>
                <li><Link href="/privacy" className="hover:text-pink-400">隐私政策</Link></li>
                <li><Link href="/terms" className="hover:text-pink-400">用户协议</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">联系我们</h4>
              <ul className="space-y-2 text-sm">
                <li>📧 info@anticancer.cn</li>
                <li>📞 400-888-8888</li>
                <li>📍 北京市朝阳区建国路88号</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>© 2026 抗癌网 版权所有 | 备案号：京ICP备XXXXXXXX号</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
