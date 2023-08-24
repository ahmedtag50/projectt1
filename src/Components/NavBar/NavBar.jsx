import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useLocation } from 'react-router-dom';
import
{
    faCamera,
    faHome,
    faAdd,
    faUser,
    faDisplay,
    faFileInvoiceDollar,
} from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

export default function NavBar ()
{
    const navigate = useNavigate();
    const location = useLocation();
    const [ isLoading, setIsLoading ] = useState( false );

    const handleMenuItemClick = ( path ) =>
    {
        if ( location.pathname !== path )
        {
            setIsLoading( true );
            setTimeout( () =>
            {
                setIsLoading( false );
                navigate( path );
            }, 300 );
        }
    };

    return (
        <div className="navBar">
            { isLoading && <div className="loading-spinner"></div> }
            <div className={ `Subnav ${ isLoading ? 'loading' : '' }` }>
                <div className='NavHeader'>
                    <div className={ `icon ${ isLoading ? 'rotating' : '' }` }>
                        <FontAwesomeIcon icon={ faCamera } style={ { fontSize: "30px" } } />
                    </div>
                    <h2>ادراة الموقع</h2>
                </div>
                <ul className="menu">
                    <li
                        className={ `menu-item ${ location.pathname === '/ShowProductsPage' ? 'active' : '' }` }
                        onClick={ () => handleMenuItemClick( '/' ) }
                    >
                        <div className="text">عرض المنتجات</div>
                        <div className="icon">
                            <FontAwesomeIcon icon={ faHome } />
                        </div>
                    </li>
                    <li
                        className={ `menu-item ${ location.pathname === '/AddProductsPage' ? 'active' : '' }` }
                        onClick={ () => handleMenuItemClick( '/AddProductsPage' ) }
                    >
                        <div className="text">اضافة منتجات</div>
                        <div className="icon">
                            <FontAwesomeIcon icon={ faAdd } />
                        </div>
                    </li>
                    <li
                        className={ `menu-item ${ location.pathname === '/AddClientsPage' ? 'active' : '' }` }
                        onClick={ () => handleMenuItemClick( '/AddClientsPage' ) }
                    >
                        <div className="text">اضافة عميل</div>
                        <div className="icon">
                            <FontAwesomeIcon icon={ faUser } />
                        </div>
                    </li>
                    <li
                        className={ `menu-item ${ location.pathname === '/ShowClientPage' ? 'active' : '' }` }
                        onClick={ () => handleMenuItemClick( '/ShowClientPage' ) }
                    >
                        <div className="text">العملاء</div>
                        <div className="icon">
                            <FontAwesomeIcon icon={ faDisplay } />
                        </div>
                    </li>
                    <li
                        className={ `menu-item ${ location.pathname === '/InvoicesPage' ? 'active' : '' }` }
                        onClick={ () => handleMenuItemClick( '/InvoicesPage' ) }
                    >
                        <div className="text">الفواتير</div>
                        <div className="icon">
                            <FontAwesomeIcon icon={ faFileInvoiceDollar } />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
