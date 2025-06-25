"use client";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {loginSchema, LoginType} from "./schema";
import {useMutation} from "@tanstack/react-query";
import {login} from "./api";

const Home = () => {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  // ! mutation ს გადაეცემა ორი არგუმენტი პირველი mutationFn და onSucces
  const mutation = useMutation({
    // ! აქ გადაეცემა API  ს სახელი
    mutationFn: login,
    // ! აქ გადაეცემა თუ რა უნდა მოხდეს როცა წარმატებით განხორციელდება ჩვენი რექვესტი
    onSuccess: () => {
      alert("sagolll");
    },
  });

  //! აქ შეივსო ეს  data ინფუთების ინფორმაციით და შემდეგ გადავეცით mutation ს
  const onSubmit = (data: LoginType) => {
    mutation.mutate(data);
  };

  return (
    <div>
      {/* როდესაც ღილაკს ვაჭერთ მაშინ ხორციელდება ეს ფუნქცია და რასაკეთებს  იღებს onSubmit ში ინფუთების ინფორმაციას და გადაცემს ზემოთ onSubmit ის ცვლადში ამ ინფორმაციას*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          {/* register ით ინფუთს ვარქმევთ სახელს და ამ სახელებით zod ს ვეხმარებით რომ მივანიჭოთ ვალიდაციები  */}
          <input type="email" {...register("email")} />
        </div>

        <div className="flex flex-col">
          <input type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">click me</button>
      </form>
    </div>
  );
};

export default Home;
