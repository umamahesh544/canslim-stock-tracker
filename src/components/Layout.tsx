import React from 'react';
import { LayoutDashboard, TrendingUp, BookOpen, Settings, Bell, Search, Menu } from 'lucide-react';
import { cn } from '../lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavItemProps {
    icon: React.ElementType;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

const NavItem = ({ icon: Icon, label, active, onClick }: NavItemProps) => (
    <button
        onClick={onClick}
        className={cn(
            "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors",
            active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
    >
        <Icon className="w-5 h-5" />
        <span>{label}</span>
    </button>
);



export const Layout = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border hidden md:flex flex-col bg-card">
                <div className="p-6 border-b border-border">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                        GrowthTradr
                    </h1>
                    <p className="text-xs text-muted-foreground mt-1">CANSLIM Strategy</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <NavItem
                        icon={LayoutDashboard}
                        label="Dashboard"
                        active={location.pathname === '/'}
                        onClick={() => navigate('/')}
                    />
                    <NavItem
                        icon={TrendingUp}
                        label="Screener"
                        active={location.pathname === '/screener'}
                        onClick={() => navigate('/screener')}
                    />
                    <NavItem icon={BookOpen} label="CANSLIM Guide" onClick={() => alert("Guide coming soon!")} />
                    <NavItem icon={Settings} label="Settings" onClick={() => alert("Settings coming soon!")} />
                </nav>

                <div className="p-4 border-t border-border">
                    <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm font-medium">Market Status</p>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="w-2 h-2 rounded-full bg-up animate-pulse" />
                            <span className="text-xs text-green-400">Confirmed Uptrend</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-16 border-b border-border bg-card/50 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-10">
                    <div className="md:hidden">
                        <button className="p-2 hover:bg-muted rounded-md">
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex-1 max-w-xl mx-4 hidden md:block">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search symbol, pattern..."
                                className="w-full bg-muted/50 border border-border rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 hover:bg-muted rounded-full transition-colors">
                            <Bell className="w-5 h-5 text-muted-foreground" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
                        </button>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                    </div>
                </header>

                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};
