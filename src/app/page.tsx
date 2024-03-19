
import Link from 'next/link';
import AdminImage from '../../public/admin-3d-illustration-icon-png.webp';
import TeachersImage from '../../public/teachers.png';
import StudentsImage from '../../public/students1.webp'
import Image from 'next/image';



export default function Home() {
  return (
    <main className=" flex gap-3 h-screen items-center justify-center">
      <div className=' card w-80 glass'>
        <figure>

          <Image src={AdminImage} alt='Admin Picture' />
        </figure>
        <div className='card-body'>
          <h2 className="card-title justify-center">
            <Link href='/Admin'>Admin</Link>
          </h2>
          
        </div>

      </div>
      <div className=' card w-80 glass'>
        <figure>
          <Image src={StudentsImage} alt='Students Image' />
        </figure>
        <div className='card-body'>
          <h2 className="card-title justify-center">
            <Link href='/login'>Students</Link>
          </h2>
        </div>

      </div>
      <div className=' card w-80 glass'>
        <figure>
          <Image src={TeachersImage} alt='Teachers Image' height={320} />
        </figure>
        <div className='card-body'>
          <h2 className="card-title justify-center">
            <Link href='/Teachers'>Teachers</Link>
          </h2>
        </div>

      </div>
    </main>
  );
}

// puspa@gmail.com ps:12345678
