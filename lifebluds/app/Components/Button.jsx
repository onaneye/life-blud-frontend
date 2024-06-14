import Link from "next/link";
import { useToggleBorder } from './Contex';

const button = () => {
  const { activeCards } = useToggleBorder();
  return (
    <>
        <div className="my-5 mx-1 w-full">
            <button className={`button-secondary-lg ${activeCards !== null ? 'bg-red-800':'disabled'}`}>Sign up</button>
            <p className="font-bold text-center py-5">Already have an account? <span className="text-red-800"><Link href="/login"> Login</Link></span></p>
          </div>
    </>
  )
}

export default button
