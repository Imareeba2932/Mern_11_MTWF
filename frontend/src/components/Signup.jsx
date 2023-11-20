import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

// step4: validation schema
const SignupSchema = Yup.object().shape({
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


const Signup = () => {
    const navigate = useNavigate();
    //step1 : formik initialization
    const SignupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: async (values, action) => {

            console.log(values);

            const res = await fetch('http://localhost:5000/user/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            console.log(res.status)
            action.resetForm();

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Signup Success',
                    text: 'You have been successfully signed up!',
                })
                navigate('/login');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })

            }
        },
        validationSchema: SignupSchema
        })
  return (
    <div className='container'>
        <div className="col">
            <div className="card w-25 d-block mx-auto">
                <div className="card-header">
                    <h3>Signup</h3>
                </div>
                <div className="card-body">
                    {/* step3 : handling when submit */}
                    <form onSubmit={SignupForm.handleSubmit}>
                        {/* step2 : main form handling */}
                        <div className="form-group">
                            <label>Name</label>
                            <span style={{color: 'red', fontsize: '10', marginLeft: 10}}>{SignupForm.touched.name && SignupForm.errors.name}</span>
                            <input type="text" className="form-control mb-4"
                            id="name"
                            onChange={SignupForm.handleChange} 
                            value={SignupForm.values.name}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <span style={{color: 'red', fontsize: '10', marginLeft: 10}}>{SignupForm.touched.email && SignupForm.errors.email}</span>
                            <input type="text" className="form-control mb-4"
                            id="email"
                            onChange={SignupForm.handleChange} 
                            value={SignupForm.values.email} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <span style={{color: 'red', fontsize: '10', marginLeft: 10}}>{SignupForm.touched.password && SignupForm.errors.password}</span>
                            <input type="text" className="form-control mb-4" 
                            id="password"
                            onChange={SignupForm.handleChange} 
                            value={SignupForm.values.password}/>
                        </div>
                        <button type='submit' className="btn btn-primary">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Signup