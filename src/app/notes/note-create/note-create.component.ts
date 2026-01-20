import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';
import { Note } from '../note.model';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent {

  note: Note = {
    title: '',
    note: '',
    endingDate: ''
  };

  constructor(
    private notesService: NotesService,
    private router: Router
  ){}


  successMessage = '';
  errorMessage = '';

saveNote(): void {
  this.successMessage = '';
  this.errorMessage = '';

  this.notesService.createNote(this.note).subscribe({
    next: (res) => {
      console.log('✅ Saved:', res);
      this.successMessage = 'Note saved successfully';
      this.note = { title: '', note: '' };
    },
    error: (err) => {
      console.error('❌ Save failed:', err);
      this.errorMessage = `Failed to save note (status: ${err.status})`;
      if (err?.error) {
        console.error('Backend body:', err.error);
      }
    }
  });
}






}
