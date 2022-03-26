
import Logo from '../../assets/images/logo.png';
import Profile from '../../assets/images/profile.jpg';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                
                <div className="journal__image">
                    <img
                        className="journal__img"
                        src={Logo}
                    />
                </div>

                <div className="journal__new-entry">
                    <i className="fa-solid fa-calendar"></i>
                    <p>New Entry</p>
                </div>

                <JournalEntries/>

                <div className="journal__logout">

                    <img
                        className="journal__logout-img"
                        src={Profile}
                    />
                    
                    <p>Alejandro</p>

                    <button
                        className="btn btn-logout">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </button>
                </div>

            </div>
        </aside>
    )
}
