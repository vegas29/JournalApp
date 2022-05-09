import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

import Swal from "sweetalert2";
import { imageUpload } from "../helpers/imageUpload";

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        try {
            const docRef = await addDoc(collection(db, `${uid}/journal/notes`), newNote)
            console.log(docRef);
            
            dispatch( activeNote(docRef.id, newNote));
        } catch (e) {
            console.log(e)
        }


    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note    
    }
});

export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
};

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = ( note ) => {
    return async ( dispatch, getState ) => {

        const {uid} = getState().auth;

        if ( !note.url ){
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);

        try {
            await updateDoc(noteRef, noteToFirestore);
        } catch (error) {
            console.log(error)
        }
        
        dispatch(refreshNote(note.id, noteToFirestore));

        Swal.fire('Saved', note.title, 'success');
        
    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id, 
            ...note
        }
    }
});

export const startUploadingImage = (file) => {
    return async ( dispatch, getState ) => {

        const { active: activeNote } = getState().notes;

        Swal.fire({
            title: 'Subiendo...',
            text: 'Espera un momento...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await imageUpload(file);
        activeNote.url = fileUrl;

        dispatch( startSaveNote(activeNote) );
        
        Swal.close();
    }
}