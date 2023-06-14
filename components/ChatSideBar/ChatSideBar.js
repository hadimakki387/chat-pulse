import Link from 'next/link'
import React from 'react'

function ChatSideBar() {
  return (
    <div className='bg-slate-900 text-white'>
    
    <Link href={"/api/auth/logout"}>
        Logout
    </Link>
    
    </div>
  )
}

export default ChatSideBar