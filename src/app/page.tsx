import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ---------- Hero ---------- */}
      <section className="bg-[url('/barber-hero.jpg')] bg-cover bg-center text-white">
        <div className="backdrop-brightness-50 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider mb-4">
            BAR&nbsp;BER&nbsp;STUDIO
          </h1>
          <p className="text-xl md:text-2xl">広島市西区の理髪店</p>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">当店について</h2>
        <p className="leading-relaxed">
          BAR&nbsp;BER&nbsp;STUDIO は、クラシックからモダンまで幅広いスタイルを提案する理容室です。
          経験豊富な店主によるマンツーマン施術で、リラックスした時間をお過ごしいただけます。
        </p>
      </section>

      {/* ---------- Menu ---------- */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-4">メニュー</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="p-4 border rounded shadow-sm flex justify-between">
              <span>カット &amp; シャンプー</span>
              <span>¥4,000</span>
            </li>
            <li className="p-4 border rounded shadow-sm flex justify-between">
              <span>フェードカット</span>
              <span>¥4,500</span>
            </li>
            <li className="p-4 border rounded shadow-sm flex justify-between">
              <span>シェービング</span>
              <span>¥1,000</span>
            </li>
            <li className="p-4 border rounded shadow-sm flex justify-between">
              <span>カラー</span>
              <span>¥3,500〜</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Reservation ---------- */}
      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">ご予約</h2>
        {/* Google Calendar Appointment Scheduling begin */}
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ30iep-OqjhKItcxrXMRUx4YXVYJspEvjBE7AzdwhI32RF4TsiDQMeURfaGCl0qwgahGUsAHfBU?gv=true"
          style={{ border: 0 }}
          width="100%"
          height="600"
          loading="lazy"
          frameBorder="0"
          title="予約カレンダー"
        />
        {/* Google Calendar Appointment Scheduling end */}
      </section>

      {/* ---------- Access (Google Map) ---------- */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-4">アクセス</h2>
          <p className="mb-4">
            〒730-0033&nbsp;広島県広島市西区西観音町18<br />
            TEL&nbsp;:&nbsp;082-xxx-xxxx
          </p>
          <div className="w-full aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1096.329370575087!2d132.43719692292373!3d34.39004179564474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aa3c53bf6aa39%3A0x3f42ba7bd6214673!2sBAR%20BER%20STUDIO!5e0!3m2!1sen!2sjp!4v1749472861045!5m2!1sen!2sjp"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="店舗地図"
            />
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} BAR&nbsp;BER&nbsp;STUDIO
      </footer>
    </div>
  );
}