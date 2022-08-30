import { useState } from 'react';
import { helpHttp } from './helpHttp'
export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(false);

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(form))
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(validateForm(form))

        if(Object.keys(errors).length === 0){
            alert("Procesando informacion");
            setLoading(true);
            helpHttp()
                .post("https://formsubmit.co/ajax/garciaf.dev@gmail.com",{
                    body:form,
                    headers:{
                        "Content-Type":"application/json",
                        Accept:"application/json",
                    },
                })
                .then((res) => {
                    setLoading(false);
                    setResponse(true);
                    setTimeout(() => setResponse(false), 3000);
                })
        } else {
            return;
        }

    };

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
};