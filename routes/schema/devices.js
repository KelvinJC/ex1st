const deviceSchema = {
    name: {
        exists: { 
            errorMessage: 'name is required.',
        }, 
        isString: {
            errorMessage: 'must be string.',
        },
        isLength: {
            errorMessage: "first_name has invalid length",
            options: {min: 1}
        },
    },
    price: { 
        optional: {
            options: { nullable: true, checkFalsy: true }
        },
        toFloat: true,
        isDecimal: {
            errorMessage: 'price must be a valid decimal number.',
        }
    },
    desc: { 
        exists: { 
            errorMessage: 'desc is required.',
        }, 
        isEmpty: { negated: true }, // alternative to isLength validator
        isString: {
            errorMessage: 'must be string.',
        }

    },
}

export {deviceSchema};