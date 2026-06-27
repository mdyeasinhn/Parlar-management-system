import Sidebar from "@/components/shared/Sidebar";

const DashboardLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="flex ">
            <Sidebar/>
            {children}
        </div>
    );
};

export default DashboardLayout;