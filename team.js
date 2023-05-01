import Navbar from '../components/Navbar';

export default function Team() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="p-6">
        <h1 className="text-4xl mb-4 font-bold">Our Team</h1>
        <p>...Content about the team at Whimsylabs...</p>
      </div>
    </div>
  );
}
