import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Pages/Loading";
import Footer from "../Components/Footer";

const AuthLayout = () => {
    const { loading } = useContext(AuthContext);
    if(loading) {
        return <Loading></Loading>
    }
    
    return (
        <div>
            {/* Navbar here */}
            <div>
                <NavBar></NavBar>
            </div>
            {/* Navbar here */}

            {/* Main Content here */}
            <main>
                <Outlet></Outlet>
            </main>
            {/* Main Content here */}

            {/* Footer here */}
            <footer className="mt-20">
                <Footer></Footer>
            </footer>
            {/* Footer here */}
        </div>
    );
};

export default AuthLayout;