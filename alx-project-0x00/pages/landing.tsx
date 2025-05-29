
import  Card from "../components/Card"
import Button from "../components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card/>
     
      <div className="flex flex-col items-center gap-4 mt-10">
      {/* Small Buttons */}
      <Button title="Small SM" styles="text-sm rounded-sm" />
      <Button title="Small MD" styles="text-sm rounded-md" />
      <Button title="Small FULL" styles="text-sm rounded-full" />

      {/* Medium Buttons */}
      <Button title="Medium SM" styles="text-base rounded-sm" />
      <Button title="Medium MD" styles="text-base rounded-md" />
      <Button title="Medium FULL" styles="text-base rounded-full" />

      {/* Large Buttons */}
      <Button title="Large SM" styles="text-lg rounded-sm" />
      <Button title="Large MD" styles="text-lg rounded-md" />
      <Button title="Large FULL" styles="text-lg rounded-full" />
    </div>

      
    </div>
  )
}
export default Landing