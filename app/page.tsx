export default function Home() {
  return (
    <main>
      <h1>Westfield Cloud Run Demo</h1>

      <p>Application deployed with GitHub Actions</p>

      <p>{process.env.NEXT_PUBLIC_TITLE}</p>
    </main>
  );
}