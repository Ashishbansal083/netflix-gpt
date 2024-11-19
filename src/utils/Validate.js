export const checkValidateData = (email,password)=>{
    const isemailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isemailValidate)return "email is not valid"
    if(!isPasswordValidate)return "password is not valid"

    return null;
}