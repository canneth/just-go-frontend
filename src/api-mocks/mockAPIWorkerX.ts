
import { setupWorker } from 'msw';
import placeAPIHandlers from './handlers/placeAPIHandlersX';
import weatherAPIHandlers from './handlers/weatherAPIHandlersX';

const mockAPIWorker = setupWorker(...placeAPIHandlers, ...weatherAPIHandlers);

export default mockAPIWorker;