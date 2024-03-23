
import '../App.css'
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';

  

const Login = () => {
 const navigate = useNavigate();

  const Layout = () => {
    // Perform login authentication logic here

    // Assuming successful login, navigate to the dashboard
    navigate('/Layout');
  };

  return (
    <Card className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <CardHeader>
    <CardTitle className="text-4xl mb-8">Login</CardTitle>
    <CardDescription>Enter your email below to login to your account.</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="grid w-full gap-4">
    <div className="flex flex-col items-start space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
    </div>
    <div className="flex flex-col items-start space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
    </div>
    </div>
  </CardContent>
  <CardFooter>

    <Button onClick={Layout} className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Login</Button>
  </CardFooter>
</Card> 
  )
}

export default Login
