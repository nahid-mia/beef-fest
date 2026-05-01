import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-slate-200 text-center flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">
        Page Is Not Available
      </h2>
      <Link href={'/'}><button className="btn btn-warning">Go Home</button></Link>
    </div>
  );
}