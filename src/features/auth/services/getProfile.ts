import { API } from "configs/api"
import { IProfile } from "interfaces"

export async function getProfile() {
  return (await API.get<IProfile>("/users/profile")).data
}
