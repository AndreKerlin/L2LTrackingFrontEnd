import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignNewTrackingComponent } from './components/assign-new-tracking/assign-new-tracking.component';
import { EditExistingTrackingComponent } from './components/edit-existing-tracking/edit-existing-tracking.component';
import { L2LMainComponent } from './components/l2-lmain/l2-lmain.component';
import { SearchPreviousTrackingComponent } from './components/search-previous-tracking/search-previous-tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignNewTrackingComponent,
    EditExistingTrackingComponent,
    L2LMainComponent,
    SearchPreviousTrackingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
