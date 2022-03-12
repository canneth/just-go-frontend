
import { setupWorker } from 'msw';
import placeApiHandlers from './handlers/placeApiHandlers';

const mockApiWorker = setupWorker(...placeApiHandlers);

export default mockApiWorker;