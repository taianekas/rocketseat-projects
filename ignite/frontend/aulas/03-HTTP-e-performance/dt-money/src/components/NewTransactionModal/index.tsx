import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { Controller, useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type newTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const createTransaction = useContextSelector(TransactionsContext, (context) => {
    return  context.createTransaction
  })

  const { control, register, handleSubmit, formState: {isSubmitting}, reset} = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  async function handleNewTransactionForm(data: newTransactionFormInputs) {
    const { description, price, category, type } = data
   
    await createTransaction({
      description,
      price,
      category,
      type,
    });

    reset()
  }
  
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewTransactionForm)}>
          <input 
            type="text" 
            placeholder="Descrição" 
            required 
            {...register('description')} 
          />

          <input 
            type="number"
            placeholder="Preço" 
            required 
            {...register('price', { valueAsNumber: true })} 
          />

          <input  
            type="text" 
            placeholder="Categoria" 
            required 
            {...register('category')}
          />

          <Controller control={control} name="type" render={({ field }) => {
            return (
              <TransactionType onValueChange={field.onChange} value={field.value}>
                <TransactionTypeButton variant="income" value={"income"}>
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton variant="outcome" value={'outcome'}>
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )
          }}/>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
