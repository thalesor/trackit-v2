interface IFormProps {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function Form({ children, onSubmit }: IFormProps){
  
  return (
      <form onSubmit={onSubmit}>
        {children}
      </form>
  )
}


