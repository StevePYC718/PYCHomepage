'use client'

import { useState } from 'react'

export default function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <div className="faq-question" onClick={() => setOpen(!open)}>
        {question}
      </div>
      <div className="faq-answer">{answer}</div>
    </div>
  )
}
