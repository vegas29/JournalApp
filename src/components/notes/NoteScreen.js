import { NotesAppBar } from "./NotesAppBar"


export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>
            

            <div className="notes__content">

                <h2 className="notes__title">Crea una nueva tarjeta</h2>
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__img"
                >
                    <img
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3643a446463165.585530c44d950.png"
                        alt="imagen"
                    />
                </div>
            </div>
        </div>
    )
}
