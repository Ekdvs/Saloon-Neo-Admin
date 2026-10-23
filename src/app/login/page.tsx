"use client";
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { toast } from 'react-hot-toast';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === null || email === undefined || email === "") {
            toast.error("Email is required");
            return;
        }
        if (password === null || password === undefined || password === "") {
            toast.error("Password is required");
            return;
        }

        toast("Login successful", {
            icon: '👏',
        });

    }

    return (
        <div className="h-screen w-full bg-red-100 flex items-center justify-center">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle className="text-center">Login to Saloon Neo Admin</CardTitle>
                    <CardDescription className="text-center">Enter your credentials to access the admin panel</CardDescription>

                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <Label className="mb-2">Email: </Label>

                        <Input
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />

                        <Label className="mb-2">Password: </Label>

                        <Input
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />

                        <Button className="bg-blue-500 text-white mt-4" onClick={() => {
                            handleLogin()
                        }}>Login</Button>

                    </div>
                </CardContent>

            </Card>
        </div>
    )
}

export default LoginPage