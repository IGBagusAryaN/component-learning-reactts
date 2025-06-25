import { useProfileStore } from "../store/profile-store"

export function PropsDrillingDodge() {
    const user = useProfileStore((state) =>state.user)

    return(
        <div>
            <h1>Props Drilling Dodge</h1>
            <div>{user.name} -- {user.email}</div>
        </div>
    )
}