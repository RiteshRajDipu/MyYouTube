import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);
    

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(20)
                })
            );
        }, 4000);

        return () => clearInterval(i);
    }, []);

    return (
        <>
            <div className="w-full h-[350px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
               <div>
               {chatMessages.map((chat, index) => (
                    <ChatMessage
                        key={index}
                        name={chat.name}
                        message={chat.message}
                    />
                ))}
               </div>
            </div>

            <form 
              className="w-[350px] p-1 ml-2 mt-1 border border-black flex" onSubmit={(e) => {
                e.preventDefault()
                dispatch(addMessage({
                    name: "Akshay",
                    message: liveMessage
                }))
                setLiveMessage("");
              }}
              >
               <input 
                 className="p-0.5 w-96" 
                 type="text"
                 value={liveMessage}
                 onChange={(e) => {
                    setLiveMessage(e.target.value)
                 }}
               />
               <button className="p-1 mx-2 bg-green-100">Send</button>
            </form>
        </>
    )
}

export default LiveChat;