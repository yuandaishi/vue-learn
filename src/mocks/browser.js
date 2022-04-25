import { setupWorker } from "msw";
import {isApi} from './is/api';

export const mocker = setupWorker(...isApi);