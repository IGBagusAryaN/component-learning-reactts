import { create } from "zustand"

type User = {
    name: string
    email: string
}

type UserStore = {
    user: User
    setUser: (user: User) => void
}
export const useProfileStore = create<UserStore>((set) => ({
    user: {name: "Arya", email: "arya@gmail.com"},
    setUser: (user) => set({user})
}))
