import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Size is required'),
    special: yup 
        .string()
        .min(5, 'Must be more than 5 characters'),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean()

})

export default formSchema;