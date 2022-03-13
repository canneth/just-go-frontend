
import { setupWorker } from 'msw';
import placeAPIHandlers from './handlers/placeAPIHandlers';
import weatherAPIHandlers from './handlers/weatherAPIHandlers';

const mockAPIWorker = setupWorker(...placeAPIHandlers, ...weatherAPIHandlers);

export default mockAPIWorker;