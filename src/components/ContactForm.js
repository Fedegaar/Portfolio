import React from 'react'
import { useForm } from '../Utils/useForm';
import { BiError } from 'react-icons/bi'
import { container, h2Title, formContainer, textArea, input, inputSubmit, errorsStyle } from './ContactForm.module.css'

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
};

const validateForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    
    if (!form.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido"
    } else
    if (!regexName.test(form.name.trim())){
        errors.name = "El campo 'Nombre' no es valido"
    } 

    if (!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido"
    } else
    if (!regexEmail.test(form.email.trim())){
        errors.name = "El campo 'Email' no es valido"
    } else

    if (!form.subject.trim()) {
        errors.subject = "El campo 'Asunto' es requerido"
    } else

    if (!form.comments.trim()) {
        errors.comments = "El campo 'Comentarios' es requerido"
    } else
    if (!regexComments.test(form.comments.trim())){
        errors.comments = "El campo 'Comentarios' no puede superar los 255 caracteres"
    }
    return errors;
}

const ContactForm = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleSubmit
    } = useForm(initialForm, validateForm);

    return (
        <div className={container}>
            <h3 className={h2Title}>Formulario de Contacto</h3>
            <form className={formContainer} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Escribe tu nombre"
                    onChange={handleChange}
                    value={form.name}
                    required
                    className={input}
                />
                {errors.name && <p className={errorsStyle}>{errors.name}   <BiError/></p>}
                <input
                    type="text"
                    name="email"
                    placeholder="Escribe tu email"
                    onChange={handleChange}
                    value={form.email}
                    required
                    className={input}
                />
                {errors.email && <p className={errorsStyle}>{errors.email} <BiError/></p>}
                <input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    onChange={handleChange}
                    value={form.subject}
                    required
                    className={input}
                />
                {errors.subject && <p className={errorsStyle}>{errors.subject} <BiError/></p>}
                <textarea
                    name="comments"
                    cols="50"
                    rows="5"
                    placeholder="Comentarios"
                    value={form.comments}
                    onChange={handleChange}
                    required
                    className={textArea}
                >
                </textarea>
                    {errors.comments && <p className={errorsStyle}>{errors.comments} <BiError/></p>}
                <input 
                    type="submit" 
                    value="Enviar"
                    className={inputSubmit}
                />
            </form>
        </div>
    )
}

export default ContactForm
