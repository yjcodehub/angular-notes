import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Notes } from '../../models/Notes';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  note = new Notes();
  notes = [];
  constructor(private noteService: NotesService) {}

  ngOnInit(): void {
    this.noteService.readNotes();
  }

  resetValue() {}

  addNote() {
    this.noteService.createNote(this.note).then(() => {});
  }
  editNote() {}
  deleteNote() {}
}
