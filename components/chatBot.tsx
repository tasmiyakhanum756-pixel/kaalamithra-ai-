"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Send, Bot, ChevronDown, Phone } from "lucide-react"
import Image from "next/image"

interface Message {
  role: "user" | "bot"
  content: string
}

const QUICK_REPLIES = [
  "What services do you offer?",
  "Tell me about AI solutions",
  "How does pricing work?",
  "What is your process?",
  "How can I contact you?",
]

const WELCOME_MESSAGE =
  "👋 Hi there! Welcome to **KAALAMITHRA**! I'm your AI-powered virtual assistant. I can answer any questions about our services, pricing, technology, and more. How can I help you today?"

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: WELCOME_MESSAGE },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const getAIResponse = useCallback(async (userMessage: string) => {
    // Build message history for context (last 6 messages)
    const history = messages.slice(-6)

    try {
      const abortController = new AbortController()
      const timeoutId = setTimeout(() => abortController.abort(), 20000) // 20s client-side timeout

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, history }),
        signal: abortController.signal,
      }).finally(() => clearTimeout(timeoutId))

      const data = await res.json()
      return data.reply || "I'm sorry, I couldn't generate a response. Please contact us at **tech@kaalamithra-ai.com** and our team will be happy to help!"
    } catch {
      return "I apologize, but I'm experiencing a temporary issue. Please reach out to us at **tech@kaalamithra-ai.com** or call **+91 88840 14055** 📞"
    }
  }, [messages])

  const simulateTyping = async (userMessage: string) => {
    setIsTyping(true)

    // Simulate typing delay (shorter for the AI to feel responsive)
    const botReply = await getAIResponse(userMessage)

    // Ensure a minimum typing feel
    await new Promise((r) => setTimeout(r, 300))

    setMessages((prev) => [...prev, { role: "bot", content: botReply }])
    setIsTyping(false)
  }

  const handleSend = () => {
    const trimmed = inputValue.trim()
    if (!trimmed || isTyping) return

    setMessages((prev) => [...prev, { role: "user", content: trimmed }])
    setInputValue("")
    simulateTyping(trimmed)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  const handleQuickReply = (text: string) => {
    if (isTyping) return
    setMessages((prev) => [...prev, { role: "user", content: text }])
    simulateTyping(text)
  }

  const toggleChat = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Floating Action Group (WhatsApp + Call) shown when chat is closed */}
      {!isOpen && (
        <div className="flex flex-col items-center gap-3 mb-2">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918884014055?text=Hi%20KAALAMITHRA!%20I%27d%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
          </a>

          {/* Call Button */}
          <a
            href="tel:+918884014055"
            className="group relative w-14 h-14 rounded-full bg-gray-900 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center"
            aria-label="Call us"
          >
            <Phone className="w-6 h-6 text-white" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          </a>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[540px] max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-gray-200/60 flex flex-col overflow-hidden animate-scale-in origin-bottom-right">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-red-600 text-white px-5 py-4 flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm">KAALAMITHRA AI Assistant</p>
              <p className="text-[11px] text-white/80 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                Powered by Gemini AI
              </p>
            </div>
            <button
              onClick={toggleChat}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
              aria-label="Close chat"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-white rounded-br-md shadow-sm"
                      : "bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100"
                  }`}
                >
                  <div className="whitespace-pre-wrap">
                    {msg.content.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <strong key={i} className="font-semibold">
                            {part.slice(2, -2)}
                          </strong>
                        )
                      }
                      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
                      if (linkMatch) {
                        return (
                          <a
                            key={i}
                            href={linkMatch[2]}
                            className={`underline ${msg.role === "user" ? "text-white/90" : "text-primary"}`}
                          >
                            {linkMatch[1]}
                          </a>
                        )
                      }
                      return <span key={i}>{part}</span>
                    })}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies (only shown near the start) */}
          {messages.length <= 3 && !isTyping && (
            <div className="px-4 pb-2 shrink-0">
              <div className="flex flex-wrap gap-1.5">
                {QUICK_REPLIES.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-3 py-1.5 transition-colors border border-gray-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-200 p-3 shrink-0 bg-white">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-gray-400"
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-1.5">
              AI-powered responses · May occasionally be imperfect
            </p>
          </div>
        </div>
      )}

      {/* Chatbot FAB Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="group relative w-16 h-16 rounded-full bg-gradient-to-r from-primary to-red-600 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center p-1"
          aria-label="Open chat"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
            <Image
              src="/bot.png"
              alt="KAALAMITHRA"
              width={56}
              height={56}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-30" />
          {/* Notification dot */}
          <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-green-500 rounded-full border-2 border-white" />
        </button>
      )}
    </div>
  )
}