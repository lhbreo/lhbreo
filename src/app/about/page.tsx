export default function About() {
  return (
    <div style={{ minHeight: "100vh", padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
        关于抗癌网
      </h1>
      <div style={{ lineHeight: "1.8", color: "#374151", fontSize: "1.1rem" }}>
        <p style={{ marginBottom: "1rem" }}>
          抗癌网是一个综合型抗癌平台，致力于为肿瘤患者及家属提供全方位的支持与服务。
        </p>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "2rem", marginBottom: "1rem" }}>我们的使命</h2>
        <p style={{ marginBottom: "1rem" }}>
          整合国内外优质抗癌资源，为患者搭建一个集科普教育、患者社区、公益捐赠、学术研究于一体的综合平台。
        </p>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "2rem", marginBottom: "1rem" }}>核心功能</h2>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
          <li>📚 抗癌知识库 — 专业、权威的肿瘤科普内容</li>
          <li>💬 患者社区 — 病友互助、经验分享</li>
          <li>❤️ 公益捐赠 — 点滴爱心、点燃希望</li>
          <li>👨‍⚕️ 学术研究 — 推动肿瘤研究进步</li>
        </ul>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "2rem", marginBottom: "1rem" }}>联系我们</h2>
        <p>邮箱：contact@anticancerweb.com</p>
      </div>
    </div>
  );
}
