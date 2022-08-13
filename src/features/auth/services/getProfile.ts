import { API } from "configs/api"
import { IProfile } from "features/users/interfaces"

export async function getProfile() {
  return (await API.get<IProfile>("/users/profile")).data
}
