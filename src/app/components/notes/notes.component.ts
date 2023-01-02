import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotesService } from 'src/app/services/notes.service';
import { Notes } from '../../models/Notes';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  note = new Notes();
  noteData = {};
  constructor(private noteService: NotesService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  resetValue() {}

  addNote() {
    this.noteService.createNote(this.note).then(() => {});
  }
  getNotes() {
    this.noteService.readNotes().subscribe((res) => {
      this.noteData = res;
      console.log(this.noteData);
    });
  }
  editNote() {}
  deleteNote() {}
}
