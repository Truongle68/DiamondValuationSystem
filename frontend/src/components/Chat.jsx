import { useState } from 'react';
import AuthPage from './AuthPage';
import ChatPage from './ChatPage';

const Chat = () => {
  const [user, setUser] = useState(undefined)


  if(!user){
    return <AuthPage onAuth={(user)=>setUser(user)} />
  }else
    return <ChatPage user={user} />
}

export default Chat
