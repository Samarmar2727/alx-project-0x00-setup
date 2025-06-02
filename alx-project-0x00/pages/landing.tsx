
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
         <Card />
          <Card />
      <div className="flex flex-col items-center gap-4 mt-10">
      <Button title="Small Button" styles="text-sm rounded-sm" />
      <Button title="Medium Button" styles="text-sm rounded-md" />
      <Button title="rounded-lg-Button" styles="text-sm rounded-lg" />
       <Button title="Large Button" styles="text-sm rounded-full" />
    </div>

      
    </div>
  )
}
export default Landing