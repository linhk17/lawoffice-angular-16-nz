import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { TimeAppointment } from 'src/app/shared/models/time-appointment.interface';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { TimeAppointmentService } from 'src/app/services/time-appointment.service';
import { QuoteService } from 'src/app/services/quote.service';
@Component({
  selector: 'app-manage-calendar',
  templateUrl: './manage-calendar.component.html',
  styleUrls: ['./manage-calendar.component.scss'],
})
export class ManageCalendarComponent {
  Events: any[] = [];
  timeAppointments: TimeAppointment[] = [];
  data: any;
  showModal: boolean = false;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth, timeGridWeek, timeGridDay, listWeek',
    },
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
  };
  constructor(
    private timeService: TimeAppointmentService,
    private quoteService: QuoteService
  ) {}
  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }
  ngOnInit() {
    this.timeService
      .getAllTime()
      .pipe()
      .subscribe((res) => {
        this.timeAppointments = res;
        res.map((item: any) =>
          this.Events.push({
            id: item._id,
            title: item.tieu_de,
            start: item.thoi_gian.start,
            end: item.thoi_gian.end,
          })
        );
      });
    setTimeout(() => {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      events: this.Events,
      eventClick: this.getEvent.bind(this),
    };
    }, 100);
  }
  getEvent(info: any) {
    this.timeService
      .getById(info.event._def.publicId)
      .pipe()
      .subscribe((time) => {
        this.quoteService
          .getById(time.phieu_bao_gia)
          .pipe()
          .subscribe((res) => {
            this.showModal = true;
            this.data = {
              ...res,
              ...time
            };
          });
      });
  }
}
