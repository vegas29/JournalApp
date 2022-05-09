import dayjs from 'dayjs'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({id, date, title, body, url}) => {

    console.log(id, date, title, body, url)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const noteDate = dayjs(date);

    const dispatch = useDispatch();

    const handleEntryClick = () =>{
        dispatch( activeNote(id, {
            date, title, body, url
        }));
    }

    return (
        <div 
            className="journal__entry"
            onClick={handleEntryClick}    
        >
            {url && <div 
                className="journal__entry-picture"
                style={{
                    backgrounSize: 'cover',
                    backgroundPosition: 'center',
                    objectFit: 'cover',
                    backgroundImage: `url(${url})`
                }}
            >
            </div>}

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{days[noteDate.get("d")]}</span>
                <h4>{noteDate.get("D")}</h4>
            </div>
        </div>
    )
}
