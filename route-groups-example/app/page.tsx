import Link from 'next/link';

export default function Home() {
  return (
    <div>
          Hello World!Welcome to My Page
          <br/>
          <Link href="/name">Go to name page</Link>
    </div>
  )
}
