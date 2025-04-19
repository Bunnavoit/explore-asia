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
import { signInSchema } from "@/common/types/auth/sign-in-type";
// import { useSignin } from "@/common/services/auth/login/service";
// import { signInSchema } from "@/common/types/auth/sign-in-type";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

export default function Authentication() {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof signInSchema>) {
    const formData = new FormData();
    formData.append("login", data.login);
    formData.append("password", data.password);

    const res = await fetch("/api/auth/signin/password", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      toast.success("Login successful");
      router.push("/"); // or wherever you want
    } else {
      const error = await res.text();
      toast.error("Login failed: " + error);
    }
  }

  //   const { mutate: signin, isPending } = useSignin();

  //   const handleLogin = (data: z.infer<typeof signInSchema>) => {
  //     signin(data, {
  //       onSuccess: () => {
  //         toast.success(`Login success `, {
  //           position: "bottom-center",
  //         });
  //         router.replace("/welcome");
  //       },
  //       onError: () => {
  //         toast.error(`Login failed `, {
  //           position: "bottom-center",
  //         });
  //       },
  //     });
  //   };

  //testing with auth0
  // const handleLogin = async (data: z.infer<typeof signInSchema>) => {
  //   const res = await fetch("/api/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });

  //   if (res.ok) {
  //     await res.json();
  //     // result contains tokens. You might store them in cookies via the server response
  //     // If you set a session cookie on the server, you're already logged in.
  //     toast.success("Login successful", {
  //       position: "bottom-center",
  //     });
  //     router.replace("/welcome");
  //   } else {
  //     toast.error("Login failed", {
  //       position: "bottom-center",
  //     });
  //   }
  // };

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
                  name="login"
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
                  {form.formState.isSubmitting ? "Logging in..." : "Login"}
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
