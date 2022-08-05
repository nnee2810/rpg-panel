import { MessageParams } from "yup/lib/types"

enum ValidateMessage {
  REQUIRED = "không được để trống",
  INVALID = "không hợp lệ",
  NOT_MATCH = "không khớp",
}

export function requiredMessage({ label }: MessageParams) {
  return label + " " + ValidateMessage.REQUIRED
}

export function invalidMessage({ label }: MessageParams) {
  return label + " " + ValidateMessage.INVALID
}

export function notMatchMessage({ label }: MessageParams) {
  return label + " " + ValidateMessage.NOT_MATCH
}
