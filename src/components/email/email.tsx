import { useEmail } from "@/hooks/use-email"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

// Schema stays the same
const EmailFormSchema = z.object({
  gmailAccount: z.string().min(2),
  gmailAppPassword: z.string().min(6),
  receiverEmail: z.string().email(),
})

export function EmailSettingsForm() {
  const { settings, setSettings } = useEmail()
  const form = useForm({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      gmailAccount: settings.senderEmail,
      gmailAppPassword: settings.senderAppPassword,
      receiverEmail: settings.receiverEmail,
    },
  })

  const onSubmit = (data: any) => {
    setSettings({
      senderEmail: data.gmailAccount,
      senderAppPassword: data.gmailAppPassword,
      receiverEmail: data.receiverEmail,
    })
    toast({
      title: "Email Settings Saved",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="gmailAccount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gmail Account</FormLabel>
              <FormControl><Input placeholder="you@gmail.com" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gmailAppPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>App Password</FormLabel>
              <FormControl><Input type="password" placeholder="App password" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="receiverEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Receiver Email</FormLabel>
              <FormControl><Input type="email" placeholder="receiver@example.com" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save Settings</Button>
      </form>
    </Form>
  )
}
