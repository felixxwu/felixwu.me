import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `
        $h1 EN>CRYP>TION-SE>CURE CHAT

        $bcmd projects
        $bcmd home

        $hr

        This was an excercise to test and advance my knowledge of web security and encryption, and was also a good opportunity to learn how to use websockets. It is a secure and anonymous one-to-one chat with self-deleting messages. The messages are encrypted using a symmetric AES cipher.

        $b Feature overview:
        • Enter a chat room using a previously agreed and secure password
        • Using Websockets, messages can be sent and received in real-time
        • Messages are encrypted symmetrically using AES
        • Messages arrive hidden, and when they are opened they are deleted after a timer reaches zero

        $b Link:
        $lnk https://chat-secure.herokuapp.com/

        $b Preview:
        $img encrypted_chat.jpg
        `,
        {clear: true}
    ))
}