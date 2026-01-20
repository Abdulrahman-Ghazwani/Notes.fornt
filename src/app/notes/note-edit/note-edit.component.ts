import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NotesService } from '../notes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit{

  note!: Note;
  successMessage = '';
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService,
    private router: Router
  ){}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.notesService.getNoteById(id).subscribe({
      next: (data) => {
        this.note = data;
      }, 
      error: () => {
        this.errorMessage = 'Failed to load note';
      }
    });
  }


  updateNote(): void {
    this.successMessage = '';
    this.errorMessage = '';

    this.notesService.updateNote(this.note.id!, this.note).subscribe({
      next: () => {
        this.successMessage = 'Note updated successfully';
      }, 
      error: () => {
        this.errorMessage = 'Failed to update note';
      }
    });
  }



}
