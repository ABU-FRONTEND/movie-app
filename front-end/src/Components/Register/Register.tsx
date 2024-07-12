
import { Link } from "react-router-dom"
import icon from "../../assets/icons/movie-icon.svg"
import {useForm} from "react-hook-form"
export default function Register() {
    const {register,handleSubmit, formState: {errors}} = useForm({
        
    })
    
  return (
    <div className="w-full h-screen">
        <div className="h-screen flex flex-col gap-[40px] items-center pt-[100px]">
            <img src={icon} alt="web app icon" />
           <div className="w-full max-w-[400px] bg-[#161D2F] p-[30px] rounded-[20px]">
           <form onSubmit={handleSubmit((data) => console.log(data))}>
                <h1 className="text-3xl pb-7">Sign In</h1>
                <input type="text" {...register('email', {required: true, minLength: {
                    value: 3,
                    message: 'Can`t you required'
                }})} className=" pb-[10px] font-outfit font-light px-[10px] border-none outline-none bg-transparent  border-b-[2px] border-[#5a698f] text-[15px]" placeholder="Email address" />
                <span className="text-[#FC4747] text-[10px]">{errors.email?.message}</span>
                <hr className="border-[#5a698f]" />
                <input type="text"
                {...register('password', {required: true, minLength:{
                    value: 6,   
                    message: "can't you required"
                }})} className="pb-[10px] font-outfit font-light mt-[20px] px-[10px] border-none outline-none bg-transparent border-b border-[#5a698f] text-[15px]" placeholder="Password" />
                <span className="text-[#FC4747] text-[10px]">{errors.password?.message}</span>
                <hr  className="border-[#5a698f]"/>
                <input type="text"
                {...register('password', {required: true, minLength:{
                    value: 6,   
                    message: "can't you required"
                }})} className="pb-[10px] font-outfit font-light mt-[20px] px-[10px] border-none outline-none bg-transparent border-b border-[#5a698f] text-[15px]" placeholder="repeat Password" />
                <span className="text-[#FC4747] text-[10px]">{errors.password?.message}</span>
                <hr  className="border-[#5a698f]"/>
                <button className="block w-full bg-[#FC4747] p-[15px] rounded-[5px] mt-[40px]">Login to your account</button>
            </form>
            <p className="text-[15px] text-center font-outfit font-light pt-5">Don’t have an account? <Link className="text-[#FC4747]" to={'/login'}>Login</Link></p>
           </div>
        </div>
    </div>
  )
}

