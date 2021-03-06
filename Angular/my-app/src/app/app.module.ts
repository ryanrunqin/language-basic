import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecordsService } from './lesson3/records.service';


import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { AppRoutingModule } from './app-routing.module';
import { MyFormComponent } from './my-form/my-form.component';
import { MyTableComponent } from './components/my-table/my-table.component';

import { MatTableModule } from '@angular/material';



@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        Test2Component,
        MyFormComponent,
        MyTableComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserModule,

        FormsModule,

        HttpClientModule,
        AppRoutingModule,

        MatTableModule
    ],
    providers: [RecordsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
