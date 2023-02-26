import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div>로고</div>
      <Link href="/login">
        <div>login</div>
      </Link>
      <Link href="/signup">
        <div>signup</div>
      </Link>
    </div>
  );
}
