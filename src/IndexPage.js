export default function IndexPage({ navigate }) {
  return (
    <button onClick={() => navigate("/the-beatles")}>
      Open the Beatles artist page
    </button>
  );
}
