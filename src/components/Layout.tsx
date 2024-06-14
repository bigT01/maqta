import { NavLink, Outlet } from "react-router-dom";
import {
    AiOutlineHeart,
    AiOutlineHome,
    AiOutlineShopping,
    AiOutlineUser
} from "react-icons/ai";
import {useStore} from "../store/useStore.ts";
import {useEffect, useState} from "react";
import AdditionalInfo from "./additionalInfo";
import AdditionalHistory from "./additionalInfo/AdditionalHistory.tsx";

const Layout = () => {
    const isPopUp = useStore(state => state.isPopUp)
    const isPopUpHistory = useStore(state => state.isPopUpHistory)
    const SetIsPopUpHistory = useStore(state => state.SetIsPopUpHistory)
    const setIsPopUp = useStore(state => state.setIsPopUp);
    const [isAnimation, setIsAnimation] = useState(false)
    const [isClose, setIsClose] = useState(false)
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        if (isPopUp) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
        if (isPopUpHistory) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

    }, [isPopUp])

    useEffect(() => {
        if (isClose) {
            setTimeout(() => {
                setIsPopUp(false)
                SetIsPopUpHistory(false)
                setIsAnimation(false)
            }, 1000)
            setIsClose(false)
        }
    }, [isClose])

    return (
        <div className={'w-screen  min-h-screen bg-[#EFF3D6] relative'}>

            <Outlet/>

            <div
                className={'w-full h-[60px] justify-between bg-white fixed bottom-0 rounded-t-3xl flex items-center px-[30px]'}>
                <NavLink to={'/'}>
                    <AiOutlineHome size={32}/>
                </NavLink>
                <NavLink to={'/cart'}>
                    <AiOutlineShopping size={32}/>
                </NavLink>
                <NavLink to={'/favorite'}>
                    <AiOutlineHeart size={32}/>
                </NavLink>
                <NavLink to={'/profile'}>
                    <AiOutlineUser size={32}/>
                </NavLink>

            </div>

            {isPopUp &&
                <AdditionalInfo isAnimation={isAnimation} setIsAnimation={setIsAnimation} setIsClose={setIsClose} setLiked={setLiked} liked={liked}/>
            }
            {isPopUpHistory &&
                <AdditionalHistory isAnimation={isAnimation} setIsAnimation={setIsAnimation} setIsClose={setIsClose}/>
            }
        </div>
    );
};

export default Layout;