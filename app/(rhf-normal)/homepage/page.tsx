'use client';

import { FieldValues, useForm } from 'react-hook-form';

export default function Homepage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log('clickedd');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className="flex items-center justify-center border-2 border-red-500 p-1">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[300px] flex-col justify-center"
      >
        <input
          {...register('email', {
            required: 'email is required',
          })}
          type="email"
          className="my-1 border-2 text-black"
          placeholder="email"
        />
        {errors.email && <p>{`${errors.email.message}`}</p>}
        <input
          {...register('password', {
            required: 'password is required',
          })}
          type="password"
          className="my-3 border-2 text-black"
          placeholder="password"
        />
        {errors.password && <p>{`${errors.password.message}`}</p>}
        <input
          {...register('confirmPassword', {
            required: 'confirm your password',
            validate: (value) => {
              return value === getValues('password') || 'passwords must match';
            },
          })}
          type="password"
          className="my-3 border-2 text-black"
          placeholder="confirm password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
        )}
        <button disabled={isSubmitting} className="rounded-sm bg-sky-800 p-2">
          Submit
        </button>
      </form>
    </div>
  );
}
