import { useState } from "react"

type LoginForm = {
    name?: string
    password?:string
}

export function Login(){
    const [form, setForm] = useState<LoginForm>({name:"", password:""})
    const [errors, setErrors] = useState<LoginForm>({name:"", password:""})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]:e.target.value})
        setErrors({...errors, [e.target.name]: ""})
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const newErrors = {
            name: form.name ? "" : "Nama harus diisi",
            password: form.password ? "" : "Password harus diisi"
        }

        setErrors(newErrors)

        if(newErrors.name || newErrors.password) return

        console.log('LoginForm', form)
    }
    return(
        <form onSubmit={handleSubmit} className="flex flex-col w-90 gap-5 ml-3">
            <label htmlFor="" className="flex flex-col">
                Name
                <input type="text" placeholder="Input name" name="name" value={form.name} onChange={handleChange}/>
                {errors.name && <span className="text-red-500">{errors.name}</span>}
            </label>
            <label className="flex flex-col">
                Password
                <input type="text" placeholder="Input Password" name="password" value={form.password} onChange={handleChange}/>
                {errors.password && <span className="text-red-500">{errors.password}</span>}
            </label>

            <button type="submit">Login</button>
        </form>
    )
}





// import { useState } from "react"

// type LoginForm = {
//     name: string
//     password: string
// }

// export function Login() {
//     const [form, setForm] = useState<LoginForm>({ name: "", password: ""})
//     const [errors, setErrors] = useState('')

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setForm({...form, [e.target.name]:e.target.value})
//         setErrors('')
//     }

//     const handleSubmit = (e: React.FormEvent) =>{
//         e.preventDefault()

//         if(!form.name || !form.password){
//             setErrors('Nama atau password harus diisi')
//         }
//         console.log('Login Form', form)
//     }
//     return(
//         <div className="ml-2">
//             <div className="font-bold mt-5">
//                 Login Form
//             </div>
//             <form onSubmit={handleSubmit} className="w-64">
//                 <label htmlFor="name">Name</label>
//                 <input name="name" type="text" value={form.name} onChange={handleChange} className="border border-gray-400"/>
//                 <label htmlFor="password">Password</label>
//                 <input name="password" type="password" value={form.password} onChange={handleChange} className="border border-gray-400"/>
//                 {errors && <span>{errors}</span>}
//                 <button type="submit" className="border border-gray-500 px-2 py-1 hover:bg-gray-300 cursor-pointer">Login</button>
//             </form>
//         </div>
//     )
// }