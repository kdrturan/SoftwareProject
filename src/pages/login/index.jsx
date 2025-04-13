import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {ROLES} from "../../utils/roles/index.js";
import {useState} from "react";
import {useNavigate} from "react-router";
import toast from "react-hot-toast";
import {USERS} from "../../utils/users/index.js";

export default function LoginPage() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "",
        remember: true,
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const correctUser = USERS.find(
        (user) =>
            user.role === formData.role &&
            user.email === formData.email &&
            user.password === formData.password
    );

    // login işlemleri backend hazır olduğunda buraya gelecek
    const handleSubmit = (e) => {
        e.preventDefault();
        if(correctUser){
            toast.success('Successfully logged in!');
            localStorage.setItem('user', JSON.stringify(formData));
            navigate(`/${correctUser.slug}`);
        }else{
            toast.error('Login information is incorrect')
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-lg">
                <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full px-4 py-3 rounded-xl bg-purple-100 border focus:outline-none focus:ring-2 focus:ring-purple-400'
                            placeholder="john@doe.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className='w-full px-4 py-3 rounded-xl bg-purple-100 border focus:outline-none focus:ring-2 focus:ring-purple-400'
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3.5 text-xl text-gray-600"
                            >
                                {showPassword ? <IoEyeOffOutline/> : <IoEyeOutline/>}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Role</label>
                        <div className="flex gap-4 text-sm">
                            {ROLES.map((role) => (
                                <label key={role} className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        name="role"
                                        value={role}
                                        onChange={handleChange}
                                        checked={formData.role === role}
                                    />
                                    {role}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="remember"
                            name="remember"
                            checked={formData.remember}
                            onChange={handleChange}
                            className="w-4 h-4"
                        />
                        <label htmlFor="remember" className="text-sm">Remember Me</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-purple text-purple-600 cursor-pointer font-semibold rounded-full"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>

    )
}