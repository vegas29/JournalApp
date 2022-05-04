
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import Logo from '../../assets/images/logo.png';
import Profile from '../../assets/images/profile.jpg';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const { name } = useSelector( state => state.auth);
    
    const handleLogout = () =>{
        dispatch( startLogout() )
    }
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                
                <div className="journal__image">
                    <img
                        className="journal__img"
                        src={Logo}
                        alt="logo"
                    />
                </div>

                <div className="journal__new-entry">
                    <i className="fa-solid fa-calendar"></i>
                    <p style={{margin: 0, padding: 10}}>New Entry</p>
                </div>

                <JournalEntries/>

                <div className="journal__logout">

                    <img
                        className="journal__logout-img"
                        src={Profile}
                        alt="profile"
                    />
                    
                    <p>{name}</p>

                    <button
                        className="btn btn-logout"
                        onClick={handleLogout}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </button>
                </div>

            </div>
        </aside>
    )
}
