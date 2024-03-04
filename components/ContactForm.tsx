"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { socials } from "@/constants"
import Image from "next/image"
import Link from "next/link"


const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    subject: z.string().min(2, {
        message: "Subject must be at least 2 characters.",
    }),
    message: z.string().min(10, {
        message: "Username must be at least 2 characters.",
    })

  })

type Props = {}

function ContactForm({}: Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            message: ""
        },
        
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className="w-full bg-white border-t-4 border-pink-500 px-10 py-20">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1 space-y-4">
                    <h2 className="text-2xl lg:text-3xl font-bold">Contact Us</h2>
                    <p className="text-base lg:text-lg">If you have any questions or are interested in our puppies, please don't hesitate to reach out. You can contact us by phone, email, or by filling out the form. We will respond promptly to assist you. For inquiries about a specific puppy, please include the puppy's name in the subject line for a quick response.</p>
                    <p className="pt-4 text-base lg:text-lg font-bold text-pink-500"><span className="text-black">Phone:</span>{" "}<span><a href="tel:1-859-308-2889">859-308-2889</a></span></p>
                    <p className="text-base lg:text-lg font-bold text-pink-500"><span className="text-black">Email:</span>{" "}<span><a href="mailto:info@pinkiespups.com">info@pinkiespups.com</a></span></p>
                    {/* comment this section */}

                </div>
                <div className="flex-1">
                    <Image className='bg-blend-darken w-full h-full object-cover' src="/pinky.jpeg" alt="hero" width={400} height={400}/>
                </div>
                {/*<div className="flex-1">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input className="rounded-sm outline-none focus:outline-none" placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input placeholder="Subject" {...field} />
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
                                <FormControl>
                                    <Textarea placeholder="Message" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <div className="flex items-center justify-end">
                                <Button size="xl" type="submit">Submit</Button>
                            </div>
                        </form>
                    </Form>
                            </div>*/}
            </div>
            
        </div>
    )
}

export default ContactForm