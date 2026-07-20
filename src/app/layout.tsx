import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '抗癌网 - 用爱守护每一颗抗癌的心',
  description: '专注肿瘤防治科普教育与患者互助公益平台，提供权威医学知识、病友交流、专家咨询等服务。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
