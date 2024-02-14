import Sidebar from "./sidebar";

export default function Layout({ children }) {
    return (
        <>
            <div className="body layout-light side-menu">
            <main className="main-content bg-primary">
                <Sidebar />
                <div className="contents">
                    <div class="dm-page-content">
                        <div class="container-fluid">
                            {children}
                        </div>
                    </div>
                </div>
                ta
            </main>
            </div>
        </>
    );
}