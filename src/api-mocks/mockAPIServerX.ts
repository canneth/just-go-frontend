
import { setupServer } from 'msw/node';
import placeAPIHandlers from './handlers/placeAPIHandlersX';
import weatherAPIHandlers from './handlers/weatherAPIHandlersX';

const mockAPIServer = setupServer(...placeAPIHandlers, ...weatherAPIHandlers);

export default mockAPIServer;