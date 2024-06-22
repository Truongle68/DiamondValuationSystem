import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatPage = (props) => {

  return(
    <div style={{height: '100vh'}}>
      <PrettyChatWindow
        projectId='a64c63be-3214-4a9d-ad35-d6a6a0432a78'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
      />
    </div>
  )
}

export default ChatPage