import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Pages/Loading";

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

            {/* Footer here */}
        </div>
    );
};

export default AuthLayout;