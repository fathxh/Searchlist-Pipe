import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsertableComponent } from './usertable/usertable.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { NamePipe } from './name.pipe';
import { CompanyPipe } from './company.pipe';
import { DesignationPipe } from './designation.pipe'



@NgModule({
  declarations: [
    UsertableComponent,
    NamePipe,
    CompanyPipe,
    DesignationPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
