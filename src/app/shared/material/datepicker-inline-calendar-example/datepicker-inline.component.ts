import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { NativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
/** @title Datepicker inline calendar example */
@Component({
  selector: 'datepicker-inline-calendar-example',
  templateUrl: 'datepicker-inline-calendar-example.html',
  styleUrls: ['datepicker-inline-calendar-example.css'], // <- Ensure this is an array
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule,MatFormFieldModule,MatInputModule],
  // exports:[DatepickerInlineCalendarExample]
})
export class DatepickerInlineCalendarExample {
  selected: Date | null = null;
}