import { FormEvent, useState } from 'react';

const useForm = <T>(init: T) => {
  const [state, setState] = useState<T>(init);

  const handleChange = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setState({ ...state, [input.name]: input.value });
  };

  return { state, handleChange, setState };
};

export default useForm;
