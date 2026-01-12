import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteEditComponent } from './note-edit/note-edit.component';



@NgModule({
  declarations: [
    NotesListComponent,
    NoteCreateComponent,
    NoteEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotesModule { }
