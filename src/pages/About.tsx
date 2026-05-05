import './About.css'

function About() {
  const birthDate = new Date('2003-09-16')
  const today = new Date()
  const age = Math.floor((today.getTime() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000))
  const profileImage = `${import.meta.env.BASE_URL}profile.jpg`

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>個人簡介</h1>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <img
                src={profileImage}
                alt="陳宏傑 個人照片"
                className="profile-photo"
              />
              <div className="image-caption">Photo by 陳宏傑</div>
            </div>
          </div>

          <div className="about-info">
            <div className="intro-card">
              <h2>自我介紹</h2>
              <div className="intro-content">
                <p className="intro-text">
                  大家好，我是 <span className="highlight">陳宏傑</span>。目前就讀金門大學資訊工程學系三年級，平常的休閒活動是打羽球，
                  有在玩的遊戲有英雄聯盟跟神魔之塔，歡迎大家跟我一起玩以及交朋友。
                </p>

                <div className="info-section">
                  <h3>📅 基本信息</h3>
                  <ul className="info-list">
                    <li>
                      <strong>姓名：</strong>
                      <span>陳宏傑</span>
                    </li>
                    <li>
                      <strong>生日：</strong>
                      <span>2003年9月16日</span>
                    </li>
                    <li>
                      <strong>年齡：</strong>
                      <span>{age} 歲</span>
                    </li>
                    <li>
                      <strong>星座：</strong>
                      <span>處女座 ♍</span>
                    </li>
                  </ul>
                </div>

                <div className="info-section">
                  <h3>🎯 興趣愛好</h3>
                  <div className="hobbies">
                    <div className="hobby-item">
                      <span className="hobby-icon">🏸</span>
                      <span className="hobby-name">羽毛球</span>
                      <p>我喜歡打羽毛球，尤其是雙打，我喜歡快節奏的平抽擋來回，以及殺球的快感。</p>
                    </div>
                  </div>
                </div>

                <div className="info-section">
                  <h3>💻 技能</h3>
                  <div className="skills">
                    <div className="skill-item">
                      <span>React</span>
                      <div className="skill-bar">
                        <div className="skill-fill" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span>TypeScript</span>
                      <div className="skill-bar">
                        <div className="skill-fill" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span>Web Design</span>
                      <div className="skill-bar">
                        <div className="skill-fill" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info-section">
                  <h3>🌟 特點</h3>
                  <div className="traits">
                    <div className="trait">熱愛運動</div>
                    <div className="trait">團隊合作</div>
                    <div className="trait">持續學習</div>
                    <div className="trait">創意思維</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
