
import { setupServer } from 'msw/node';
import placeApiHandlers from './handlers/placeApiHandlers';
import weatherApiHandlers from './handlers/weatherApiHandlers';

const mockApiServer = setupServer(...placeApiHandlers, ...weatherApiHandlers);

export default mockApiServer;