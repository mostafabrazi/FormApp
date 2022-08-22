import create from 'zustand';

type FormStateType = 'not_submitted' | 'resolved' | 'rejected';
interface IFormSubmit {
  formState: FormStateType;
  setFormState: (resolved: FormStateType) => void;
}

export const useFormSubmit = create<IFormSubmit>((set, _get) => ({
  formState: 'not_submitted',
  setFormState: (formState: FormStateType) => {
    set({formState});
  },
}));

export const setFormState = (formState: FormStateType) =>
  useFormSubmit.getState().setFormState(formState);
