import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageSquareText, X, Send } from "lucide-react";
import { detectCustomerQuestion, quickPrompts } from "@/lib/chat-intents";
import { WhatsAppLink } from "@/components/site/WhatsAppButton";

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

const WELCOME: ChatMessage = {
  role: "assistant",
  text: "Namaste! मैं Dimensions Designs Interior की तरफ से आपकी मदद के लिए हूँ। Interior cost, modular kitchen, home या office interiors — कुछ भी पूछें।",
};

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, typing, open]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTyping(true);
    timerRef.current = setTimeout(() => {
      const { reply } = detectCustomerQuestion(text);
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setTyping(false);
    }, 600);
  };

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Chat assistant"
          className="fixed bottom-20 left-4 sm:bottom-24 sm:left-6 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col border border-border bg-card shadow-2xl"
        >
          <div className="flex items-center justify-between bg-ink px-4 py-3">
            <div>
              <p className="font-display text-base text-ink-foreground">
                Dimensions Assistant
              </p>
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-ink-foreground/70">
                Instant answers · Hindi & English
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-ink-foreground/80 transition-colors hover:text-ink-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex max-h-80 min-h-56 flex-col gap-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.role === "user"
                    ? "ml-auto max-w-[85%] bg-primary px-3 py-2 text-sm text-primary-foreground"
                    : "mr-auto max-w-[85%] bg-muted px-3 py-2 text-sm text-foreground"
                }
              >
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="mr-auto bg-muted px-3 py-2 text-sm text-muted-foreground">
                Typing…
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-border px-4 pt-3">
            {quickPrompts.map((qp) => (
              <button
                key={qp.label}
                type="button"
                onClick={() => send(qp.message)}
                className="border border-border px-2.5 py-1 text-[0.7rem] font-medium tracking-wide text-foreground transition-colors hover:border-brass hover:text-brass"
              >
                {qp.label}
              </button>
            ))}
          </div>

          <form
            className="flex items-center gap-2 px-4 py-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Apna sawaal likhein…"
              aria-label="Type your question"
              className="min-w-0 flex-1 border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-brass"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-brass text-ink transition-opacity hover:opacity-90"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-2.5 text-[0.7rem]">
            <Link
              to="/contact"
              className="font-semibold uppercase tracking-[0.14em] text-brass hover:underline"
            >
              Request a Consultation
            </Link>
            <WhatsAppLink className="font-semibold uppercase tracking-[0.14em] text-foreground hover:underline">
              WhatsApp Us
            </WhatsAppLink>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex items-center gap-2 bg-ink px-4 py-3 text-ink-foreground shadow-lg transition-transform motion-safe:hover:scale-105"
      >
        <MessageSquareText className="h-5 w-5" />
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em]">
          Ask Us
        </span>
      </button>
    </>
  );
}
