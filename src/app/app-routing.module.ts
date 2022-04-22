import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignNewTrackingComponent } from './components/assign-new-tracking/assign-new-tracking.component';
import { EditExistingTrackingComponent } from './components/edit-existing-tracking/edit-existing-tracking.component';
import { SearchPreviousTrackingComponent } from './components/search-previous-tracking/search-previous-tracking.component';
import { L2LMainComponent } from './components/l2-lmain/l2-lmain.component';

const routes: Routes = [
  { path: '', component: L2LMainComponent},
  { path: 'AssignNewTracking', component: AssignNewTrackingComponent},
  { path: 'EditExistingTracking', component: EditExistingTrackingComponent},
  { path: 'SearchPreviousTracking', component: SearchPreviousTrackingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
