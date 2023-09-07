import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main.component";
import {NgbAccordionDirective, NgbAccordionItem, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    // NgbAccordionDirective,
    // NgbAccordionItem
    NgbModule,
    RouterLink,

  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
