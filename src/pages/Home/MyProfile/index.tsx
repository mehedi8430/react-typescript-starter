import PageTitle from '@/components/Home/PageTitle';
import PageTopPanel from '@/components/Home/PageTopPanel';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ProfileIcon from '@/assets/svgs/Profile.svg?react';
import PasswordIcon from '@/assets/svgs/shield-security.svg?react';
import DueListIcon from '@/assets/svgs/calender_due.svg?react';
import PaymentHistoryIcon from '@/assets/svgs/payment_history.svg?react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PersonalInfo } from './Tabs/PersonalInfo';
import { PasswordSecurity } from './Tabs/PasswordSecurity';
import DueList from './Tabs/DueList';
import { PaymentHistory } from './Tabs/PaymentHistory';

export default function MyProfile() {
    const [activeTab, setActiveTab] = useState('profile-info');

    const renderContent = () => {
        switch (activeTab) {
            case 'profile-info':
                return (
                    <PersonalInfo />
                    // <div className="p-6 bg-white rounded-lg shadow">
                    //     Profile Info Content
                    // </div>
                );
            case 'password_security':
                return (
                    <PasswordSecurity />
                    // <div className="p-6 bg-white rounded-lg shadow">
                    //     Password Security Content
                    // </div>
                );
            case 'due_list':
                return <DueList />;
            case 'payment_history':
                return (
                    <PaymentHistory />
                    // <div className="p-6 bg-white rounded-lg shadow">
                    //     Payment History Content
                    // </div>
                );
            default:
                return (
                    <div className="p-6 bg-white rounded-lg shadow">
                        Select a tab to view content
                    </div>
                );
        }
    };

    const ButtonContent = ({
        icon: Icon,
        text,
        isActive,
    }: {
        icon: React.FC<{ className?: string }>;
        text: string;
        isActive: boolean;
    }) => (
        <>
            <div
                className={`p-2 rounded-full ${
                    isActive ? 'bg-white text-primary' : 'bg-primary/10 text-primary'
                }`}
            >
                <Icon className="size-5" />
            </div>
            <div className="flex items-center justify-between w-full ml-3">
                {text}
                <ChevronRight className="size-4" />
            </div>
        </>
    );

    return (
        <div>
            <PageTopPanel content={<PageTitle title="Profile" />} />
            <main className="container mx-auto space-y-10 flex gap-5">
                {/* Left sidebar with buttons */}
                <div className="bg-muted min-h-screen p-5 rounded-2xl space-y-3 w-1/5 ">
                    <div className="flex items-center gap-4 w-full mb-10">
                        <Avatar className=" size-14">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-2xl font-semibold">John Doe</h1>
                            <p className="text-muted-foreground">johndoe@gmail.com</p>
                        </div>
                    </div>
                    <Button
                        variant={activeTab === 'profile-info' ? 'default' : 'secondary'}
                        className={`w-full justify-start h-14 ${
                            activeTab === 'profile-info' ? 'bg-primary hover:bg-primary' : ''
                        }`}
                        onClick={() => setActiveTab('profile-info')}
                    >
                        <ButtonContent
                            icon={ProfileIcon}
                            text="Profile Information"
                            isActive={activeTab === 'profile-info'}
                        />
                    </Button>

                    <Button
                        variant={activeTab === 'password_security' ? 'default' : 'secondary'}
                        className={`w-full justify-start h-14 ${
                            activeTab === 'password_security' ? 'bg-primary hover:bg-primary' : ''
                        }`}
                        onClick={() => setActiveTab('password_security')}
                    >
                        <ButtonContent
                            icon={PasswordIcon}
                            text="Password & Security"
                            isActive={activeTab === 'password_security'}
                        />
                    </Button>

                    <Button
                        variant={activeTab === 'due_list' ? 'default' : 'secondary'}
                        className={`w-full justify-start h-14 ${
                            activeTab === 'due_list' ? 'bg-primary hover:bg-primary' : ''
                        }`}
                        onClick={() => setActiveTab('due_list')}
                    >
                        <ButtonContent
                            icon={DueListIcon}
                            text="Due List"
                            isActive={activeTab === 'due_list'}
                        />
                    </Button>

                    <Button
                        variant={activeTab === 'payment_history' ? 'default' : 'secondary'}
                        className={`w-full justify-start h-14 ${
                            activeTab === 'payment_history' ? 'bg-primary hover:bg-primary' : ''
                        }`}
                        onClick={() => setActiveTab('payment_history')}
                    >
                        <ButtonContent
                            icon={PaymentHistoryIcon}
                            text="Payment History"
                            isActive={activeTab === 'payment_history'}
                        />
                    </Button>
                </div>

                {/* Right content area */}
                <div className="w-4/5">{renderContent()}</div>
            </main>
        </div>
    );
}
