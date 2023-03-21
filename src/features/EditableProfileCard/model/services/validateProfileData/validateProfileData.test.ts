import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 29,
    country: Country.Russia,
    lastname: 'tnd',
    firstname: 'nik',
    city: 'Kolomna',
    currency: Currency.USD,
    avatar: 'url.avatar',
};

describe('validateProfileData.test', () => {
    test('success', async() => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name ', async() => {
        const result = validateProfileData({ ...data, firstname: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async() => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async() => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect city', async() => {
        const result = validateProfileData({ ...data, city: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });

    test('incorrect username', async() => {
        const result = validateProfileData({ ...data, username: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USERNAME,
        ]);
    });

    test('incorrect currency', async() => {
        const result = validateProfileData({ ...data, currency: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_CURRENCY,
        ]);
    });

    test('incorrect all fields', async() => {
        const result = validateProfileData({ });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_CURRENCY,
            ValidateProfileError.INCORRECT_AVATAR,
            ValidateProfileError.INCORRECT_USERNAME,
        ]);
    });
});
