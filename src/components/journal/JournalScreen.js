import { NoteScreen } from "../notes/NoteScreen";
import { NothingSelected } from "./NothingSelected";
import { Sidebar } from "./Sidebar";

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <Sidebar/>

            <main className="main__content">
                {/* <NothingSelected/> */}

                <NoteScreen/>
            </main>
        </div>
    )
}
