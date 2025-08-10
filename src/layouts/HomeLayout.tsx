import { Outlet } from 'react-router';
import Footer from '@/components/Home/Footer';
import Header from '@/components/Home/Header';
import useCurrentUser from '@/hooks/useCurrentUser';
import LogedInHeader from '@/components/Home/Header/LogedInHeader';

export default function HomeLayout() {
    const user = useCurrentUser();

    return (
        <section className="min-h-screen flex flex-col bg-background">
            {user ? <LogedInHeader /> : <Header />}
            <Outlet />
            <div className="mt-auto">
                <Footer />
            </div>
        </section>
    );
}
