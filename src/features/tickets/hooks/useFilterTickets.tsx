import { useForm } from "react-hook-form"
import { GetTicketsDto } from "../dto"
import { TicketStatus } from "../interfaces"

interface UseFilterTicketsProps {
  updateQuery(values: GetTicketsDto): void
}

export default function useFilterTickets({
  updateQuery,
}: UseFilterTicketsProps) {
  const methods = useForm<GetTicketsDto>({
    defaultValues: {
      category: null,
      status: TicketStatus.OPEN,
    },
  })

  const handleSubmit = methods.handleSubmit((data: GetTicketsDto) => {
    updateQuery(data)
  })

  return {
    methods,
    handleSubmit,
  }
}
