import { Link } from "react-router-dom";
import icon from "../../assets/icons/movie-icon.svg";
import {  FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { ReactNode } from "react";
import useRegister from "../../hooks/useRegister";

export default function Register() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, getValues } = useForm({
        mode: 'onChange'
    });
    const mutation = useRegister();
    

    const onSubmit = async (data: FieldValues): Promise<void> => {
        const newData = { email: data.email, password: data.password };
        mutation.mutate(newData, {
            onSuccess: () => {
                navigate('/home')
            },
            onError: () => {
                alert('Wrong email or password');
            }
        });

        
    };
    return (
        <div className="w-full h-screen">
            <div className="h-screen flex flex-col gap-[40px] items-center pt-[100px]">
                <img src={icon} alt="web app icon" />
                <div className="w-full max-w-[400px] bg-[#161D2F] p-[30px] rounded-[20px]">
                    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                        <h1 className="text-3xl pb-7">Sign In</h1>
                        <input
                            type="text"
                            {...register('email', {
                                required: "Email address is required",
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Invalid email address"
                                }
                            })}
                            className="pb-[10px] w-full font-outfit font-light px-[10px] border-none outline-none bg-transparent border-b-[2px] border-[#5a698f] text-[15px]"
                            placeholder="Email address"
                        />
                        <hr className="border-[#5a698f]" />
                        <span className="text-[#FC4747] right-[10px] text-[10px]">{errors?.email?.message as ReactNode}</span>
                        <input
                            type="password"
                            {...register('password', {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            className="pb-[10px] w-full font-outfit font-light mt-[20px] px-[10px] border-none outline-none bg-transparent border-b border-[#5a698f] text-[15px]"
                            placeholder="Password"
                        />
                        <hr className="border-[#5a698f]" />
                        <span className="text-[#FC4747] text-[10px]">{errors?.password?.message as ReactNode}</span>
                        <input
                            type="password"
                            {...register('confirm', {
                                required: "Please confirm your password",
                                validate: {
                                    matchesPreviousPassword: (value) => {
                                        const { password } = getValues();
                                        return password === value || "Passwords should match";
                                    }
                                }
                            })}
                            className="pb-[10px] w-full font-outfit font-light mt-[20px] px-[10px] border-none outline-none bg-transparent border-b border-[#5a698f] text-[15px]"
                            placeholder="Repeat Password"
                        />
                        <hr className="border-[#5a698f]" />
                        <span className="text-[#FC4747] text-[10px]">{errors?.confirm?.message as ReactNode}</span>
                        <button className="block w-full bg-[#FC4747] p-[15px] rounded-[5px] mt-[40px]">Create an account</button>
                    </form>
                    <p className="text-[15px] text-center font-outfit font-light pt-5">
                        Already have an account? <Link className="text-[#FC4747]" to={'/login'}>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
