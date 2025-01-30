import { useForm } from "react-hook-form";

interface IFormProps {
  username: string;
  password: string;
  age: number;
}

const FormComponent = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<IFormProps>({ mode: "all" });

  const customHandleSubmit = (formDataProps: IFormProps) => {
    console.log(formDataProps);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(customHandleSubmit)}>
        <label>
          {" "}
          <input
            type="text"
            {...register("username", {
              pattern: { value: /\w+/, message: "wrong name" },
              required: true,
              minLength: { value: 1, message: "wrong name" },
            })}
          />
          {errors.username && <div>{errors.username.message}</div>}
        </label>

        <label>
          <input
            type="text"
            {...register("password", {
              required: true,
              minLength: { value: 3, message: "pass to short" },
              maxLength: { value: 6, message: "pass to long" },
            })}
          />

          {errors.password && <div>{errors.password.message}</div>}
        </label>

        <label>
          <input
            {...register("age", {
              required: true,
              valueAsNumber: true,
              min: { value: 1, message: "age to small" },
              max: { value: 117, message: "age to big" },
            })}
          />
          {errors.age && <div>{errors.age.message}</div>}
        </label>
        <button disabled={!isValid}>send</button>
      </form>
    </div>
  );
};

export default FormComponent;
