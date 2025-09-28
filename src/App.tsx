import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon';
import { CreateContentModal } from './components/CreateContentModal'


function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='flex p-4'>
      <CreateContentModal open={showModal} onClose={() => setShowModal(false)}/>
      <div className='flex justify-end gap-4'>
        <Button variant='Primary' startIcon={<PlusIcon/>} text={"Add Content"} onClick={() => setShowModal(true)}/>
        <Button variant='Secondary' startIcon={<ShareIcon/>} text={"Share"} />
      </div>
      <div className='flex gap-4'>
        <Card type='Twitter' link="https://x.com/kirat_tw/status/1633685473821425666" title='First Tweet'/>
        <Card type='Youtube' link='https://www.youtube.com/watch?v=Kv_1wzPXUu0' title='First Video'/>
      </div>
    </div>
  )
}

export default App
