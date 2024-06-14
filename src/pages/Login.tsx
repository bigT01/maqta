import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="w-screen h-screen bg-[#004225] pt-36 pb-10 flex flex-col items-center">
            <div className='flex flex-col gap-4'>
                <h4 className={'font-bold text-white text-center mb-24 text-4xl'}>Sarqit</h4>
                <Link to={'/registration'} className='rounded-lg text-center text-white w-[250px] py-4 text-lg font-semibold' style={{border: '1px solid #FFFFFF'}}>Регистрация</Link>
                <Link to={'/authorization'} className='rounded-lg text-center text-[#004225] mb-5 shadow-2xl w-[250px] py-4 text-lg font-semibold bg-white' style={{border: '1px solid #FFFFFF'}}>Вход</Link>
                <Link to={'/auth-support'} className={'text-white text-center text-sm'}>Вход для сотрудников</Link>
            </div>
            <Link to={'/intro'} className='mt-auto text-center text-base text-[#C2A361]'>Зарегистрироваться позже</Link>
        </div>
    );
};

export default Login;