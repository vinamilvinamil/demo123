import React from 'react'
import NavBar from './NavBar';
import Notify from './Notify';
import Footer from './Footer';
import AdminNavBar from './AdminNavBar';
import AdminTopBar from './AdminTopBar';
import { useRouter } from 'next/router'
import Router from 'next/router';

Router.onRouteChangeComplete = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
};

const Layout = ({ children, menus }) => {
    const pageNoHeading = ['/login', '/signup'];
    const [showMenu, setShowMenu] = React.useState(true);
    const [admin, setAdmin] = React.useState(false);
    const [noHeader, setNoHeader] = React.useState(false);
    const router = useRouter();
    React.useEffect(() => {
        if (localStorage) {
            let shouldShow = true;
            const role = localStorage.getItem("role");
            shouldShow = (role == 'admin' && router.pathname.startsWith('/admin')) || router.pathname == '/signin' ? false : true;
            setShowMenu(shouldShow);
            setAdmin(role == 'admin' && router.pathname.startsWith('/admin'));

            //check show header
            const pathname = router.pathname;
            let _noHeader = false;
            pageNoHeading.map((url, index) => {
                if(pathname.startsWith(url)) _noHeader = true;
            })
            setNoHeader(_noHeader);
            if (role != 'admin' && router.pathname.startsWith('/admin')) {
                window.location.href = '/signin';
            }
        }
    }, []);
    if(noHeader) {
        return <div>
            <Notify />
            {children}
        </div>
    }
    if(admin) {
        return (
            <div>
                 <Notify />
                <AdminNavBar/>
                <div className='page-content'>
                    <AdminTopBar/>
                    {children}    
                </div>
            </div>
        )
    }

    return (
        <div>
             <Notify />
            {
                showMenu ?
                    <NavBar menus={menus} />
                    : null
            }
            <div className='position-relative overflow-hidden pt-5 pt-lg-3'>
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default Layout;