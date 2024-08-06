import Image from "next/image";
import Button from "@/components/ui/form/buttons/Button";
import Input from "@/components/ui/form/inputs/Input";
import Label from "@/components/ui/form/labels/Label";
import P from "@/components/ui/typography/P";
import Typography from "@/components/ui/typography/Typography";
import Anchor from "@/components/ui/typography/Anchor";
import Form from "@/components/ui/form";

const Login = async () => {
    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image width={40} height={40}
                       alt="Your Company"
                       src="https://images.unsplash.com/photo-1612810806546-ebbf22b53496?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                       className="mx-auto h-20 w-20 object-cover rounded-full"
                />
                <Typography className={"mt-10 text-center leading-9 tracking-tight text-gray-900"} variant={"h3"}
                            component={"h2"}>Sign in to your account</Typography>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <Form>
                    <div>
                        <Label htmlFor="email">Email address</Label>
                        <Input name={"email"} className={"mt-2"} type={"email"} error={false} />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input name={"password"} type={"password"} className={"mt-2"} error={false} />
                    </div>
                    <div>
                        <Button className={"w-full"} color={"primary"} size={"md"}>Login</Button>
                    </div>
                </Form>
                <P className="mt-10 text-center text-sm text-gray-500">
                    Not a member?&nbsp;
                    <Anchor href={"/register"} color={"primary"} variant={"p"}
                            className="font-semibold leading-6">Register</Anchor>
                </P>
            </div>
        </div>
    );
};

export default Login;