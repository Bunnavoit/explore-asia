"use client";

import { Button } from "@/common/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";
import { signIn } from "@/common/lib/auth/auth-client";
import { signInSchema } from "@/common/types/auth/sign-in-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export default function Authentication() {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: z.infer<typeof signInSchema>) {
    const { email, password } = data;

    if (!email || !password) {
      toast.error("Login or password is missing");
      return;
    }

    const res = await signIn.email(
      { email, password },
      {
        onRequest: (ctx) => {
          setIsLoading(true);
        },
        onResponse: (ctx) => {
          setIsLoading(false);
        },
      }
    );
    console.log("check response", res);
    if (res && res.data?.token && !res.error) {
      toast.success("Login successful!");
      router.push("/"); // ✅ Redirect to homepage
    } else {
      toast.error(
        typeof res?.error === "string"
          ? res.error
          : "Login failed. Please check your credentials."
      );
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
          <div className="hidden bg-muted lg:block">
            <Image
              src="/images/Travel-Social-Media-Banner-25.jpg"
              alt="Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-balance text-muted-foreground">
                  Enter your email below to login to your account
                </p>
              </div>
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="someone@example.com"
                          autoComplete="on"
                          className="px-4 font-semibold"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm font-semibold" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="********"
                          autoComplete="on"
                          className="px-4 font-semibold"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm font-semibold" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {isLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    "Login"
                  )}
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/auth/sign-up" className="underline">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
