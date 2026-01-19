import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NoteCreateComponent } from './note-create/note-create.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';

@NgModule({
  declarations: [
    NoteCreateComponent,
    NotesListComponent,
    NoteEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class NotesModule {}
