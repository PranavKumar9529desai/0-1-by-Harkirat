const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    if (!validateEmail(username) || password.length < 6) {
        return null;
    }

    const payload = {
        username,
        password,
    };

    const token = jwt.sign(payload, jwtPassword);
    return token;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword);
        return true;
    } catch (err) {
        return false;
    }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    try {
        const decoded = jwt.decode(token);
        if (decoded !== null) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}

/**
 * Validates if a given string is a valid email address.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} Returns true if the email is a valid email address.
 *                    Returns false otherwise.
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    // .test returns true is pattern is matched and false pattern is not matched.
    
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
