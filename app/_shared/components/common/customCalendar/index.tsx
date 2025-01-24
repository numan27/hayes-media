import { useState } from "react";
import styles from "./style.module.scss";
import { Calendar, dateFnsLocalizer, Event, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { parse, startOfWeek, format, getDay } from "date-fns";
import CustomToolbar from "./customToolbar";
import classNames from "classnames";
import { Icons } from "assets";
import CustomToolTip from "../customToolTip";
import EventCard from "../eventCard";
import { useRouter } from "next13-progressbar";

interface CustomEvent extends Event {
  id: string | any;
  title: string;
  start: Date;
  end: Date;
  slot: string;
  description?: string;
  allDay?: boolean;
}

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface CustomCalendarProps {
  events: CustomEvent[];
  toolbar?: JSX.Element;
  defaultView?: keyof typeof Views;
  height?: number;
  onViewChange?: (view: keyof typeof Views) => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({
  events,
  defaultView = Views.MONTH,
  height = 600,
}) => {
  const [currentView, setCurrentView] = useState<string>(defaultView);
  const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);
  const router = useRouter();

  const handleNavigateEvent = (id: number) => {
    router.push(`/general/eventDetail/${id}`);
  };

  const handleEventClick = (event: CustomEvent) => {
    setSelectedEvent(event);
  };

  return (
    <div className={classNames(styles.container)}>
      <div
      // style={{ whiteSpace: "nowrap" }}
      // className="min-w-full overflow-x-auto"
      >
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={[Views.MONTH, Views.WEEK, Views.DAY]}
          // @ts-ignore
          defaultView={currentView as Views}
          components={{
            // toolbar: CustomToolbar,
            // @ts-ignore
            event: ({ event }: CustomEventProps) => (
              <CustomToolTip
                label={
                  <EventCard
                    id={event.id}
                    key={event.id}
                    img={event.img}
                    time={event.slot}
                    title={event.title}
                    desc={event.description}
                    date={event.date}
                    onButtonClick={() => handleNavigateEvent(event.id)}
                  />
                }
                trigger="click"
              >
                <CustomEventComponent
                  event={event}
                  // @ts-ignore
                  view={currentView}
                />
              </CustomToolTip>
            ),
          }}
          style={{ height: height, margin: "24px" }}
          onSelectEvent={(event) => handleEventClick(event as CustomEvent)}
        />
      </div>
    </div>
  );
};

export default CustomCalendar;

interface CustomEventProps {
  event: any;
  view: "month" | "week" | "day";
}

const CustomEventComponent = ({ event, view }: CustomEventProps) => (
  <div
    className={classNames(
      styles.eventContainer,
      view === "day" && styles.dayViewEvent
    )}
  >
    <div className={styles.eventContent}>
      <div className="flex items-center gap-1 flex-wrap">
        <span>
          <Icons.Clock />
        </span>
        <p>{event.slot}</p>
      </div>
      <h6>{event.title}</h6>
    </div>
  </div>
);
