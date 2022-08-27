import { Button, Input, Modal, Select, Textarea } from "components/basic"
import { ModalProps } from "components/basic/Modal"
import { SelectOption } from "components/basic/Select"
import { Field } from "components/core"
import { FormProvider } from "react-hook-form"
import { useCreateTicket } from "../hooks"

const categoryOptions: SelectOption[] = [
  {
    label: "Chung",
    value: "GENERAL",
  },
  {
    label: "Tài khoản",
    value: "ACCOUNT",
  },
  {
    label: "Nạp tiền",
    value: "DONATE",
  },
  {
    label: "Lỗi game",
    value: "BUG",
  },
]

export default function ModalCreateTicket({
  title,
  open,
  onClose,
}: ModalProps) {
  const { methods, handleSubmit, isLoading } = useCreateTicket({
    onClose,
  })

  return (
    <Modal title={title} open={open} onClose={onClose}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Field name="category" label="Phân loại">
              <Select options={categoryOptions} />
            </Field>
            <Field name="title" label="Tiêu đề">
              <Input />
            </Field>
            <Field name="description" label="Mô tả">
              <Textarea />
            </Field>
          </div>
          <div className="flex space-x-2">
            <Button type="submit" scheme="primary" isLoading={isLoading}>
              Tạo
            </Button>
            <Button type="button" onClick={onClose}>
              Đóng
            </Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  )
}
