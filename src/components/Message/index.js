// Write your code here
import './index.css'

const Message = props => {
  const {messageText} = props
  return <h1 className="message-text">{messageText}</h1>
}
export default Message
