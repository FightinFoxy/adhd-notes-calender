export interface Task {
    id: string;
    title: string;
    description?: string;
    priority: 1 | 2 | 3 | 4;        //1:Urgent,2:Important,3:Normal,4:Low
    status: 'todo'| 'in-progress' | 'done' | 'archived';
    estimatedDuration?: number; //minutes
    actualDuration?: number; //minutes
    energyLevel: 'low' | 'medium' | 'high';
    dueDate?: Date;
    calendarEventId?: string; //Links to calender event
    noteIds: string[]; //Links to related notes
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface CalendarEvent{
    id: string;
    title: string;
    description?:  string;
    startDate: Date;
    endDate: Date;
    priority: 1 | 2 | 3 | 4; // Same priority system as tasks
    taskIds: string[]; //Links to related tasks
    noteIds: string[]; //Links to related notes
    isAllDay: boolean;
    color?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Note{
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    taskIds: string[];  //Links to related tasks
    tags: string[];     //Links to related calendar events
    priority?: 1 | 2 | 3 | 4; //Optional priority for notes
    color?: string; // For visual organisation

}

export interface UserSettings{
    theme: 'light' | 'dark';
    defaultPriority: 1 | 2 | 3 | 4;
    notificationEnabled: boolean;
    timeFormat: '12h' | '24';
    firstDayOfWeek: 0 | 1; //0: Sunday, 1: Monday
    autoArchiveCompletedTasks: boolean;
    defaultTaskEnergyLevel: 'low' | 'medium' | 'high';

}


export interface DashboardStats{

}

export interface SigninForm{

}

export interface SignUpForm{

}

export interface User{

}

