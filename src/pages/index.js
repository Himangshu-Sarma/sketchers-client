import Logo from "@/components/Logo";
import UserProfile from "@/components/UserProfile";
import Menu from "@/components/Menu";
import Toolbox from "@/components/Toolbox";
import Board from "@/components/Board";

export default function Home() {
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '1em', marginInline: '2.5em'}}>
        <Logo />
        <UserProfile />
      </div>
      <Menu />
      <Toolbox />
      <Board />
    </>
  );
}
