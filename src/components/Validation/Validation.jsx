const validation = (userData) => {
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2-4}$/i.test(userData.email)){
        errors.email = "El email no es valdio"
    }

    if (!userData.email){
        errors.email = 'Ingresa un email'
    }

    if (userData.email.length > 35) {
        errors.email = 'El email no superar los 35 caracteres'
    }

    if (!/.*\d+.*/.test(userData.password)) {
        errors.password = 'La contraseña debe tener al menos 1 numero'
    }

    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'Ingresa una contraseña entre 6 y 10 caracteres'
    }
    return errors;
}

export default validation;