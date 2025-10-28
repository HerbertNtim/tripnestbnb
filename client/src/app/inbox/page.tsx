import ConversationPage from '@/components/Conversation'
import React from 'react'

const Inbox = () => {
  return (
    <main className='max-w-[1500px] mx-auto px-6 pb-6 space-y-6'>
      <h1 className='text-2xl my-8'>Inbox</h1>

      <ConversationPage />
      <ConversationPage />
      <ConversationPage />
    </main>
  )
}

export default Inbox
