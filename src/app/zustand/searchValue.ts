import { create } from "zustand";
interface Value {
    value: string
    setValue: (v: string) => void
}
const useValue = create<Value>((set) => ({
    value: '',
    setValue: (e) => set(() => ({value: e}))
}))
export default useValue