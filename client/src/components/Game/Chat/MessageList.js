import './Chat.scss'

const MessageList = (props) => {
  return (
    <ul className='message-list'>
      {props.messages.map((msg, idx) => (
        <li key={idx} className='message-list--item'>
          <b style={{ color: msg.color }}>{msg.name}: </b>
          {msg.msg} ------- score {msg.score}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
