import { Button, Textarea } from "components/basic"
import { Field } from "components/core"
import { FormProvider } from "react-hook-form"
import { useCreateTicketComment } from "../hooks"

interface TicketCreateCommentProps {
  id: string
}

export default function TicketCreateComment({ id }: TicketCreateCommentProps) {
  const { methods, handleSubmit, isLoading } = useCreateTicketComment(id)

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        <Field name="content">
          <Textarea placeholder="Viết phản hồi..." className="bg-gray-800" />
        </Field>
        <Button type="submit" scheme="primary" isLoading={isLoading}>
          Gửi
        </Button>
      </form>
    </FormProvider>
  )
}
