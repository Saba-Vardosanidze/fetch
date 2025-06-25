import {LoginType} from "./schema";
// ! აქ შევქმენით ასინქრონული ფუნქცია ანუ არ აყოვნებს არაფერს და ბოლოს ხორციელდება
// ?                        value ში გადაეცემა ის ინფორმაცია რაც უნდა გაიგზავნოს ბექზე
export async function login(value: LoginType) {
  const res = await fetch(
    "https://683f55645b39a8039a546084.mockapi.io/exampleBacksideFilter",
    {
      // ? სერვერს ჭირდება იცოდეს თუ რა რექვესტი მიდის
      method: "POST",
      //   ! ეს დაიკიდე
      headers: {"Content-Type": "application/json"},
      // ? მომხმარებელს ინფუთ ვაქმნევინებთ ობიექტს და ბექზე ობიექტი არ ინახება ამიტომ გვჭირდება რომ ობიექტი გადავაქციოთ json ად
      body: JSON.stringify(value),
    }
  );

  //   ? თუ რაიმემ ხელი შეუშალა რექვესტს და ვერ მივიდა ბექის სერვერვერამდე მაშინ დაგვიბრუნებს ფრჩხილებში ჩასმულ ტექსტს და იქნება ერორი
  if (!res.ok) {
    throw new Error("Error");
  }
  // ? ეს მხოლოდ იმშემთხვევაში განხორციელდება თუ ბექის სერვერამდე მიაღწია ინფორმაციამ
  return res.json();
}
