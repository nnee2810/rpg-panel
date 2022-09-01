import { Button, Field, Input, Modal, Select, Textarea } from "components"
import { ModalProps } from "components/Modal"
import { FormProvider } from "react-hook-form"
import { ticketCategoryOptions } from "../constants"
import { useCreateTicket } from "../hooks"

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
            <Field
              name="category"
              label="Phân loại"
              tip="Hãy chọn phân loại phù hợp nhất với vấn đề của bạn"
            >
              <Select options={ticketCategoryOptions.slice(1)} />
            </Field>
            <Field
              name="title"
              label="Tiêu đề"
              tip="Tiêu đề có độ dài tối đa 50 kí tự"
            >
              <Input />
            </Field>
            <Field
              name="description"
              label="Mô tả"
              tip="Mô tả có độ dài tối đa 300 kí tự"
            >
              <Textarea />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button type="submit" scheme="primary" isLoading={isLoading}>
              Tạo
            </Button>
            <Button onClick={onClose}>Đóng</Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  )
}
