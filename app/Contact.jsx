"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const FormSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email("Must be a valid email"),
  message: z.string().min(50, {
    message: "The message should exceed 50 characters ",
  }),
})

export function InputForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(data) {
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/5 max-md:w-3/5 max-sm:w-5/6 space-y-6">

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-h4 font-semibold">Name</FormLabel>
              <FormControl>
                <Input className="px-3 py-4 text-secnd/50 text-button" placeholder="Eg. Yasmin Siraj" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-h4 font-semibold">Email</FormLabel>
              <FormControl>
                <Input className="px-3 py-4 text-secnd/50 text-button" placeholder="your@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-h4 font-semibold">Message</FormLabel>
              <FormControl>
                <Textarea className="px-3 py-4 text-secnd/50 text-button" placeholder="Enter your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-secnd !text-h4 text-prime w-full !py-4">Send</Button>

      </form>
    </Form>
  )
}

export default function Contact (){
    return (
      <div className="contact bg-prime text-secnd py-16" id="contact">
        <div className="flex flex-col items-center justify-center">

          <div className="flex flex-col gap-0 text-h2 max-sm:text-h3 mb-10 font-semibold">
            <h1>We are here for you!</h1>
            <h1>How can we help?</h1>
          </div>

          <InputForm />

        </div>
      </div>
    )

}