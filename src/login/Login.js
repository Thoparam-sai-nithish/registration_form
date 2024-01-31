    import React ,{useState} from 'react'
    import {useForm} from 'react-hook-form' 
    import { IoMail } from "react-icons/io5";
    import { RiLockPasswordFill } from "react-icons/ri";
    import { BsFillTelephoneFill } from "react-icons/bs";
    import { FaUserAlt } from "react-icons/fa";
    import './Login.css'

    function Login() {
        const [formState, setFormState] = useState('login')
        const { register, handleSubmit, formState: { errors } } = useForm();
        function submitLogin(data){
            console.log('Login')
            console.log(data);
        }
        function submitSignup(data){
            console.log('Signup')
            console.log(data);
        }

        return (
            <div className="Login">
               <div className="forms">
                    <div className={formState=='login'? 'loginForm active': 'loginForm inactive'}>
                        <form className='' action="" onSubmit={handleSubmit(submitLogin)}>
                            <h2 className='text-success'>Login</h2>
                            <div className="inputBox">
                                <input type="email" name="email" id="loginEmail" required={true} {...register('loginEemail') }/>
                                <IoMail className='inputIcon'/>
                                <span className='inputSpan'>Email</span> 
                            </div>
                            <div className="inputBox">
                                <input type="password" name="password" id="loginPass" required={true} {...register('loginPass') }/>
                                <RiLockPasswordFill className='inputIcon'/>
                                <span className='inputSpan'>Password</span>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="submit" />
                            </div>
                        </form>
                    </div>
                    <div className={formState=='signup'?'signupForm active':'signupForm inactive'}>
                        <form className='' action="" onSubmit={handleSubmit(submitSignup)}>
                            <h2 className='text-success'>Signup</h2>
                            <div className="inputBox">
                                <input type="email" name="email" id="signupEmail" required={true} {...register('signupEmail') }/>
                                <IoMail className='inputIcon'/>
                                <span className='inputSpan'>Email</span>
                            </div>
                            <div className="inputBox">
                                <input type="password" name="password" id="signupPass" required={true} {...register('signupPass') }/>
                                <RiLockPasswordFill className='inputIcon'/>
                                <span className='inputSpan'>Password</span>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="submit" />
                            </div>
                        </form>
                    </div>
                
                    <div className={formState=='signup'?'overlay-left active':'overlay-left inactive'}>
                        <h2>This is Overlay for Login</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium labore, corrupti quia placeat molestias perspiciatis alias totam mollitia accusamus repellendus eos! Consequatur quis modi nulla quia in architecto ab doloremque quod tempora. Ea, voluptatem quo architecto eligendi facere cumque ratione nesciunt explicabo? Sed tempore ea velit asperiores laudantium deserunt.</p>
                        <button className="btn btn-success" onClick={()=>{setFormState('login')}}>Login</button>
                    </div>
                    <div className={formState=='login'? 'overlay-right active':'overlay-right inactive'}>
                        <h2>This is overlay for Signup</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum doloremque debitis, at eligendi inventore quia facere autem, repellat, amet minima vel. Quaerat, facere debitis eveniet quod ipsa consectetur deserunt aliquam. Quae perferendis ratione consequuntur, nostrum nulla ipsam unde voluptatibus dolorem earum voluptate tempora obcaecati, modi, repudiandae officiis delectus? Quis, maxime.</p>
                        <button className="btn btn-success" onClick={()=>{setFormState('signup')}}>Signup</button>
                    </div>  
                    </div>
            </div>
        )
    }

    export default Login