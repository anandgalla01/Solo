import { Routes } from '@angular/router';
import { ContactsComponent, DashboardComponent, ExpensesComponent, IncomeComponent, TasksComponent } from './components';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: 'income', component: IncomeComponent },
    { path: 'contacts', component: ContactsComponent },
];
