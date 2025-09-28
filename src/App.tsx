import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon';
import { CreateContentModal } from './components/CreateContentModal'



function App() {
  const [showModal, setShowModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div>
        <div className='flex justify-between gap-4 m-4 '>
          <Button variant="Primary" startIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 -mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          } onClick={() => setSidebarOpen(true)}/>
          <div className='flex gap-2'>
            <Button variant='Primary' startIcon={<PlusIcon/>} text={"Add Content"} onClick={() => setShowModal(true)}/>
            <Button variant='Secondary' startIcon={<ShareIcon/>} text={"Share"} />
          </div>
        </div>
        <div className='flex p-4'>
        <CreateContentModal open={showModal} onClose={() => setShowModal(false)}/>
        
        <div className='flex gap-4'>
          <Card type='Twitter' link="https://x.com/kirat_tw/status/1633685473821425666" title='First Tweet'/>
          <Card type='Youtube' link='https://www.youtube.com/watch?v=Kv_1wzPXUu0' title='First Video'/>
        </div>
      </div>
    </div>
  )
}

export default App
