import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';
import { ErrorComponent } from './pages/error/error.component';
import { MenuComponent } from './shared/menu/menu.component';
import { TaskComponent } from './shared/task/task.component';
import { AddTaskComponent } from './shared/add-task/add-task.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { TaskDetailsBodyComponent } from './shared/task-details-body/task-details-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerInlineCalendarExample } from 'src/app/shared/material/datepicker-inline-calendar-example/datepicker-inline.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import '@angular/localize/init';

// Define your routes
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'all-tasks', component: AllTasksComponent },
  { path: 'task-details/:id', component: TaskDetailsComponent },
  { path: 'task-details', component: TaskDetailsComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllTasksComponent,
    ErrorComponent,
    MenuComponent,
    TaskComponent,
    AddTaskComponent,
    TaskDetailsComponent,
    TaskDetailsBodyComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    DatepickerInlineCalendarExample,
    DateInputsModule,
    HttpClientModule,
    FormsModule

  ],
  exports: [DatepickerInlineCalendarExample],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
