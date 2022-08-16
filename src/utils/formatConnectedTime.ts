export function formatConnectedTime(time: number) {
  return `${Math.floor(time)} giờ ${Math.round(
    (time - Math.floor(time)) * 60
  )} phút`
}
