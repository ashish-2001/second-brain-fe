import { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { CreateContentModal } from '../components/CreateContentModal';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/useContent';
import { BACKEND_URL } from '../config';
import axios from "axios";



function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const contents = useContent();

  return (
    <div>
      <div className='bg-purple-100 h-screen ml-76'>
      <Sidebar/>
        <div className='flex justify-between gap-4 p-4'>
          <Button variant="Primary" startIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 -mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          } onClick={() => setSidebarOpen(true)}/>
          <div className='flex gap-2'>
            <Button variant='Primary' startIcon={<PlusIcon/>} text={"Add Content"} onClick={() => setShowModal(true)}/>
            <Button variant='Secondary' startIcon={<ShareIcon/>} text={"Share"} onClick={async () => { const response =  await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
              share: true
            },{
              headers:{
                "Authorization": localStorage.getItem("token")
              }
            })

            const shareUrl = `http://localhost:5500/share/${response.data.hash}`;
            alert(shareUrl);
          }}/>
          </div>
        </div>
        <div className='flex p-4'>
        <CreateContentModal open={showModal} onClose={() => setShowModal(false)}/>
        
        <div className='flex gap-4'>
          {contents.map((link, type, title) => <Card type={type} link={link} title={title}/> )}
          
        </div>
      </div>
    </div>
    </div>
  )
}

export {
  Dashboard
}
