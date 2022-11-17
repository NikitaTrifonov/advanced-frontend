import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
    const errors: ValidateProfileError[] = [];

    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        age, firstname, lastname, country, city, currency, avatar, username,
    } = profile;

    if (!firstname || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }

    if (!currency) {
        errors.push(ValidateProfileError.INCORRECT_CURRENCY);
    }

    if (!avatar) {
        errors.push(ValidateProfileError.INCORRECT_AVATAR);
    }

    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    return errors;
};
