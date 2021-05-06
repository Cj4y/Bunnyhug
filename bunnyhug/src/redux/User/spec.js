import { types } from './../../actions/types';
import usersReducer from './user.reducer';

describe('User Reducer', () => {

    it('Should return default state', () => {
        const newState = usersReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {
        const users = [{ email: 'Test 1', password: 't1'}, { email: 'Test 2', password: 't2'}, { email: 'Test 3', password: 't3'}];
        const newState = usersReducer(undefined, {
            type: types.SIGN_IN_SUCCESS,
            payload: users
        });
        expect(newState).toEqual(users);

    });

    it('Should return new state if receiving type', () => {
        const users = [{ email: 'Test 1'}, { email: 'Test 2'}, { email: 'Test 3'}];
        const newState = usersReducer(undefined, {
            type: types.RESET_PASSWORD_SUCCESS,
            payload: users
        });
        expect(newState).toEqual(users);

    });

    it('Should return new state if receiving type', () => {
        const users = [{ email: 'Test 1'}, { email: 'Test 2'}, { email: 'Test 3'}];
        const newState = usersReducer(undefined, {
            type: types.INITIAL_STATE,
            payload: users
        });
        expect(newState).toEqual(users);

    });
});
