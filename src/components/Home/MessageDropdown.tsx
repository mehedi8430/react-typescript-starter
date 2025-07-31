import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { FiSearch, FiX, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router';
import { MessageCircle } from 'lucide-react';
import ConversationView from './ConversationView';

type Message = {
    id: number;
    name: string;
    time: string;
    content: string;
    avatar: string;
};

type ConversationMessage = {
    sender: string;
    content: string;
    time: string;
};

export default function MessageDropdown() {
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [conversation, setConversation] = useState<ConversationMessage[]>([]);

    const messages: Message[] = [
        {
            id: 1,
            name: 'Brooklyn Simmons',
            time: '2 minutes ago',
            content: 'Market analysis for AAPL is ready for review...',
            avatar: 'BS',
        },
        {
            id: 2,
            name: 'Marvin McKinney',
            time: '5 minutes ago',
            content: 'Can we schedule a meeting for next week?',
            avatar: 'MM',
        },
        {
            id: 3,
            name: 'Courtney Henry',
            time: '15 minutes ago',
            content: 'The quarterly report has been uploaded',
            avatar: 'CH',
        },
        {
            id: 4,
            name: 'Savannah Nguyen',
            time: '1 hour ago',
            content: 'Please review the budget proposal',
            avatar: 'SN',
        },
        {
            id: 5,
            name: 'Esther Howard',
            time: '2 hours ago',
            content: 'Client feedback on the latest design',
            avatar: 'EH',
        },
        {
            id: 6,
            name: 'Wade Warren',
            time: '3 hours ago',
            content: 'The contract needs your signature',
            avatar: 'WW',
        },
        {
            id: 7,
            name: 'Dianne Russell',
            time: '5 hours ago',
            content: 'Team meeting notes from yesterday',
            avatar: 'DR',
        },
        {
            id: 8,
            name: 'Robert Fox',
            time: '6 hours ago',
            content: 'New project requirements document',
            avatar: 'RF',
        },
        {
            id: 9,
            name: 'Arlene McCoy',
            time: '8 hours ago',
            content: 'Your vacation request was approved',
            avatar: 'AM',
        },
        {
            id: 10,
            name: 'Jacob Jones',
            time: '1 day ago',
            content: 'Reminder: Performance review tomorrow',
            avatar: 'JJ',
        },
        {
            id: 11,
            name: 'Jane Cooper',
            time: '1 day ago',
            content: 'Please approve the marketing materials',
            avatar: 'JC',
        },
        {
            id: 12,
            name: 'Ronald Richards',
            time: '2 days ago',
            content: 'The client has some additional requests',
            avatar: 'RR',
        },
    ];

    const dummyConversations: Record<number, ConversationMessage[]> = {
        1: [
            {
                sender: 'Brooklyn Simmons',
                content: 'Hi there! I have the market analysis ready for you.',
                time: '10:30 AM',
            },
            {
                sender: 'You',
                content: 'Great! Can you share the key findings?',
                time: '10:32 AM',
            },
            {
                sender: 'Brooklyn Simmons',
                content: 'Sure! AAPL shows strong growth potential with 15% YOY increase.',
                time: '10:33 AM',
            },
            {
                sender: 'You',
                content: 'That sounds promising. What about the risks?',
                time: '10:35 AM',
            },
            {
                sender: 'Brooklyn Simmons',
                content: 'Main risk is supply chain disruption, but we have mitigation plans.',
                time: '10:37 AM',
            },
        ],
        2: [
            {
                sender: 'Marvin McKinney',
                content: 'Hello! Are you available for a meeting next week?',
                time: '9:15 AM',
            },
            {
                sender: 'You',
                content: 'What day were you thinking?',
                time: '9:20 AM',
            },
            {
                sender: 'Marvin McKinney',
                content: 'How about Wednesday at 2 PM?',
                time: '9:21 AM',
            },
            {
                sender: 'You',
                content: 'That works for me. Should I prepare anything?',
                time: '9:22 AM',
            },
        ],
        3: [
            {
                sender: 'Courtney Henry',
                content: 'FYI - The quarterly report has been uploaded to the shared drive.',
                time: '8:45 AM',
            },
            {
                sender: 'You',
                content: 'Thanks! Any major changes from last quarter?',
                time: '8:50 AM',
            },
            {
                sender: 'Courtney Henry',
                content: 'Revenue is up 8% and we reduced expenses by 3%.',
                time: '8:52 AM',
            },
        ],
        4: [
            {
                sender: 'Savannah Nguyen',
                content: 'Please review the budget proposal when you get a chance.',
                time: 'Yesterday',
            },
            {
                sender: 'You',
                content: "Will do. What's the deadline for feedback?",
                time: 'Yesterday',
            },
            {
                sender: 'Savannah Nguyen',
                content: 'End of day Friday would be great.',
                time: 'Yesterday',
            },
        ],
        5: [
            {
                sender: 'Esther Howard',
                content: "Here's the client feedback on the latest design mockups.",
                time: 'Monday',
            },
            {
                sender: 'You',
                content: 'Overall positive?',
                time: 'Monday',
            },
            {
                sender: 'Esther Howard',
                content: 'Mostly positive - just a few small tweaks requested.',
                time: 'Monday',
            },
        ],
        6: [
            {
                sender: 'Wade Warren',
                content: 'The contract is ready for your signature.',
                time: '11:30 AM',
            },
            {
                sender: 'You',
                content: 'Great, where do I need to sign?',
                time: '11:35 AM',
            },
        ],
        7: [
            {
                sender: 'Dianne Russell',
                content: 'Here are the team meeting notes from yesterday.',
                time: '9:00 AM',
            },
            {
                sender: 'You',
                content: 'Thanks for sending these over.',
                time: '9:05 AM',
            },
        ],
        8: [
            {
                sender: 'Robert Fox',
                content: "I've uploaded the new project requirements document.",
                time: '4:30 PM',
            },
            {
                sender: 'You',
                content: "Got it. I'll review this afternoon.",
                time: '4:35 PM',
            },
        ],
        9: [
            {
                sender: 'Arlene McCoy',
                content: 'Your vacation request for next month has been approved!',
                time: '2:15 PM',
            },
            {
                sender: 'You',
                content: "That's great news! Thanks for processing this.",
                time: '2:20 PM',
            },
        ],
        10: [
            {
                sender: 'Jacob Jones',
                content:
                    'Reminder: We have your performance review scheduled for tomorrow at 10 AM.',
                time: '3:00 PM',
            },
            {
                sender: 'You',
                content: "Thanks for the reminder. I'll be there!",
                time: '3:05 PM',
            },
        ],
        11: [
            {
                sender: 'Jane Cooper',
                content: 'Can you please approve the new marketing materials?',
                time: '1:30 PM',
            },
            {
                sender: 'You',
                content: "Sure, I'll take a look right now.",
                time: '1:35 PM',
            },
        ],
        12: [
            {
                sender: 'Ronald Richards',
                content: 'The client has some additional requests for the project.',
                time: '11:00 AM',
            },
            {
                sender: 'You',
                content: 'What kind of changes are they asking for?',
                time: '11:05 AM',
            },
        ],
    };

    const handleMessageClick = (message: Message) => {
        setSelectedMessage(message);
        setConversation(dummyConversations[message.id] || []);
    };

    const handleBackToList = () => {
        setSelectedMessage(null);
    };

    return (
        <section>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="size-8 bg-primary/10">
                        <MessageCircle className="size-4" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-[28.125rem] space-y-2 px-4 py-2.5">
                    {/* Updated header section */}
                    <div className="flex justify-between items-center pb-2">
                        {selectedMessage ? (
                            <>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleBackToList}
                                    className="text-muted-foreground"
                                >
                                    <FiChevronLeft className="h-4 w-4" />
                                </Button>
                                <h3 className="text-lg font-semibold">Messages</h3>
                                <Button variant="ghost" size="sm" className="text-muted-foreground">
                                    <FiX className="h-4 w-4" />
                                </Button>
                            </>
                        ) : (
                            <>
                                <h3 className="text-lg font-semibold">Messages</h3>
                                <span>Mark all as read</span>
                                <DropdownMenuItem className="cursor-pointer">
                                    <FiX />
                                </DropdownMenuItem>
                            </>
                        )}
                    </div>

                    {!selectedMessage && (
                        <>
                            <div className="relative mb-3">
                                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search messages"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                            </div>
                            <DropdownMenuSeparator />
                        </>
                    )}

                    {selectedMessage ? (
                        <ConversationView
                            message={selectedMessage}
                            conversation={conversation}
                            setConversation={setConversation}
                        />
                    ) : (
                        <>
                            <ScrollArea className="h-[25rem]">
                                {messages.map(message => (
                                    <div
                                        key={message.id}
                                        className="flex items-start gap-3 p-3 my-2 rounded-lg cursor-pointer bg-muted"
                                        onClick={() => handleMessageClick(message)}
                                    >
                                        <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                                            {message.avatar}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-medium truncate">
                                                    {message.name}
                                                </h4>
                                                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                                                    {message.time}
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground truncate">
                                                {message.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </ScrollArea>

                            <DropdownMenuSeparator />

                            <Link to="/dashboard/messages" className="flex justify-center">
                                <Button variant="link">View all messages</Button>
                            </Link>
                        </>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    );
}
