
import { setupWorker } from 'msw';
import placeApiHandlers from './handlers/placeApiHandlers';
import weatherApiHandlers from './handlers/weatherApiHandlers';

const mockApiWorker = setupWorker(...placeApiHandlers, ...weatherApiHandlers);

export default mockApiWorker;