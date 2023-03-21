import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { ThunkConfig, ThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';

interface LoginByUserNameProps {
    username: string,
    password: string,
}

export const loginByUserName = createAsyncThunk<
    User,
    LoginByUserNameProps,
    ThunkConfig<string>
    >(
        'login/loginByUserName',
        async(authData, thunkApi) => {
            const { extra, dispatch, rejectWithValue } = thunkApi;
            try {
                const response = await extra.api.post('/login', authData);

                if (!response.data) {
                    throw new Error();
                }

                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(userActions.setAuthData(response.data));
                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
