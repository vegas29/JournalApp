import { useDispatch, useSelector } from "react-redux";
import { startDeleting, startSaveNote, startUploadingImage } from "../../actions/notes";


export const NotesAppBar = () => {

    const dispatch = useDispatch();

    const {active} = useSelector( state => state.notes );

    console.log('active 11', active)

    const handleSave = () =>{
        console.log(active);
        dispatch( startSaveNote( active ) );
    }

    const handlePictureClick = () =>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            dispatch( startUploadingImage(file) );
        }
    }
    
    const handleDelete = () =>{

        dispatch( startDeleting(active.id))
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto del 2022</span>

            <input
                id="fileSelector"
                type='file'
                style={{display:'none'}}
                onChange= { handleFileChange}
            />

            <div className="notes__flex">
                <button 
                    className="btn btn__navbar btn__navbar-picture"
                    onClick={ handlePictureClick}
                >
                    Picture
                </button>

                <button 
                    className="btn  btn__navbar btn__navbar-save"
                    onClick={ handleSave }
                >
                    Save
                </button>

                <button 
                    className="btn  btn__navbar btn__navbar-save btn-danger"
                    onClick={ handleDelete }
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
