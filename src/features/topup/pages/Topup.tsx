import { Button, Field, PageHeader, RadioGroup } from "components"
import { FormProvider } from "react-hook-form"
import { Link } from "react-router-dom"
import { PaymentDetail } from "../components"
import { topupValueOptions } from "../constants"
import { useCreatePayment } from "../hooks"

export default function Topup() {
  const { methods, handleSubmit, isLoading } = useCreatePayment()
  const formValues = methods.watch()

  return (
    <div className="space-y-4">
      <PageHeader
        actions={
          <Link to="/topup/txn">
            <Button>Lịch sử giao dịch</Button>
          </Link>
        }
      >
        Nạp tiền
      </PageHeader>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="font-medium mb-1">Gói nạp</div>
              <Field name="amount">
                <RadioGroup options={topupValueOptions} />
              </Field>
            </div>
            <PaymentDetail data={formValues} isLoading={isLoading} />
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
