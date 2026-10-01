import Sidebar from "@/components/shared/Sidebar";

const DashboardLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="min-h-screen bg-[#fffaf7] text-[#292321] lg:flex">
            <Sidebar/>
            <div className="min-w-0 flex-1">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;