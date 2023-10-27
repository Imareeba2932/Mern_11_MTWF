import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

// step4: validation schema
const LoginSchema = Yup.object().shape({
    name: Yup.string()
    .required('Required')
    .min(3, 'Too short')
    .max(15, 'Too long'),
    email: Yup.string()
    .email('Invalid email').required('Required'),
    password: Yup.string()
    .min(8, 'Too short')
    .max(20, 'Too long')
    .required('Required'),
})


const Login = () => {
    //step1 : formik initialization
    const loginForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        // step5: validation schema
        onSubmit: (values, {resetForm}) =>
        {
            console.log(values)
            resetForm()
        },
        // step6: validation of LoginSchema
        validationSchema: LoginSchema
        })
  return (
    <div className='container'>
        <div className="col">
            <div className="card w-25 d-block mx-auto">
                <div className="card-header">
                    <h3>Login</h3>
                </div>
                <div className="card-body">
                    {/* step3 : handling when submit */}
                    <form onSubmit={loginForm.handleSubmit}>
                        {/* step2 : main form handling */}
                        <div className="form-group">
                            <label>Name</label>
                            <span style={{color: 'red', fontsize: '10', marginLeft: 10}}>{loginForm.touched.name && loginForm.errors.name}</span>
                            <input type="text" className="form-control mb-4"
                            id="name"
                            onChange={loginForm.handleChange} 
                            value={loginForm.values.name}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <span style={{color: 'red', fontsize: '10', marginLeft: 10}}>{loginForm.touched.email && loginForm.errors.email}</span>
                            <input type="text" className="form-control mb-4"
                            id="email"
                            onChange={loginForm.handleChange} 
                            value={loginForm.values.email} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <span style={{color: 'red', fontsize: '10', marginLeft: 10}}>{loginForm.touched.password && loginForm.errors.password}</span>
                            <input type="text" className="form-control mb-4" 
                            id="password"
                            onChange={loginForm.handleChange} 
                            value={loginForm.values.password}/>
                        </div>
                        <button type='submit' className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Login