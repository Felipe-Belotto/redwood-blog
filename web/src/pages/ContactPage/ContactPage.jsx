import { Metadata, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
  useForm,
} from '@redwoodjs/forms'


const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <Toaster />

      <h1 className='text-2xl font-bold text-zinc-600'>Contact Us</h1>

      <Form
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
        className="w-full flex flex-col"
      >
        <FormError error={error} wrapperClassName="form-error" />

        <Label name="name" errorClassName="error" className="rw-label">
          Name
        </Label>
        <TextField
        className="rw-input"
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error" className="rw-label">
          Email
        </Label>
        <TextField
        className="rw-input"
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error" className="rw-label">
          Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
          className="rw-input"
        />
        <FieldError name="message" className="error" />

        <Submit className="rw-button bg-emerald-600 mt-6 text-white" disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage