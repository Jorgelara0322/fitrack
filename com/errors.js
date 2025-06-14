class SystemError extends Error {
    constructor(message) {
        super(message);

        this.name = this.constructor.name
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);

        this.name = this.constructor.name
    }
}
class DuplicityError extends Error {
    constructor(message) {
        super(message);

        this.name = this.constructor.name
    }
}

class CredentialsError extends Error {
    constructor(message) {
        super(message);

        this.name = this.constructor.name
    }
}

class AuthorizationError extends Error {
    constructor(message) {
        super(message);

        this.name = this.constructor.name
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);

        this.name = this.constructor.name;
    }
}

class RangeError extends Error {
    constructor(message) {
        super(message);

        this.name = this.constructor.name;
    }
}

const errors = {
    SystemError,
    NotFoundError,
    DuplicityError,
    CredentialsError,
    AuthorizationError,
    ValidationError,
    RangeError
}

export default errors;