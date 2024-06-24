import { mocked } from 'jest-mock';
import * as hooks from '@/hooks';

jest.mock('@/hooks');

export const mockedHooks = mocked(hooks);
