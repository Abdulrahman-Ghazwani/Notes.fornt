import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
// import { Note } from '../notes.module';
import { Note } from '../note.model';



@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit{
  
  notes: Note[] = [];
  errorMessage = '';
  

  constructor(private notesService: NotesService){

  }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void{
    this.notesService.getNotes().subscribe({
      next: (data) => {
        this.notes = data;
      },
      error: () => {
        this.errorMessage = 'Failed to load notes';
      }
    });
  }


  deleteNote(id: number): void {
    if (!confirm('Are you sure you want to delete this note?')) {
      return;
    }

    this.notesService.deleteNote(id).subscribe({
      next: () => {
        // refresh list after delete
        this.notes = this.notes.filter(note => note.id !== id);
      },
      error: () => {
        alert('Failed to delete note');
      }
    });
  }
}
