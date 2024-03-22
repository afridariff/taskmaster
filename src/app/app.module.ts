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

// Define your routes
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'all-tasks', component: AllTasksComponent },
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
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
