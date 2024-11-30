import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthenticationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
