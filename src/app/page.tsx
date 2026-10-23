import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/Them-switch";

export default function Home() {
  return (
    <div className ="w-[750px] h-[750px] flex flex-col items-center justify-center gap-4"> 
      
      <input type="text" className="w-[500px] h-[30px] border-2 border-black" />
      <Input className="bg-gray-700 "/>
      <Button className="bg-blue-500  text-white">Click me</Button>
      <ModeToggle/>
      
    </div>
  );
}
