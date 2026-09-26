const Notification = ({ messages }: { messages: string[] }) => {
  return (
    <ul style={{ "color": "red" }}>
      {messages.map((msg) => (<li>{msg}</li>))}
    </ul>
  )
}
export default Notification