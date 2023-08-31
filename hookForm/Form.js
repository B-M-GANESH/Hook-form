import React from 'react'
import '../hookForm/Form.css'
import { useForm } from 'react-hook-form'
import image from './image/img2.avif'

const Form = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    // console.log(register);
    const onSubmit = data =>console.log(data);
    // console.log('errors',errors);

  return (
    <div className='container'>
      <div className='row'>
        {/* Form column */}
        
        <div className='column'>

            <div className='left-half'>
                <h1>Contact Us</h1>
                <p>We`re open for any suggestion or just to have a chat</p>


                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <p className='input-label'>Name *</p>
                    <input className='input' type="text"placeholder='Name...' {...register("name",{
                        required:true
                    })} />
                    {errors.name &&
                    <span className='error'>
                        {errors.name.type === 'required' && 'This field is required'}
                    </span>
                    }
                    {/* Email */}
                    <p className='input-label'>Email *</p>
                    <input className='input' type="text"  placeholder='Email...' {...register("email",{
                        required:true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })} />
                    {errors.email &&
                    <span className='error'>
                        {errors.email.type === 'required' && 'This field is required'}
                        {errors.email.type === 'pattern' && 'Invalid Email Address'}
                    </span>
                    }
                    {/* Phone */}
                    <p className='input-label'>Phone *</p>
                    <input className='input' type="text" maxLength={10} placeholder='Phone...' {...register("phoneNumber",{
                        pattern: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
                    })} />
                    {errors.phoneNumber &&
                    <span className='error'>Invalid phone number</span>
                    }
                    {/* Message */}
                    <p className='input-label'>Message *</p>
                    <input className='input' type="text" placeholder='Message...' {...register("message",{
                        required:true
                    })} />
                    {errors.message &&
                    <span className='error'>Invalid Message</span>
                    }
                    {/* Submit */}
                    <div>
                      <input type="submit" className='submit' value={"send message"} />
                    </div>
                </form>
            </div>
        </div>
        
        {/* Image column */}
        <div className='column'>
                    <img src={image} ></img>
        </div>
      
      </div>
    </div>
  )
}

export default Form
