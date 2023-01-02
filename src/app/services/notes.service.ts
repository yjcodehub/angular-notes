import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Notes } from '../models/Notes';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private fs: Firestore) {}

  /* CRUD operations starts here */
  createNote(note: Notes) {
    note.id = doc(collection(this.fs, 'id')).id;
    return addDoc(collection(this.fs, 'Notes'), note);
  }
  readNotes(): Observable<Notes[]> {
    let noteRef = collection(this.fs, 'Notes');
    return collectionData(noteRef, { idField: 'id' }) as Observable<Notes[]>;
  }
  deleteNote(note: Notes) {
    let docRef = doc(this.fs, `Notes/${note.id}`);
    return deleteDoc(docRef);
  }
  updateNote(note: Notes, notes: any) {
    let docRef = doc(this.fs, `Notes/${note.id}`);
    return updateDoc(docRef, notes);
  }
}
