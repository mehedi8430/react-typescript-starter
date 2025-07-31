import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { FiSend } from 'react-icons/fi';
import { useState } from 'react';

type ConversationMessage = {
    sender: string;
    content: string;
    time: string;
};

type Message = {
    id: number;
    name: string;
    time: string;
    content: string;
    avatar: string;
};

type ConversationViewProps = {
    message: Message;
    conversation: ConversationMessage[];
    setConversation: (messages: ConversationMessage[]) => void;
};

export default function ConversationView({
    message,
    conversation,
    setConversation,
}: ConversationViewProps) {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const newMsg: ConversationMessage = {
            sender: 'You',
            content: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setConversation([...conversation, newMsg]);
        setNewMessage('');
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 border-b pb-2">
                <div className="size-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                    {message.avatar}
                </div>
                <div>
                    <h4 className="font-medium">{message.name}</h4>
                    <p className="text-xs text-muted-foreground">Online</p>
                </div>
            </div>

            <ScrollArea className="h-[20rem] pr-2">
                <div className="space-y-4">
                    {conversation.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${
                                msg.sender === 'You' ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            <div
                                className={`max-w-[80%] rounded-lg p-3 ${
                                    msg.sender === 'You' ? 'bg-primary text-white' : 'bg-gray-100'
                                }`}
                            >
                                <p>{msg.content}</p>
                                <p
                                    className={`text-xs mt-1 ${
                                        msg.sender === 'You'
                                            ? 'text-primary-foreground/70'
                                            : 'text-muted-foreground'
                                    }`}
                                >
                                    {msg.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>

            <div className="flex gap-2 pt-2">
                <input
                    type="text"
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage}>
                    <FiSend className="size-4" />
                </Button>
            </div>
        </div>
    );
}
