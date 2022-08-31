import { useAppSelector } from "hooks"
import { useForm } from "react-hook-form"
import { userSelector } from "store/reducers/user"
import { GetTicketsDto } from "../dto"
import { TicketCategory, TicketStatus } from "../interfaces"

interface UseSearchTicketsProps {
  updateQuery(values: GetTicketsDto): void
}

export default function useSearchTickets({
  updateQuery,
}: UseSearchTicketsProps) {
  const { profile } = useAppSelector(userSelector)
  const methods = useForm<GetTicketsDto>({
    defaultValues: {
      category: TicketCategory.ALL,
      status: TicketStatus.ALL,
      assignToId: 0,
    },
  })

  const handleSubmit = methods.handleSubmit(
    ({ category, status, assignToId }: GetTicketsDto) => {
      if (!profile) return
      updateQuery({
        category: category === TicketCategory.ALL ? undefined : category,
        status: status === TicketStatus.ALL ? undefined : status,
        assignToId: assignToId ? profile.id : undefined,
      })
    }
  )

  return {
    methods,
    handleSubmit,
  }
}
