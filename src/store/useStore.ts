import {create} from "zustand";
import {devtools} from "zustand/middleware";

interface IState {
    isPopUp: boolean,
    setIsPopUp: (isPopUp: boolean) => void
}

export const useStore = create<IState>()(
    devtools(
            (set) => ({
                isPopUp: false,
                setIsPopUp: (isPopUp: boolean) => set(() => ({isPopUp: isPopUp}))
            }),
            { name: 'store' },
    ),
)