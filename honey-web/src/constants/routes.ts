export const ROUTES = {
  SCOREBOARDS: '/scoreboards',
  NEW_SCOREBOARD: '/scoreboards/new',
  EDIT_SCOREBOARD: (id: string | number) => `/scoreboards/${id}`,
  LOGIN: '/login'
};