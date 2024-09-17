// import { Button } from "@/components/ui/button";
// import { UserButton } from "@clerk/nextjs";
import CategoryList from "./_components/CategoryList";
// import GlobalApi from "./_utils/GlobalApi";

export default function Home() {
  
  return (
    <div>
      {/* <h2>hello world</h2> */}
      <CategoryList/>
      {/* <Button >hello</Button> */}
      {/* <UserButton afterSwitchSessionUrl="/" afterSignOutUrl="/"></UserButton> */}
    </div>
  );
}



