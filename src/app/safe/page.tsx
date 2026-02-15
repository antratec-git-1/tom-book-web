
import { SafeDashboard } from "@/components/dashboard/SafeDashboard";

export default function SafePage() {
    return (
        <main className="flex-grow px-6 pt-8 pb-32 max-w-lg mx-auto w-full">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary dark:text-white leading-tight">Travel-Safe</h2>
                <p className="text-xs text-primary/60 dark:text-white/60 font-medium uppercase tracking-wider mt-1">Premium Guidance Dashboard</p>
            </div>
            <SafeDashboard />
        </main>
    );
}
