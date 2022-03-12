
import { setupServer } from 'msw/node';
import placeApiHandlers from './handlers/placeApiHandlers';

const mockApiServer = setupServer(...placeApiHandlers);

export default mockApiServer;