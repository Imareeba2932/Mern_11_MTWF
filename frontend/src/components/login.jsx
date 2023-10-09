import React from 'react'

const Login = () => {
  return (
    <div className='container'>
        <div className="col">
            <div className="card w-25 d-block mx-auto">
                <div className="card-header">
                    <h3>Login</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control mb-4" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" className="form-control mb-4" />
                        </div>
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Login