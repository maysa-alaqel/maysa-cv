import React from 'react';

// المكونات الفرعية تبقى كما هي
function Header() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="name">ميساء عبدالباقي العاقل</h1>
        <p className="tagline">أروي القصص... بالأكواد والألوان ✨</p>
      </div>
    </header>
  );
}

function Card({ title, icon, children }) {
  return (
    <section className="card">
      <h2>
        {title}
        <span className="icon">{icon}</span>
      </h2>
      {children}
    </section>
  );
}

function Footer() {
    return (
        <footer className="footer">
            <p>صُنِع بكل حب وشغف ❤️</p>
        </footer>
    );
}


// المكون الرئيسي مع المحتوى المحدث
function App() {
  return (
    <>
      <Header />
      <main>
        <Card title="مرحباً بكم في عالمي" icon="👋">
          <p>
            أنا ميساء، طالبة في عالم تقنية المعلومات الواسع. أؤمن بأن الأكواد يمكن أن تكون جميلة ومرحة تماماً مثل حلقة كرتون مفضلة أو رواية ممتعة. هنا أشارككم جزءاً من شخصيتي التي تتنقل بين عالم المنطق في البرمجة وعوالم الخيال الساحرة في المسلسلات والألعاب.
          </p>
        </Card>
        
        {/* --- القسم التقني الجديد --- */}
        <Card title="الخبرات والمهارات التقنية" icon="💻">
            <div className="skills-grid" style={{textAlign: 'right'}}>
                <div>
                  <h3 style={{color: '#B9A4D3'}}>تطوير الواجهات (Frontend)</h3>
                  <p>HTML5, CSS3, JavaScript (ES6+), React.js</p>
                </div>
                <div>
                  <h3 style={{color: '#B9A4D3'}}>أدوات التطوير</h3>
                  <p>Git, GitHub, VS Code, Chrome DevTools</p>
                </div>
                <div>
                  <h3 style={{color: '#B9A4D3'}}>مفاهيم أساسية</h3>
                  <p>تصميم المواقع المتجاوبة (Responsive Design)، معمارية المكونات (Component Architecture).</p>
                </div>
            </div>
        </Card>

        <Card title="إبداعاتي" icon="🎨">
            <h4>صفحة الويب هذه! (مشروع بورتفوليو)</h4>
            <p>
              بناء واجهة مستخدم تفاعلية بالاعتماد على معمارية المكونات في React. تم التركيز على إدارة الحالة (State Management) بشكل بسيط لتقديم تجربة استخدام سلسة، مع تصميم متجاوب يعمل على مختلف الشاشات.
            </p>
            <p><strong>التقنيات المستخدمة:</strong> React, JSX, CSS3</p>
            <hr style={{borderTop: '1px dashed #eee', margin: '15px 0'}} />
            <h4>تصاميم ورسومات رقمية</h4>
            <p>في أوقات فراغي، أحب أن أرسم وأصمم شخصيات كرتونية بسيطة أو خلفيات ملونة. هذه الهواية تساعدني على فهم الألوان والتنسيق، وهو ما أطبقه في تصميم صفحات الويب.</p>
        </Card>
        
        <Card title="أشياء أحبها" icon="💖">
            <p>
                <strong>الروايات:</strong> أهرب من عالم الأكواد إلى عوالم الخيال والشخصيات المختلفة. القصص تعلمني كيف أنظر للأمور من زوايا متعددة.
            </p>
            <p>
                <strong>ألعاب الفيديو والمغامرات:</strong> هي ليست مجرد تسلية، بل تدريب ممتع على حل المشكلات والتفكير الاستراتيجي للوصول إلى الهدف.
            </p>
             <p>
                <strong>الطبيعة والمناظر الخلابة:</strong> أجد في تأمل الطبيعة، من أشجارها الشاهقة إلى بحارها الهادئة، إلهاماً وسلاماً يساعدني على تصفية ذهني وشحن طاقتي الإبداعية.
            </p>
        </Card>
        
        <Card title="لنتواصل!" icon="✉️">
            <p>يسعدني دائماً التعرف على أشخاص جدد يشاركونني نفس الشغف بالإبداع والتقنية.</p>
             <ul>
                <li><strong>البريد الإلكتروني:</strong> Maysa.Alaqel@mail.com</li>
                <li><strong>حساب GitHub:</strong> github.com/your-username</li>
            </ul>
        </Card>

      </main>
      <Footer />
    </>
  );
}

export default App;

