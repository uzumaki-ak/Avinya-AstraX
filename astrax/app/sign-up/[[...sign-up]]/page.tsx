import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center mt-32">
      <SignUp />;
    </div>
  );
}
