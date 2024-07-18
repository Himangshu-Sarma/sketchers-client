import Menu from "@/components/Menu";
import Toolbox from "@/components/Toolbox";
import Board from "@/components/Board";

export default function Home() {
  return (
    <>
      <div style={{backgroundColor: 'white'}}>
        <Menu />
        <Toolbox />
        <Board />
      </div>
    </>
  );
}
