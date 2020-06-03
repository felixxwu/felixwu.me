export default {
  title: "Encryption-secure Chat",
  img: "chat.png",
  text: `
  This was an excercise to test and advance my knowledge of web security and encryption, and was also a good opportunity to learn how to use websockets. It is a secure and anonymous one-to-one chat with self-deleting messages. The messages are encrypted using a symmetric AES cipher.

  Feature overview:
  <ul>
    <li>Enter a chat room using a previously agreed and secure password</li>
    <li>Using Websockets, messages can be sent and received in real-time</li>
    <li>Messages are encrypted symmetrically using AES</li>
    <li>Messages arrive hidden, and when they are opened they are deleted after a timer reaches zero</li>
  </ul>
  <a href="https://chat-secure.herokuapp.com/" target="_blank">Live App</a>
  <br>
  <a href="https://github.com/felixxwu/Encryption-secure-chat" target="_blank">GitHub Repo</a>
  <br>
  <br>
  <em>2019</em>
  `
}