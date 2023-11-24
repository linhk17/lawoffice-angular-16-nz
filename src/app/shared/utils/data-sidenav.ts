export const menuSideNav = [
  {
    icon: 'dashboard',
    title: 'Dashboard',
    link: 'dashboard',
  },
  {
    icon: 'pie-chart',
    title: 'Manage Quote',
    link: 'manage-quote',
  },
  {
    icon: 'calendar',
    title: 'Time Appointment',
    children: [
      {
        icon: 'pie-chart',
        title: 'All Time Appointment',
        link: 'manage-calendar'
      },
      {
        icon: 'dashboard',
        title: 'All Event',
      },
      {
        icon: 'dashboard',
        title: 'Cancel Event',
      },
    ],
  },
  {
    icon: 'pie-chart',
    title: 'Manage Info',
    children: [
        {
          icon: 'profile',
          title: 'Manage Profile',
        },
        {
          icon: 'setting',
          title: 'Setting',
        },
        {
          icon: 'dashboard',
          title: 'Help & Contact',
        },
      ],
  },
];
