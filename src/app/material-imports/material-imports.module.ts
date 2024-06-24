import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule
  ],
  declarations: [],
  imports: [
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialImportsModule { }
