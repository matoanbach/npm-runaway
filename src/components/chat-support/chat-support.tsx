"use client"

import { Send } from "lucide-react";
import {
    ChatBubble,
    ChatBubbleAvatar,
    ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import {
    ExpandableChat,
    ExpandableChatHeader,
    ExpandableChatBody,
    ExpandableChatFooter,
} from "@/components/ui/chat/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { Button } from "../ui/button";

import { useChat } from '@ai-sdk/react';


export default function ChatSupport() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <ExpandableChat size="lg" position="bottom-right">
            <ExpandableChatHeader className="flex-col text-center justify-center">
                <h1 className="text-xl font-semibold">Chat with our AI ✨</h1>
                <p>Ask any question for our AI to answer</p>
                <div className="flex gap-2 items-center pt-2">
                    <Button variant="secondary">New Chat</Button>
                    <Button variant="secondary">See FAQ</Button>
                </div>
            </ExpandableChatHeader>
            <ExpandableChatBody>
                <ChatMessageList>
                    {messages.map((message, index) => (
                        <ChatBubble variant={message.role == "user" ? "sent" : "received"}>
                            <ChatBubbleAvatar src='' fallback={message.role == "user" ? "you" : "ai"}/>
                            <ChatBubbleMessage variant={message.role == "user" ? "sent" : "received"}>
                                {message.content}
                            </ChatBubbleMessage>
                        </ChatBubble>
                    ))}

                </ChatMessageList>
            </ExpandableChatBody>
            <ExpandableChatFooter>
                <form onSubmit={handleSubmit}>
                    <ChatInput
                        value={input}
                        onChange={handleInputChange}
                    />
                    <Button type="submit" size="icon">
                        <Send className="size-4" />
                    </Button>
                </form>
            </ExpandableChatFooter>
        </ExpandableChat>
    );
}