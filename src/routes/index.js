import users from './users';
import messages from './messages';
import locations from './locations';
import avatars from './moods';
import personalities from './personalities';
import tags from './tags';
import register from './register';
import login from './login';
import chatrooms from './chatrooms';
import events from './events';
import aws from './aws';
import adminLogin from './admin/login';
import adminUsers from './admin/users';
import adminTags from './admin/tags';
import adminEvents from './admin/events';
import adminMetrics from './admin/metrics';
import adminTos from './admin/tos';
import feedback from './feedback';

const routes = [].concat(
  avatars,
  locations,
  login,
  messages,
  personalities,
  register,
  tags,
  users,
  chatrooms,
  events,
  feedback,
  aws,
  adminLogin,
  adminUsers,
  adminTags,
  adminEvents,
  adminMetrics,
  adminTos,
);

export default routes;
