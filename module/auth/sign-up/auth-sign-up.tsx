// app/auth/sign-up/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { signUpSchema, SignUpValues } from "@/common/types/auth/sign-up-type";
import { signUp } from "@/common/lib/auth/auth-client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";
import { Button } from "@/common/components/ui/button";

export default function AuthSignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  async function onSubmit(data: SignUpValues) {
    setIsLoading(true);
    const res = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    setIsLoading(false);
    console.log("check response sign up", res);

    if (res && res.data?.token && !res.error) {
      toast.success("Sign up successful!");
      router.push("/");
    } else {
      toast.error(
        typeof res?.error === "string"
          ? res.error
          : "Sign up  failed. Please check your credentials."
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
              alt="Travel Banner"
              width={1920}
              height={1080}
              className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <p className="text-base text-muted-foreground">
                  Create your account below
                </p>
              </div>
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                      <FormLabel className="font-semibold">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="someone@example.com"
                          autoComplete="username"
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
                          type="password"
                          placeholder="********"
                          autoComplete="new-password"
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
                    "Sign Up"
                  )}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/auth/sign-in" className="underline">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
