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

  constructor(private notesService: NotesService){

  }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes() {
    this.notesService.getNotes().subscribe(data => {
      this.notes = data;
    })
  }

  deleteNote(id: number){
    this.notesService.deleteNote(id).subscribe(() => {
      this.loadNotes();
    })
  }

}
