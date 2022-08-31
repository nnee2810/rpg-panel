import { Button, Input, Popover, Select } from "components/basic"
import { Field } from "components/core"
import { useAppSelector } from "hooks"
import debounce from "lodash/debounce"
import { ChangeEvent } from "react"
import { FormProvider } from "react-hook-form"
import { userSelector } from "store/reducers/user"
import {
  ticketAssignToOptions,
  ticketCategoryOptions,
  ticketStatusOptions,
} from "../constants"
import { GetTicketsDto } from "../dto"
import { useSearchTickets } from "../hooks"

interface SearchTicketsProps {
  updateQuery(values: GetTicketsDto): void
}

export default function SearchTickets({ updateQuery }: SearchTicketsProps) {
  const { profile } = useAppSelector(userSelector)
  const { methods, handleSubmit } = useSearchTickets({
    updateQuery,
  })
  const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    updateQuery({
      title: e.target.value,
    })
  }, 300)

  return (
    <div className="flex space-x-2">
      <Input placeholder="Tìm kiếm..." onChange={handleSearch} />
      <Popover button={<Button scheme="primary">Lọc</Button>} position="right">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="w-80">
              <Field name="category" label="Phân loại">
                <Select options={ticketCategoryOptions} />
              </Field>
              <Field name="status" label="Trạng thái">
                <Select options={ticketStatusOptions} />
              </Field>
              {!!profile?.Admin && (
                <Field name="assignToId" label="Người hỗ trợ">
                  <Select options={ticketAssignToOptions} />
                </Field>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button type="submit" scheme="primary">
                Lọc
              </Button>
              <Button onClick={() => methods.reset()}>Đặt lại</Button>
            </div>
          </form>
        </FormProvider>
      </Popover>
    </div>
  )
}
