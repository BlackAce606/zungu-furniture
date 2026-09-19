import { useEffect, useRef, useState } from 'react';
import { CHAT_I18N } from './i18n.js';

function answerFor(text, lang) {
  const t = CHAT_I18N[lang];
  const lower = text.toLowerCase();
  for (const { keys, key } of t.keywordMap) {
    if (keys.some((k) => lower.includes(k))) return t.answers[key];
  }
  return t.fallback;
}

export default function Chatbot({ lang }) {
  const t = CHAT_I18N[lang];
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ who: 'bot', text: t.greeting }]);
  const [input, setInput] = useState('');
  const logRef = useRef(null);
  const inputRef = useRef(null);
  const prevLang = useRef(lang);

  useEffect(() => {
    if (prevLang.current !== lang) {
      prevLang.current = lang;
      setMessages([{ who: 'bot', text: CHAT_I18N[lang].greeting }]);
    }
  }, [lang]);

  const addMsg = (text, who) => {
    setMessages((prev) => [...prev, { who, text }]);
    requestAnimationFrame(() => {
      if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
    });
  };

  const reply = (text) => {
    setTimeout(() => addMsg(text, 'bot'), 350);
  };

  const handleQuickReply = (key, label) => {
    addMsg(label, 'user');
    reply(CHAT_I18N[lang].answers[key]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    addMsg(text, 'user');
    setInput('');
    setTimeout(() => addMsg(answerFor(text, lang), 'bot'), 400);
  };

  const toggleOpen = () => {
    setOpen((o) => {
      const next = !o;
      if (next) requestAnimationFrame(() => inputRef.current?.focus());
      return next;
    });
  };

  const quickKeys = ['make', 'ship', 'custom', 'human'];

  return (
    <div className="chat-widget">
      <button className="chat-toggle" aria-label="Chat with us" onClick={toggleOpen}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </button>

      <div className={`chat-panel${open ? ' open' : ''}`}>
        <div className="chat-header">
          <span>ZUNGU</span>
          <button className="chat-close" aria-label="Close chat" onClick={() => setOpen(false)}>&times;</button>
        </div>

        <div className="chat-log" ref={logRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.who}`}>{m.text}</div>
          ))}
        </div>

        <div className="chat-quick-replies">
          {quickKeys.map((key) => (
            <button key={key} onClick={() => handleQuickReply(key, t.quick[key])}>{t.quick[key]}</button>
          ))}
        </div>

        <form className="chat-input-row" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            placeholder={t.placeholder}
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" aria-label="Send">&rarr;</button>
        </form>
      </div>
    </div>
  );
}
