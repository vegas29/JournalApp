
export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={{
                    backgrounSize: 'cover',
                    backgroundPosition: 'center',
                    objectFit: 'cover',
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_960_720.jpg)'
                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                Lorem ipsum dolor sit amet
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
